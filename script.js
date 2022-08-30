const tituloCard = document.getElementById("titleForm");
const urlCard = document.getElementById("urlForm");
const descricaoCard = document.getElementById("textForm");
const categoriaCard = document.getElementById("categoria");
const enviarCard = document.querySelector("#submit");



function adicionarDadosNaPagina() {

  enviarCard.addEventListener("click", (enviar) => {
    enviar.preventDefault();

    if (tituloCard.value === ""){
        alert("Verifique os dados e tente novamente!!")
        tituloCard.focus();
        return false
    }

    let addCard = document.createElement("div");
    addCard.innerHTML = `
            <div class="card">
                    <div>
                        <img class="background_card" src="${urlCard.value}" alt="">
                    </div>
                    <h2 class="title_card">${tituloCard.value}</h2>
                    <p class="description">${descricaoCard.value}</p>
                    <p class="categoriaCard">${categoriaCard.value}</p>
                </div>
            `;
    document.querySelector(".dadosGaleria").appendChild(addCard);
  });
}

