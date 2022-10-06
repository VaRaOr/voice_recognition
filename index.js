const texts = document.querySelector('.texts')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new window.SpeechRecognition()
// recognition.lang = 'es-ES'
recognition.interimResults = true


let p = document.createElement('p')

recognition.addEventListener('result', (e)=>{
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    p.innerText = text
    texts.appendChild(p)

    if(e.results[0].isFinal){
        if(text.includes('Hola')){
            p = document.createElement('p')
            p.classList.add('replay')
            p.innerText = 'Hola'
            texts.appendChild(p)
        }
        if(text.includes('Cómo te llamas')){
            p = document.createElement('p')
            p.classList.add('replay')
            p.innerText = 'Me llamo Carlitos'
            texts.appendChild(p)
        }
        if(text.includes('Abrir YouTube')){
            p = document.createElement('p')
            p.classList.add('replay')
            p.innerText = 'Abriendo Youtube'
            texts.appendChild(p)
            window.open('https://www.youtube.com/')
        }
        p = document.createElement('p')
    }

    console.log(e)
})
recognition.addEventListener('end', ()=>{
    recognition.start()
})

recognition.start()