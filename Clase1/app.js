const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('ContentType', 'text/plain')
    res.end('Hola mundo')
})

server.listen(port, hostname, () => {
    //template string: usando javascript versión ES6 (ECMA SCRIPT 2016)
    console.log(`Server running in http://${hostname}:${port}`)
})