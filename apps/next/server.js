const {createServer} = require('http')
const {createProxyServer} = require('http-proxy')

const proxy = createProxyServer({
  target: 'http://localhost:8080'
})

module.exports = async function customServer(app, settings) {
  const handle = app.getRequestHandler()
  await app.prepare()
  return createServer((req, res) => {
    if (req.url === '/vue' || /^\/js/.test(req.url) || /^\/img/.test(req.url)) {
      return proxy.web(req, res)
    }
    return handle(req, res)
  }).listen(settings.port, settings.hostname)
}
