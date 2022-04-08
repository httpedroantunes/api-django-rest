function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText

}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdNome = document.createElement("td");
    tdCurso = document.createElement("td");
    tdTurma = document.createElement("td");
    tdIdade = document.createElement("td");
    tdDepat= document.createElement("td");
    tdNome.innerHTML = usuario.nomeAluno
    tdIdade.innerHTML = usuario.idadeAluno
    tdCurso.innerHTML = usuario.nomeCurso
    tdTurma.innerHTML = usuario.Turma
    tdDepat.innerHTML = usuario.departamento

    
    linha.appendChild(tdNome);
    linha.appendChild(tdIdade);
    linha.appendChild(tdCurso);
    linha.appendChild(tdTurma);
    linha.appendChild(tdDepat);

    return linha;
}

function main() {
    let data = fazGet('http://127.0.0.1:8000/Alunos/')
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela")
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);

    });
    //Para cada usuario
    //criar uma linha
    //adicionar na tabela
}

main()