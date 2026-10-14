import { handle } from './app'
import { groqChat } from './groq'
import { retrieve } from './retrieve'
import { D1Store } from './store'

const randomBytes = (n: number) => crypto.getRandomValues(new Uint8Array(n))

const randomSuffix = () => [...randomBytes(3)].map((b) => b.toString(16).padStart(2, '0')).join('')

export default {
  async fetch(request, env): Promise<Response> {
    return handle(request, {
      store: new D1Store(env.DB),
      chatFor: (key) => groqChat(key),
      retrieve: (q) => retrieve(q),
      config: {
        allowedOrigins: env.ALLOWED_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean),
        dailyLimitPerIp: Number(env.DAILY_LIMIT_PER_IP) || 30,
        model: env.GROQ_MODEL,
        chatModel: env.CHAT_MODEL,
        syncCreateDaily: Number(env.SYNC_CREATE_DAILY) || 500,
        syncCreatePerIp: Number(env.SYNC_CREATE_PER_IP) || 10,
      },
      now: () => new Date(),
      randomSuffix,
      randomBytes,
    })
  },
} satisfies ExportedHandler<Env>
