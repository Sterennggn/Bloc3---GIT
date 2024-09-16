const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server =
    http.createServer( (requete, response) => {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        response.end('Coucou les champions SLAM2')
    })

server.listen(port, hostname, () => {
    console.log(`Le serveur tourne sur mon poste : http://${hostname} sur le port ${port}/`)
})