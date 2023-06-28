const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')


parrafos.forEach(parrafo => {
  parrafo.addEventListener('dragstart', event => {
    console.log('Estoy arrastrando el parrafo: ' + parrafo.innerText)
    parrafo.classList.add('draging')
    event.dataTransfer.setData('id', parrafo.id)
  })

  parrafo.addEventListener('dragend', () => {
    console.log('He terminado de arrastrar');
    parrafo.classList.remove('draging')
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener('dragover', event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
    // console.log('dragover');
  })
  seccion.addEventListener('drop', event => {
    // console.log('drop');
    const id_parrafo = event.dataTransfer.getData('id')
    const parrafo_ = document.getElementById(id_parrafo)
    if (seccion.classList.contains('papelera')) {
      parrafo_.remove(parrafo_)    
      console.log('Elemento eliminado...');
    } else {
      seccion.appendChild(parrafo_)    
    }
  })
})