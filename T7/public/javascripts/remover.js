async function deleteStudent(number){
    const resp = await fetch(`\/alunos/${number}`, {
        method: 'DELETE',
    })
    if (resp.ok) {
        const tableRow = document.getElementById(number)
        tableRow.parentNode.removeChild(tableRow)
        alert("Aluno removido com sucesso")
    }
    else 
        alert("Occorreu um erro ao remover o aluno")
}