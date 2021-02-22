const pokeDiv = document.getElementById("masterDiv")


function tela(i, nome, id) {
    let imagen = `<div class='bord'><img src='https://pokeres.bastionbot.org/images/pokemon/${i}.png'><span>nome : ${nome}</span><span>Id : ${id}</span></div>`
    pokeDiv.innerHTML += imagen
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

