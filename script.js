function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se tiver sem ligth mode, manter a imagem normal
   img.setAttribute("src", "./assets/avatar-dark.png")
  }


  if (html.classList.contains("light")) {
    
    img.setAttribute(
      "alt", "Foto do Roberto sem sorrir, usando jaqueta preta e camisa amarela com fundo branco e uma placa de transito com uma seta para cima e outra para baixo"
    )
  } else {
 
    img.setAttribute("alt", "foto do Roberto num park, ele usa cavanhaque e oculos escuro esta com uma camiseta marrom sem sorrir com um gramado atras dele    ")
  }
}
