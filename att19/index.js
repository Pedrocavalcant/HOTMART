const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')
const feed = document.querySelector(".conteudoPrincipal_listaTweets")

function pegarTweet(event) {
    event.preventDefault()
   
    const tweetTextarea = textarea.value 
    criarTweet(tweetTextarea)  
}

tweetar.addEventListener('click', pegarTweet)


//Criar tweet
function criarTweet(tweetTexto) {
    console.log(tweetTexto)

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    const tweet = {
        nome: "Daniel",
        usuario: "@danielKenzies",
        texto: tweetTexto,
        tempo : `${hora} : ${minutos}`
    }

    listarTemplateTweet(tweet)
}

function listarTweet(tweet) {

    const {nome,usuario,texto, tempo} = tweet

    
    //Criando elementos para listar o template
    let li = document.createElement("li")
    li.classList.add("conteudoPrincipal_tweet")
    let img = document.createElement("img")
    let div = document.createElement("div")
    div.classList.add("tweet_conteudo")
    let h2 = document.createElement("h2")
    h2.innerText = nome
    let p = document.createElement("p")
    p.innerText = texto
    let span = document.createElement("span")
    span.innerText = `${usuario} - ${tempo}`

    //Adicionando elementos dentro da DIV
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //Adicionando elementos dentro da LI
    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    textarea.innerText = ""
}