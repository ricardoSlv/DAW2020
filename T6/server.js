import fs from "fs"
import { createServer } from "http"
import url from "url";
import axios from "axios"

import {
    handleFavicon,
    handle404, handle405,
} from "./handlers.js"

const port = process.env.PORT || 4000
const db_server = process.env.DB_SERVER || 'http://localhost:3000'

createServer((req, res) => {

    const reqFields = url.parse(req.url, true).pathname.split('/').slice(1)
    const query = url.parse(req.url, true).search || '?_page=0'
    const queryParams = url.parse(req.url, true).query
    queryParams._page = queryParams._page || 0

    console.log(req.url)
    //console.log(req.method, reqFields, query)

    if (['GET', 'POST', 'PUT'].includes(req.method) === false) {
        handle405(res)
        return
    }
    if (req.method === 'GET') {
        switch (reqFields[0]) {
            case 'static':
                switch (reqFields[1]) {
                    case 'notebook.svg':
                        res.writeHead(200, { 'Content-Type': 'image/svg+xml;  charset=utf-8' })
                        fs.readFile('./static/notebook.svg', (err, html) => {
                            err ?
                                res.write("<p>Oh no :(</p>") :
                                res.write(html)
                            res.end()
                        })
                        break
                    case 'style.css':
                        res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' })
                        fs.readFile('./static/style.css', (err, html) => {
                            err ?
                                res.write("<p>Oh no :(</p>") :
                                res.write(html)
                            res.end()
                        })
                        break
                    case 'index.js':
                        res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' })
                        fs.readFile('./static/index.js', (err, html) => {
                            err ?
                                res.write("<p>Oh no :(</p>") :
                                res.write(html)
                            res.end()
                        })
                        break
                    default:
                        handle404(res)
                        break
                }

                break
            case '':
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                fs.readFile("./static/index.html", (err, html) => {
                    err ?
                        res.write("<p>Oh no :(</p>") :
                        res.write(html)
                    res.end()
                })
                break
            case 'tasks':
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
                axios.get(`${db_server}/tasks`)
                    .then(resp => {
                        const tasks = resp.data
                        res.write(JSON.stringify(tasks))
                        res.end();
                    }).catch(
                        err => {
                            console.error('Erro na obtenção da lista de tarefas ' + err)
                            handle404(res)
                        }
                    )
                break
            default:
                handle404(res)
                break
        }
    }
    else if (req.method === 'POST') {
        if (reqFields[0] === 'tasks') {

            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });
            req.on('end', () => {
                console.log(body);
                res.end('ok');
                const newTask = JSON.parse(body);
                console.log(newTask);
                axios.post(`${db_server}/tasks/`,
                JSON.stringify(newTask),{
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then(_ => {
                    res.writeHead(200)
                    res.end()
                })
                .catch(_=>{
                    res.writeHead(500)
                    res.end()
                })
            });
            
        }
    }

}).listen(port)

