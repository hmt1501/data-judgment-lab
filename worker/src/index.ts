import { handle } from './app'
import { groqChat } from './groq'
import { D1Store } from './store'

const randomSuffix = () => {
  const bytes = crypto.getRandomValues(new Uint8Array(3))
  return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export default {
  async fetch(request, env): Promise<Response> {
    return handle(request, {
      store: new D1Store(env.DB),
      chat: groqChat(env.GROQ_API_KEY),
      config: {
        allowedOrigins: env.ALLOWED_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean),
        dailyLimit: Number(env.DAILY_LIMIT) || 20,
        dailyLimitPerIp: Number(env.DAILY_LIMIT_PER_IP) || 8,
        model: env.GROQ_MODEL,
      },
      now: () => new Date(),
      randomSuffix,
    })
  },
} satisfies ExportedHandler<Env>
