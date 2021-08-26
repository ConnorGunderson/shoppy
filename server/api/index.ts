// instantiate server on PORT 5000
import server from './server'

server.listen({ port: 5000 }).then((s) => {
  console.log(`Apollo server currently running at ${s.url}`)
})
