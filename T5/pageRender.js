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

function pageNavigation(collection,page,totalPages,previousPage,nextPage){
    return `
    <nav style="display:grid;place-items:center; " class="mt-5" aria-label="...">
        <ul class="pagination ">
          <li class="page-item ">
              <a class="page-link" href="${collection}?_page=${0}">
                  First
              </a>
          </li>
          <li class="page-item ">
              <a class="page-link" href="${collection}?_page=${previousPage}">
                  Previous
              </a>
          </li>
          <li class="page-item">
              <a class="page-link" href="${collection}?_page=${previousPage}">
                  ${previousPage}
              </a>
          </li>
          <li class="page-item active" aria-current="page">
            <span class="page-link">
              ${page}
              <span class="sr-only">(current)</span>
            </span>
          </li>
          <li class="page-item">
              <a class="page-link" href="${collection}?_page=${nextPage}">
                  ${nextPage}
              </a>
          </li>
          <li class="page-item">
              <a class="page-link" href="${collection}?_page=${nextPage}">
                  Next
              </a>
          </li>
          <li class="page-item ">
              <a class="page-link" href="${collection}?_page=${totalPages-1}">
                  Last
              </a>
          </li>
        </ul>
    </nav>`
}

function nextPageNavigation(nextPage,collection) {
    return `
    <nav style="display:grid;place-items:center;height:100%;">
        <a href="/${collection}?_page=${nextPage}" style="font-size:7rem;">
            <ion-icon name="chevron-forward"></ion-icon>
        </a>
    </nav>`
}

function previousPageNavigation(previousPage,collection) {
    return `
    <nav style="display:grid;place-items:center;height:100%;">
        <a href="/${collection}?_page=${previousPage}" style="font-size:7rem;">
            <ion-icon name="chevron-back"></ion-icon>
        </a>
    </nav>`
}

export function renderHomePage(){
    return `
    ${head}
    ${navbar}
    <h1 class="display-3 my-5 text-center">
        <ion-icon class="text-primary" name="school-outline"></ion-icon>
        <ion-icon class="text-primary" name="musical-notes-outline"></ion-icon>
        Escola de Música
        <ion-icon class="text-primary" name="musical-notes-outline"></ion-icon>
        <ion-icon class="text-primary" name="school-outline"></ion-icon>
    </h1>
    <ul class="list-group container my-5">
      <li class="list-group-item list-group-item-action">
            <h1 class="display-4" >
                <a href="/alunos">
                    <ion-icon name="people-outline" class="px-1"></ion-icon> <span class="sr-only">(current)</span>
                    Lista de Alunos
                </a>
            </h1>
        </li>
        <li class="list-group-item list-group-item-action">
            <h1 class="display-4" >
                <a href="/instrumentos">
                    <ion-icon name="musical-notes-outline" class="px-1"></ion-icon> <span class="sr-only">(current)</span>
                    Lista de Instrumentos
                </a>
            </h1>
        </li>
        <li class="list-group-item list-group-item-action">
            <h1 class="display-4" >
                <a href="/cursos">
                    <ion-icon name="book-outline" class="px-1"></ion-icon> <span class="sr-only">(current)</span>
                    Lista de Cursos
                </a>
            </h1>
        </li>
    </ul>
    `
}

export function renderPageAlunos(alunos,page,totalPages){
    const previousPage=(totalPages+page-1)%totalPages
    const nextPage=(page+1)%totalPages
    return`
    ${head}
    ${navbar}
    <h1 class="display-3 my-5 text-center">
        <ion-icon name="people-outline" class="text-primary"></ion-icon>
        Lista de Alunos
        <ion-icon name="people-outline" class="text-primary"></ion-icon>
    </h1>
    <section style="display:grid;grid-template-columns: 1fr 2.3fr 1fr; ">
        ${previousPageNavigation(previousPage,'alunos')}
        <main>
        <table class="table table-striped ">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Data Nascimento</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Ano</th>
                    <th scope="col">Instrumento</th>
                </tr>
            </thead>
            <tbody>
                ${alunos.map(a =>`
                    <tr>
                        ${renderAluno(a)} 
                    </tr>`).join('')}
            </tbody>
        </table>
        ${pageNavigation('alunos',page,totalPages,previousPage,nextPage)}
        </main>
        ${nextPageNavigation(nextPage,'alunos')}
    </section>`
}

export function renderAluno(aluno){
    return `
        <th scope="row"><a href="/alunos/${aluno.id}">${aluno.id}</th>
        <td>${aluno.nome.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</td>
        <td>${aluno.dataNasc}</td>
        <td><a href="/cursos/${aluno.curso}">${aluno.curso}</a></td>
        <td>${aluno.anoCurso}</td>
        <td>${aluno.instrumento}</td>`
}

