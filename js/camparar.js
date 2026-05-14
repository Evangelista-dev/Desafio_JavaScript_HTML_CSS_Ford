
let comparar = document.querySelectorAll ('.btn-comparar');


function verificarSelecionados() {
    let carrosParaComparar = [];
    
    const checkboxes = document.querySelectorAll('.Card-Carro input[type="checkbox"]:checked');

    checkboxes.forEach(check => {
    
        if (check.carroDados) {
            carrosParaComparar.push(check.carroDados);
        }
    });

    return carrosParaComparar;
}

function executarComparacao() {
    const selecionados = verificarSelecionados(); 

    if (selecionados.length < 2) {
        alert("Por favor, selecione ao menos 2 carros!");
    } else {
     
        // inserir a tabela 
    }
}

 comparar.addEventListener('click', executarComparacao);

