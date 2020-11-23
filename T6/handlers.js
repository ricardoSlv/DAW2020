import {
    renderPage404, renderPage405,
} from "./pageRender.js"

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
