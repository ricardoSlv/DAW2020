import { createServer } from "http"
import url from "url";

import {
    handleFavicon,
    handleHome,
    handle404,handle405,
    handleAlunos,handleAluno,
    handleInstrumentos,handleInstrumento,
    handleCursos,handleCurso
} from "./handlers.js"

const port = process.env.PORT || 4000

createServer((req, res) => {
    
    const reqFields = url.parse(req.url,true).pathname.split('/').slice(1)
    const query = url.parse(req.url,true).search || '?_page=0'
    const queryParams = url.parse(req.url,true).query
    queryParams._page = queryParams._page || 0

    console.log(req.method, reqFields, query)

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
                handleAlunos(res,query,queryParams)
        break
        case 'cursos':
            if(reqFields[1])
                handleCurso(res,reqFields[1])
            else
                handleCursos(res,query,queryParams)
        break
        case 'instrumentos':
            if(reqFields[1])
                handleInstrumento(res,reqFields[1])
            else
                handleInstrumentos(res,query,queryParams)
        break
        default:
            handle404(res)
        break
    }

}).listen(port)

