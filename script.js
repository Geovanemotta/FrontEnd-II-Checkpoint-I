const tituloCard = document.getElementById("titleForm");
const urlCard = document.getElementById("urlForm");
const descricaoCard = document.getElementById("textForm");
const categoriaCard = document.getElementById("categoria");
const enviarCard = document.querySelector("#submit");
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
})

let titulo = form["title"]
    titulo.onblur = () => {     
    titulo.value = titulo.value.toLocaleUpperCase()    
    const tagError = titulo.parentElement.children[2]
    if (titulo.value.length < 1 ) {        
        tagError.innerHTML = "O campo não foi preenchido corretamente!!"
    } else {
        tagError.innerHTML = ""
    }   
}

let url = form["url"]
    url.onblur = () => {    
    const tagError = url.parentElement.children[5]
    if (url.value.length < 1 ) {        
        tagError.innerHTML = "Url inválida, verique os dados!!"
    } else {
        tagError.innerHTML = ""
    }  
}

function adicionarDadosNaPagina() {

  enviarCard.addEventListener("click", (enviar) => {
    enviar.preventDefault();

   if (tituloCard.value < 1){      
       alert("Verifique os campos antes de enviar!!")
       return false      
  }

    let addCard = document.createElement("div");
    addCard.innerHTML = `
            <div class="card">
                    <div>
                        <img class="backgroundCard" src="${urlCard.value}" alt="">
                    </div>
                    <h2 class="titleCard">${tituloCard.value}</h2>
                    <p class="description">${descricaoCard.value}</p>
                    <p class="categoriaCard">Categoria: ${categoriaCard.value}</p>
                </div>
            `;
    document.querySelector(".dadosGaleria").appendChild(addCard);
  });
}

