const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')

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

    listarTweet(tweet)
}

function listarTweet(tweet) {
    console.log(tweet)
}