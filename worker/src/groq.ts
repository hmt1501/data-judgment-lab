const ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions'

export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string }

export type ChatRequest = {
  model: string
  messages: ChatMessage[]
  max_completion_tokens?: number
  reasoning_effort?: 'low' | 'medium' | 'high'
  temperature?: number
  response_format?: { type: 'json_schema'; json_schema: { name: string; strict: boolean; schema: object } }
}

export type Usage = { prompt_tokens: number; completion_tokens: number; total_tokens: number }

export type ChatResult = {
  content: string
  usage?: Usage
}

export class GroqError extends Error {
  constructor(
    readonly status: number,
    message: string,
    readonly retryAfter?: number,
  ) {
    super(message)
  }
}

export type Chat = (req: ChatRequest) => Promise<ChatResult>

type RawResponse = {
  choices?: { message?: { content?: string | null } }[]
  usage?: Usage
  error?: { message?: string }
}

export function groqChat(apiKey: string, fetchImpl: typeof fetch = fetch): Chat {
  return async (req) => {
    const res = await fetchImpl(ENDPOINT, {
      method: 'POST',
      headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify(req),
    })
    const body = (await res.json().catch(() => ({}))) as RawResponse
    if (!res.ok) {
      const retry = Number(res.headers.get('retry-after'))
      throw new GroqError(res.status, body.error?.message ?? `Groq HTTP ${res.status}`, Number.isFinite(retry) && retry > 0 ? retry : undefined)
    }
    return { content: body.choices?.[0]?.message?.content ?? '', usage: body.usage }
  }
}
