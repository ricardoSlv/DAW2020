import fs from "fs"
import axios from "axios"

import { renderHomePage, renderAlunos, renderInstrumentos, renderCursos, render404Page, render405Page } from "./pageRender.js"

const db_server = 'http://localhost:3000' || process.env.DB_SERVER

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

export function handleAlunos(res) {
    axios.get(`${db_server}/alunos`)
        .then(resp => {
            const alunos = resp.data
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderAlunos(alunos))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção da lista de alunos ' + err)
                handle404(res)
            }
        )
}

export function handleInstrumentos(res) {
    axios.get(`${db_server}/instrumentos`)
        .then(resp => {
            const instrumentos = resp.data
            console.log(instrumentos)
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderInstrumentos(instrumentos))
            res.end();
        }).catch(
            err => {
                console.error('Erro na obtenção da lista de instrumentos ' + err)
                handle404(res)
            }
        )
}

export function handleCursos(res) {
    axios.get(`${db_server}/cursos`)
        .then(resp => {
            const cursos = resp.data
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(renderCursos(cursos))
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
    res.write(render404Page())
    res.end()
}

export function handle405(res) {
    res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write(render405Page())
    res.end()
}
