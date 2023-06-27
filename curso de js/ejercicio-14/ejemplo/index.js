const hTexto = document.getElementById('h-texto')
console.log(hTexto);

hTexto.addEventListener('cambioTexto', evento => {
  console.log(`El nuevo valor es ${evento.detail.texto}`)
  hTexto.innerText = evento.detail.texto
  hTexto.style.color = evento.detail.color
})

function cambiatTexto(texto, color) {
  const evento = new CustomEvent('cambioTexto', {
    detail: {
      texto: texto,
      color: color,
    }
  })
  hTexto.dispatchEvent(evento)
}