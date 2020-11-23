import fs from "fs"
import axios from "axios"

import {
    renderHomePage,
    renderPage404, renderPage405,
    renderPageAlunos, renderPageAluno,
    renderPageInstrumentos, renderPageInstrumento,
    renderPageCursos, renderPageCurso
} from "./pageRender.js"

const db_server = process.env.DB_SERVER || 'http://localhost:3000'
console.log('DB server is:',db_server)

export function handleFavicon(res) {
    fs.readFile('./favicon.ico', (_, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write(data)
        res.end()
    })
}

export function handleHome(res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write(renderHomePage())
    res.end()
}

export function handleAlunos(res, query, queryParams) {
    axios.get(`${db_server}/alunos${query}`)
        .then(resp => {
            const alunos = resp.data
            const totalPages = Math.floor(parseInt(resp.headers['x-total-count'])/10)
            const page = parseInt(queryParams._page)
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderPageAlunos(alunos, page, totalPages))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção da lista de alunos ' + err)
                handle404(res)
            }
        )
}

export function handleAluno(res, alunoId) {
    axios.get(`${db_server}/alunos/${alunoId}`)
        .then(resp => {
            const aluno = resp.data
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderPageAluno(aluno))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção do aluno ' + err)
                handle404(res)
            }
        )
}

export function handleInstrumentos(res,query,queryParams) {
    axios.get(`${db_server}/instrumentos${query}`,)
        .then(resp => {
            const instrumentos = resp.data
            const totalPages = Math.floor(parseInt(resp.headers['x-total-count'])/10)
            const page = parseInt(queryParams._page) 
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderPageInstrumentos(instrumentos,page,totalPages))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção da lista de instrumentos ' + err)
                handle404(res)
            }
        )
}

export function handleInstrumento(res, instrumentoId) {
    axios.get(`${db_server}/instrumentos/${instrumentoId}`)
        .then(resp => {
            const instrumento = resp.data
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderPageInstrumento(instrumento))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção do instrumento ' + err)
                handle404(res)
            }
        )
}

export function handleCursos(res,query,queryParams) {
    axios.get(`${db_server}/cursos${query}`)
        .then(resp => {
            const cursos = resp.data
            const totalPages = Math.floor(parseInt(resp.headers['x-total-count'])/10)
            const page = parseInt(queryParams._page)
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderPageCursos(cursos,page,totalPages))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção da lista de cursos ' + err)
                handle404(res)
            }
        )
}

export function handleCurso(res, cursoId) {
    axios.get(`${db_server}/cursos/${cursoId}`)
        .then(resp => {
            const curso = resp.data
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderPageCurso(curso))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção da lista de alunos ' + err)
                handle404(res)
            }
        )
}

export function handle404(res) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write(renderPage404())
    res.end()
}

export function handle405(res) {
    res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write(renderPage405())
    res.end()
}
