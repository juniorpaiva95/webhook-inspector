import { fastify } from 'fastify'
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, type ZodTypeProvider } from 'fastify-type-provider-zod'
import { fastifySwagger} from '@fastify/swagger'
import { fastifyCors } from '@fastify/cors'
import ScalarApiReference from '@scalar/fastify-api-reference'
import { listWebhooks } from './routes/list-webhooks'
import { env } from './env'
import { getWebhook } from './routes/get-webhook'
import { captureWebhook } from './routes/capture-webhook'
import { deleteWebhook } from './routes/delete-webhook'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  // credentials: true, Permite que envie os cookies do cabecalho para o BackEnd.
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Webhook Inspector API',
      description: 'API for capturing and inspecting webhook requests',
      version: '1.0.0',
    }
  },
  transform: jsonSchemaTransform,
})

app.register(ScalarApiReference, {
  routePrefix: '/docs',
})

app.register(listWebhooks)
app.register(getWebhook)
app.register(deleteWebhook)
app.register(captureWebhook)

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running on http://localhost:3333')
  console.log('Docs available at http://localhost:3333/docs')
})
