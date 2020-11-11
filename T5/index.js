const http = require("http")
const axios = require("axios").default

http.createServer((req, res) => {
    console.log(req.method,' ',req.url)
    if (req.method === 'GET') {
        const reqFields = req.url.split('/')
        if (req.url == '/') {
            res.writeHead({ 'Content-Type': 'text.html' })
            res.write(`<h2>Escola de musica</h2>`)
            res.write(`<ul>`)
            res.write(`<li><a href="/alunos">Lista de Alunos</a></li>`)
            res.write(`<li><a href="/instrumentos">Lista de Instrumentos</a></li>`)
            res.write(`<li><a href="/cursos">Lista de Cursos</a></li>`)
            res.write(`</ul>`)
            res.end()
        }
        else if(req.url==='/alunos'){
            axios.get('http://localhost:3001/alunos')
            .then(resp=>{
                aluno=resp.data
                res.write(`<ul>`)
                alunos.forEach(a => {
                    res.writeHead({ 'Context-Type': 'text.html' })
                    res.write(`<li>${a.id} ${a.nome}</li>`)
                });
                res.write(`</ul>`)
                res.write('<address>[<a href="/">Home</a>]</address>')
            }).catch(
                err=>console.error('Erro na obtenção da lista de alunos '+err)
            )
        }
        else{
            res.writeHead({ 'Context-Type': 'text.html' })
            res.write(`<p>Pedido não supporttado: ${req.method}<\\p>`)
            res.end() 
        }
    }
    else {
        res.writeHead({ 'Context-Type': 'text.html' })
        res.write(`<p>Pedido não supporttado: ${req.method}<\\p>`)
        res.end()
    }
}).listen(4000)