export function renderPageAluno(aluno) {
    return`
    ${head}
    ${navbar}
    <section style="display:grid; place-items:center ">
        <main>
        <div class="card m-5">
            <div class="card-header text-capitalize h5">
                <ion-icon name="person"></ion-icon>
                ${aluno.id}
            </div>
            <div class="card-body ">
                <h2 class="card-title">${aluno.nome.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</h2>
                <p>
                    <b>Curso: </b>
                    <a href="/alunos/${aluno.curso}">${aluno.curso} ${aluno.anoCurso}º ano </a> 
                </p>
                <p><b>Instrumento: ${aluno.instrumento}</b></p>
                <p><b>Data de Nascimento: </b>${aluno.dataNasc}</p>
            </div>
            <div class="card-footer bg-transparent text-primary p-0">
            </div>
                <a href="/" class="text-center h5 d-flex align-items-center justify-content-center p-2 m-0">
                    <ion-icon name="arrow-back-circle-outline" class="h4 mb-0"></ion-icon>
                    Voltar à Home
                </a>
            </div>
        </main>
    </section>`
}

export function renderPageInstrumentos(instrumentos,page,totalPages){
    const previousPage=(totalPages+page-1)%totalPages
    const nextPage=(page+1)%totalPages
    return`
    ${head}
    ${navbar}
    <h1 class="display-3 my-5 text-center">
        <ion-icon name="musical-notes-outline" class="text-warning"></ion-icon>
        Lista de Instrumentos
        <ion-icon name="musical-notes-outline" class="text-warning"></ion-icon>
    </h1>
    <section style="display:grid;grid-template-columns: 1fr 2.3fr 1fr; ">
        ${previousPageNavigation(previousPage,'instrumentos')}
        <main>
            <table class="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    ${instrumentos.map(a =>`
                        <tr>
                            ${renderInstrumento(a)} 
                        </tr>`).join('')}
                </tbody>
            </table>
            ${pageNavigation('instrumentos',page,totalPages,previousPage,nextPage)}
        </main>
        ${nextPageNavigation(nextPage,'instrumentos')}
    </section>`
}

export function renderInstrumento(instrumento){
    return `
        <th scope="row"><a href="/instrumentos/${instrumento.id}">${instrumento.id}</th>
        <td>${instrumento['#text']}</td>`
}

export function renderPageInstrumento(instrumento) {
    return`
    ${head}
    ${navbar}
    <section style="display:grid; place-items:center ">
        <main>
        <div class="card m-5">
            <div class="card-header text-capitalize h5">
                <ion-icon name="book-outline"></ion-icon>
                ${instrumento.id}
            </div>
            <div class="card-body ">
                <h2 class="card-title">${instrumento['#text']}</h2>
            <div class="card-footer bg-transparent text-primary p-0">
            </div>
                <a href="/" class="text-center h5 d-flex align-items-center justify-content-center p-2 m-0">
                    <ion-icon name="arrow-back-circle-outline" class="h4 mb-0"></ion-icon>
                    Voltar à Home
                </a>
            </div>
        </main>
    </section>`
}

export function renderPageCursos(cursos,page,totalPages){
    const previousPage=(totalPages+page-1)%totalPages
    const nextPage=(page+1)%totalPages
    return`
    ${head}
    ${navbar}
    <h1 class="display-3 my-5 text-center">
        <ion-icon name="book-outline" class="text-success"></ion-icon>
        Lista de Cursos
        <ion-icon name="book-outline" class="text-success"></ion-icon>
    </h1>
    <section style="display:grid;grid-template-columns: 1fr 2.3fr 1fr; ">
        ${previousPageNavigation(previousPage,'cursos')}
        <main>
            <table class="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Designação</th>
                        <th scope="col">Duração</th>
                        <th scope="col">Instrumento</th>
                    </tr>
                </thead>
                <tbody>
                    ${cursos.map(a =>`
                        <tr>
                            ${renderCurso(a)} 
                        </tr>`).join('')}
                </tbody>
            </table>
            ${pageNavigation('cursos',page,totalPages,previousPage,nextPage)}
        </main>
        ${nextPageNavigation(nextPage,'cursos')}
    </section>`
}

export function renderCurso(curso) {
    return `
    <th scope="row"><a href="/cursos/${curso.id}">${curso.id}</th>
    <td>${curso.designacao}</td>
    <td>${curso.duracao}</td>
    <td><a href="/instrumentos/${curso.instrumento.id}">${curso.instrumento['#text']}</td>`
}

export function renderPageCurso(curso) {
    return`
    ${head}
    ${navbar}
    <section style="display:grid; place-items:center ">
        <main>
        <div class="card m-5">
            <div class="card-header text-capitalize h5">
                <ion-icon name="book-outline"></ion-icon>
                ${curso.id}
            </div>
            <div class="card-body ">
                <h2 class="card-title">${curso.designacao}</h2>
                <p>
                    <b>Instrumento: </b>
                    <a href="/instrumentos/${curso.instrumento.id}">${curso.instrumento['#text']}</a> 
                </p>
                <p><b>Duração: ${curso.duracao} anos</b></p>
            </div>
            <div class="card-footer bg-transparent text-primary p-0">
            </div>
                <a href="/" class="text-center h5 d-flex align-items-center justify-content-center p-2 m-0">
                    <ion-icon name="arrow-back-circle-outline" class="h4 mb-0"></ion-icon>
                    Voltar à Home
                </a>
            </div>
        </main>
    </section>`
}

export function renderPage404(){
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

export function renderPage405(){
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

