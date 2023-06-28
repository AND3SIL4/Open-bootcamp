$(() => {
  $('.btn-ocultar').click(() => {
    $("h1").fadeOut()
  })
  $('.btn-ver').click(() => {
    $("h1").fadeIn()
  })
  $('.btn-color').click(() => {
    $("h1").css({ color: 'red' })
  })
  $('.btn-add').click(() => {
    $('ul').append("<li>Nuevo elemento</li>")
  })
  $('li').mouseenter((elem) => {
    elem.target.style.color = 'green'
  })
  $('li').mouseleave((elem) => {
    elem.target.style.color = 'black'
  })
})