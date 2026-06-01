class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, mensagem){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post() {

    let data = new contato(
        document.getElementById("nomeid").value,
        document.getElementById("sobrenomeid").value,
        document.getElementById("emailid").value,
        document.getElementById("cpfid").value,
        document.getElementById("telefoneid").value,
        document.querySelector(".aipapai").value,
        document.getElementById("mensagemid").value

    );

    console.log("NOVO CADASTRO REGISTRADO:");
    console.log(data);
}

function Enviar() {
    var nome = document.getElementById("nomeid");
    var sobrenome = document.getElementById("sobrenomeid");

    if (nome.value != "" && sobrenome.value != "") {
        alert('Obrigado sr(a) ' + nome.value +' '+ sobrenome.value + '  os seus dados foram encaminhados com sucesso');
    }
}

function validarFormulario(event) {
    
    event.preventDefault(); 

    
    const checkboxTermos = document.getElementById('lgpd-termos');

    
    if (!checkboxTermos.checked) {
        alert("Para continuar, você deve ler e aceitar os Termos e Condições.");
        return false; 
    }

    
    console.log("LGPD aceita. Enviando dados...");
    
   
    if (typeof Post === "function") Post();
    if (typeof Enviar === "function") Enviar();
}