import { createServer } from "http"

import {handleFavicon,handleHome,handle404,handle405,handleAlunos,handleInstrumentos,handleCursos} from "./handlers.js"

createServer((req, res) => {
    
    //const reqFields = req.url.split('/')
    console.log(req.method, req.url)

    if (req.method !== 'GET') 
        handle405(res)
    else if(req.url==='/favicon.ico')
        handleFavicon(res)
    else if (req.url === '/') 
        handleHome(res)
    else if (req.url === '/alunos') 
        handleAlunos(res)
    else if (req.url === '/cursos') 
       handleCursos(res)
    else if (req.url === '/instrumentos') 
        handleInstrumentos(res)
    else 
        handle404(res)

}).listen(4000)

