document.getElementById("btnWhatsapp").addEventListener("click", (event) => {

    // impede o form de recarregar
    event.preventDefault();

    // numero ofuscado
    const segredo = "NTUxNDk5MTIxNjE5NA==";

    // decodificando o numero
    const telefone = atob(segredo);

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
});