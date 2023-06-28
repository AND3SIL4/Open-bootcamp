const boton = document.querySelector('.btn')

boton.addEventListener('click', () => {
  console.log('click...');
  alert('Click en el boton de html...')
})

$(() => {
  $('.btn').click(() => {
    console.log('Estoy usando JQuery...');
    $('h1').css({ color: 'green' })
  })
})