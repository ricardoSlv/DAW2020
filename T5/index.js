import { createServer } from "http"

import {
    handleFavicon,
    handleHome,
    handle404,handle405,
    handleAlunos,handleAluno,
    handleInstrumentos,handleInstrumento,
    handleCursos,handleCurso
} from "./handlers.js"

createServer((req, res) => {
    
    const reqFields = req.url.split('/').slice(1)
    console.log(req.method, req.url)
    console.log(reqFields)

    if (req.method !== 'GET'){
        handle405(res)
        return
    }

    switch (reqFields[0]){
        case 'favicon.ico':
            handleFavicon(res)
        break
        case '':
            handleHome(res)
        break
        case 'alunos':
            if(reqFields[1])
                handleAluno(res,reqFields[1])           
            else
                handleAlunos(res,req.query)
        break
        case 'cursos':
            if(reqFields[1])
                handleCurso(res,reqFields[1])
            else
                handleCursos(res,req.query)
        break
        case 'instrumentos':
            if(reqFields[1])
                handleInstrumento(res,reqFields[1])
            else
                handleInstrumentos(res,req.query)
        break
        default:
            handle404(res)
        break
    }

}).listen(4000)

