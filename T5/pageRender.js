const head = `<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Arquivo Aqueológico</title>
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script><script type="module" src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"></script>
<script nomodule="" src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"></script>
</head>
<body>`

export function renderHomePage(){
    return `
    ${head}
    <h2>Escola de musica</h2>
    <ul>
        <li>
            <a href="/alunos">
                Lista de Alunos
            </a>
        </li>
        <li>
            <a href="/instrumentos">
                Lista de Instrumentos
            </a>
        </li>
        <li>
            <a href="/cursos">
                Lista de Cursos
            </a>
        </li>
    </ul>
    `
}

export function renderAlunos(alunos){
    return`
    ${head}
    <h2>Alunos</h2>
    <ul>
        ${alunos.map(a =>`<li>${renderAluno(a)}</li>`).join('')}
    </ul>
    <address>[<a href="/">Home</a>]</address>`
}

export function renderAluno(aluno){
    return `
        <a href="/alunos/${aluno.id}">
            <p>
            ${aluno.id} ${aluno.nome}
            </p>
        </a>
        <p>${aluno.dataNasc}</p>
        <p>${aluno.anoCurso}º ano de
            <a href="/cursos/${aluno.curso}">
                ${aluno.curso}
            </a>
        </p>
        <a href="/instrumentos/${aluno.instrumento}">
            <p>${aluno.instrumento}</p>
        </a>
        `
}

export function renderInstrumentos(instrumentos){
    return`
    ${head}
    <h2>Instrumentos</h2>
    <ul>
        ${instrumentos.map(i =>`<li>${renderInstrumento(i)}</li>`).join('')}
    </ul>
    <address>[<a href="/">Home</a>]</address>`
}

function renderInstrumento(instrumento){
    return `
        <a href="/instrumentos/${instrumento.id}">
            <p>${instrumento.id}</p>
            <p>${instrumento['#text']}</p>
        </a>
    `
}
export function renderCursos(cursos){
    return`
    ${head}
    <h2>Cursos</h2>
    <ul>
        ${cursos.map(c => `<li>${renderCurso(c)} </li>`).join('')}
    </ul>
    <address>[<a href="/">Home</a>]</address>`
}

function renderCurso(curso) {
    return `
        <a href="/cursos/${curso.id}">
            <p>${curso.designacao}</p>
            <p>${curso.duracao}</p>
            ${renderInstrumento(curso.instrumento)}
        </a>
    `
}




export function render404Page(){
    return `
        ${head}
        <p>
            404 not Found 
        </p>`
}

export function render405Page(){
    return `
        ${head}
        <p>
            405 Method not Allowed
        </p>`
} 

