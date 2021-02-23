const pokeDiv = document.getElementById("masterDiv")
const proximo = document.getElementById("proximo")
const anterior = document.getElementById("anterior")
const botao1 = document.getElementById("1")
const botao2 = document.getElementById("2")
const botao3 = document.getElementById("3")
const posicao = document.querySelector(".p1")
posicao.value = ""

function tela(i, nome, id) {
    let imagen = `<div class='bord'><img src='https://pokeres.bastionbot.org/images/pokemon/${i}.png'><span>nome : ${nome}</span><span>Id : ${id}</span></div>`
    onload(pokeDiv.innerHTML += imagen)
}


//posição 0 nao existe imagens- começar com 1 
for (var i = 1; i <= 50; i++) {
    let num = i
    const pokeapi = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + i
        fetch(url)
            .then(res => res.json())
            .then(data => {
                (data.name),
                    tela(num, data.name, num)
            }// num seria data.id
                //console.log(data.sprites.other.dream_world.front_default)     imagens dos pokemons      

            )
            .catch(er => console.log(er))
    }
    pokeapi()


}
const md1 = () => {
    if (posicao.value == "ola1") {

    } else {
        pokeDiv.innerHTML = ""

        for (var i = 1; i <= 50; i++) {
            let num = i
            const pokeapi = () => {
                const url = "https://pokeapi.co/api/v2/pokemon/" + i
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        (data.name),
                            tela(num, data.name, num)
                    }// num seria data.id
                        //console.log(data.sprites.other.dream_world.front_default)     imagens dos pokemons         

                    )
                    .catch(er => console.log(er))
            }
            pokeapi()
        }
        posicao.value = "ola1"
        botao1.style.backgroundColor = "blue"
        botao2.style.backgroundColor = "rgb(0, 255, 255)"
        botao3.style.backgroundColor = "rgb(0, 255, 255)"
    }

}

const md2 = () => {

    if (posicao.value == "ola2") {

    } else {
        pokeDiv.innerHTML = ""
        for (var i = 51; i <= 100; i++) {
            let num = i
            const pokeapi = () => {
                const url = "https://pokeapi.co/api/v2/pokemon/" + i
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        (data.name),
                            tela(num, data.name, num)
                    }// num seria data.id
                        //console.log(data.sprites.other.dream_world.front_default)     imagens dos pokemons         

                    )
                    .catch(er => console.log(er))
            }
            pokeapi()
        }
        posicao.value = "ola2"
        botao2.style.backgroundColor = "blue"
        botao1.style.backgroundColor = "rgb(0, 255, 255)"
        botao3.style.backgroundColor = "rgb(0, 255, 255)"
    }

}

const md3 = () => {
    if (posicao.value == "ola3") {

    } else {

        pokeDiv.innerHTML = ""
        for (var i = 101; i <= 150; i++) {
            let num = i
            const pokeapi = () => {

                const url = "https://pokeapi.co/api/v2/pokemon/" + i
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        (data.name),
                            tela(num, data.name, num)

                    }// num seria data.id
                        //console.log(data.sprites.other.dream_world.front_default)     imagens dos pokemons         

                    )
                    .catch(er => console.log(er))
            }

            pokeapi()
        }
        posicao.value = "ola3"
        botao3.style.backgroundColor = "blue"
        botao1.style.backgroundColor = "rgb(0, 255, 255)"
        botao2.style.backgroundColor = "rgb(0, 255, 255)"
    }
}
//botao1
botao1.addEventListener('click', md1)
//botao2
botao2.addEventListener('click', md2)
//botao3

botao3.addEventListener('click', md3)

//proximo
proximo.addEventListener('click', () => {
    if (posicao.value == "ola3") {
    } else
        if (posicao.value == "ola2") {
            md3()
        } else
            if (posicao.value == "ola1") {
                md2()
            }
})

//anterior
anterior.addEventListener('click', () => {
    if (posicao.value == "ola3") {
        md2()
    } else
        if (posicao.value == "ola2") {
            md1()
        } else
            if (posicao.value == "ola1") {

            }
})
