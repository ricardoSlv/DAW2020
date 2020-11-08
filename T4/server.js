const http = require('http')
const fs = require('fs')

let page404 

fs.readFile('./website/404.html', (err, data) => {
    page404 = data
}) 

const PORT = process.env.PORT || 7500
http.createServer((req, res) => {

    console.log(req.method,req.url)

    const reqFields = req.url.split("/").slice(1)
    const [collection,id] = reqFields

    if(req.url==='/')
        handleHome(res)
    else if(req.url==='/favicon.ico')
        handleFavicon(res)
    else if (collection==='arq')
        handleArq(res,id)
    else{
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<p>O url não corresponde ao esperado</p>')
        res.end()
    }


}).listen(PORT)

console.info('Server listening on '+ PORT)

function handleArq(res,id){
    fs.readFile('./website/arq/' + parseInt(id) + '.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        const pageAnswer = data || page404
        res.write(pageAnswer)
        res.end()
    })
}

function handleHome(res){
    fs.readFile('./website/index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end()
    })
}

function handleFavicon(res){
    fs.readFile('./website/favicon.ico', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write(pageAnswer)
        res.end()
    })
}
