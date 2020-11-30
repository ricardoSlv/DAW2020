const readUploadedFileAsDataURL = (inputFile) => {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException("Problem parsing input file."));
        };

        temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result);
        };
        temporaryFileReader.readAsDataURL(inputFile);
    });
}

document.getElementById('edit-form').addEventListener('submit', async (e) => {

    e.preventDefault()

    if (!e.target.number.value.match(/(PG|A)[0-9]{5}$/)) {
        alert("O número inserido não está de acordo com o formato especificado")
        return
    }

    if (!e.target.git.value.match(/https:\/\/github.com\/[A-Za-z0–9]*\/DAW2020\/?$/)) {
        alert("O link para o git inserido não está de acordo com o formato especificado")
        return
    }

    let fileDataUrl
    if(e.target.img?.files[0])
        fileDataUrl = await readUploadedFileAsDataURL(e.target.img.files[0])

        const tpcResult = []
        for(check of e.target.tpc)
            tpcResult.push(check.checked ? 1 : 0)

        const updatedStudent = {
            numero: e.target.number.value,
            nome: e.target.name.value,
            git: e.target.git.value,
            tpc: tpcResult,
            imagem: fileDataUrl
        }
        const resp = await fetch(`\/alunos/${updatedStudent.numero}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(updatedStudent)
        })

        if (resp.ok) {
            alert("Aluno editado com sucesso")
            document.location = '/alunos'
        }
        else {
            if(resp.status===413)
                alert("Occorreu um erro ao inserir o aluno, a imagem é demasiado grande")
            else
                alert("Occorreu um erro ao inserir o aluno")
        }
    }
)