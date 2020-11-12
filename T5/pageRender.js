const head = `
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registo Escola de Música</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
           integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
           integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
           crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
           crossorigin="anonymous"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule="" src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"></script>
    </head>`

const navbar = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a class="navbar-brand" href="/">
            Registo Escola de Música
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item">
                    <a class="nav-link d-flex align-items-center mb-0" href="/">
                        <ion-icon name="home-outline" class="px-1"></ion-icon>  Home <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-flex align-items-center mb-0" href="/alunos">
                        <ion-icon name="people-outline" class="px-1"></ion-icon>  Alunos <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-flex align-items-center mb-0" href="/instrumentos">
                        <ion-icon name="musical-notes-outline" class="px-1"></ion-icon> Instrumentos <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-flex align-items-center mb-0" href="/cursos">
                    <ion-icon name="book-outline" class="px-1"></ion-icon> Cursos <span class="sr-only">(current)</span>
                    </a>
                </li>
               <li class="nav-item">
                    <a class="nav-link d-flex align-items-center mb-0" href="https://github.com/ricardoSlv/DAW2020/tree/master/T5">
                        <ion-icon name="logo-github" class="px-1"></ion-icon> Github <span class="sr-only">(current)</span>
                    </a>
                </li>
            </ul>
            <span class="navbar-text h5 mb-0">
               DAW 2020
            </span>
        </div>
    </nav>
`

export function renderHomePage(){
    return `
    ${head}
    ${navbar}
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
    ${navbar}
    <h1 class="display-3 my-5 text-center">
        <ion-icon name="people-outline" class="text-primary"></ion-icon>
        Lista de Alunos
        <ion-icon name="people-outline" class="text-primary"></ion-icon>
    </h1>
    <ul class="list-group container my-5">
        ${alunos.map(a =>`<li class="list-group-item list-group-item-action">${renderAluno(a)}</li>`).join('')}
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
        <p>${aluno.instrumento}</p>`
}

export function renderInstrumentos(instrumentos){
    return`
    ${head}
    ${navbar}
    <h1 class="display-3 my-5 text-center">
        <ion-icon name="musical-notes-outline" class="text-warning"></ion-icon>
        Lista de Instrumentos
        <ion-icon name="musical-notes-outline" class="text-warning"></ion-icon>
    </h1>
    <ul class="list-group container my-5">
        ${instrumentos.map(i =>`<li>${renderInstrumento(i)}</li>`).join('')}
    </ul>
    <address>[<a href="/">Home</a>]</address>`
}

export function renderInstrumento(instrumento){
    return `
        <a href="/instrumentos/${instrumento.id}">
            <p>${instrumento.id}</p>
            <p>${instrumento['#text']}</p>
        </a>`
}
export function renderCursos(cursos){
    return`
    ${head}
    ${navbar}
    <h1 class="display-3 my-5 text-center">
        <ion-icon name="book-outline" class="text-success"></ion-icon>
        Lista de Cursos
        <ion-icon name="book-outline" class="text-success"></ion-icon>
    </h1>
    <ul class="list-group container my-5">
        ${cursos.map(c => `<li>${renderCurso(c)} </li>`).join('')}
    </ul>
    <address>[<a href="/">Home</a>]</address>`
}

export function renderCurso(curso) {
    return `
        <a href="/cursos/${curso.id}">
            <p>${curso.designacao}</p>
            <p>${curso.duracao}</p>
            ${renderInstrumento(curso.instrumento)}
        </a>`
}




export function render404Page(){
    return `
        ${head}
        ${navbar}
        <section style="display:grid;grid-template-columns: 1fr 2.3fr 1fr; ">
         <nav style="display:grid;place-items:center;height:100vh;"></nav>
         <main>
            <div class="card m-5" style="height:70vh ">
               <div class="card-header text-capitalize h5">
                  <ion-icon name="bug-outline"></ion-icon></div>
               <div class="card-body ">
                  <h1 style="text-align: center; font-size:4rem ; margin:1.5em 0 1.5em 0 ">404 Not Found</h1>
                  <h2 style="text-align: center; font-size:3rem">😨O conteúdo não existe😨</h2>
               </div>
               <div class="card-footer bg-transparent text-primary">
               </div><a href="/" class="text-center h5 d-flex align-items-center justify-content-center mb-4">
                  <ion-icon name="arrow-back-circle-outline" class="h4 mb-0 pr-1"></ion-icon>
                  Voltar à Home
                  </a></div>
         </main>
      </section>`
}

export function render405Page(){
    return `
        ${head}
        ${navbar}
        <section style="display:grid;grid-template-columns: 1fr 2.3fr 1fr; ">
         <nav style="display:grid;place-items:center;height:100vh;"></nav>
         <main>
            <div class="card m-5" style="height:70vh ">
               <div class="card-header text-capitalize h5">
                  <ion-icon name="bug-outline"></ion-icon></div>
               <div class="card-body ">
                  <h1 style="text-align: center; font-size:4rem ; margin:1.5em 0 1.5em 0 ">405 Not Allowed</h1>
                  <h2 style="text-align: center; font-size:3rem">😨O método requisitado não é permitido😨</h2>
               </div>
               <div class="card-footer bg-transparent text-primary">
               </div><a href="/" class="text-center h5 d-flex align-items-center justify-content-center mb-4">
                  <ion-icon name="arrow-back-circle-outline" class="h4 mb-0 pr-1"></ion-icon>
                  Voltar à Home
                  </a></div>
         </main>
      </section>`
} 

