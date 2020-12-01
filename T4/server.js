import { createServer } from 'http'
import { readFile } from 'fs'

let page404 

readFile('./website/404.html', (err, data) => {
    page404 = data
}) 

const PORT = process.env.PORT || 7500
createServer((req, res) => {

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
    readFile('./website/arq/' + parseInt(id) + '.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        const pageAnswer = data || page404
        res.write(pageAnswer)
        res.end()
    })
}

function handleHome(res){
    readFile('./website/index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write(data)
        res.end()
    })
}

function handleFavicon(res){
    readFile('./website/favicon.ico', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write(data)
        res.end()
    })
}
