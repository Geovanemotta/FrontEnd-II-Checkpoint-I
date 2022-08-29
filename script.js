
   const tituloCard = document.getElementById("titleForm")
   const urlCard = document.getElementById("urlForm")
   const descricaoCard = document.getElementById("textForm")
   const categoriaCard = document.getElementById("categoria")
   const enviarCard = document.querySelector("#submit")


window.onload = function (){  

   enviarCard.addEventListener('click', enviar => {
        enviar.preventDefault()
            let addCard = document.createElement('div')
            addCard.innerHTML = `
            <div class="card">
                    <div>
                        <img class="background_card" src="${urlCard.value}" alt="">
                    </div>
                    <h2 class="title_card">${tituloCard.value}</h2>
                    <p class="description">${descricaoCard.value}</p>
                </div>
            `
            document.querySelector(".dadosGaleria").appendChild(addCard)
   }  )

}

















    // let form = document.querySelector("form")
    // let inputs = document.getElementById("textarea")
    // let divDadosGaleria = document.getElementById("dadosGaleria")


// form.addEventListener("submit", (evento) => {
//     evento.preventDefault()
//     let titulo = form["title"].value
//     let url = form["url"].value
//     let descript = form["description"].value
//     let category = form["categoria"].value
//     adicionarDadosNaPagina()

//     console.log(titulo, url, descript, category);
// })

  
// function adiconarImagensNaGaleria(listaInputs) {
//     for (const input of listaInputs) {
//         let img = document.createElement("img")
//         img.src = input.value
//         divGaleria.appendChild(img)

//         input.value = ""
//     }
// }
    

// function adicionarDadosNaPagina(inputDados) {
//     for (const input of inputDados) {
        
        
//         let urlImg = document.createElement("img")
//         // let description = document.createElement("p")
        
        

//         urlImg.src = input.value
//         divDadosGaleria.appendChild(urlImg)

//         // description.innerHTML = input.value
//         // divDadosGaleria.appendChild(description)
        

//        input.value = ""
//     }
// }


// function adicionarTitulo(inputDados) {
//     for (const input of inputDados) {
//         let title = document.createElement("h2")
//         title.innerText = input.value
//         divDadosGaleria.appendChild(title)

//         input.value = ""
//     }
// }

// function adicionarImg(inputDados) {
//     for (const input of inputDados) {
//         let urlImg = document.createElement("img")
//         urlImg.src = input.value
//         divDadosGaleria.appendChild(urlImg)

//         input.value = ""
//     }
// }

// function addDescription(inputDados) {
//     for (const input of inputDados) {
//         let description = document.createElement("p")
//         description.innerHTML = input.value
//         divDadosGaleria.appendChild(description)

//         input.value = ""
//     }
// }


