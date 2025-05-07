function toggleMode(){
    const html = document.documentElement
    // Colocando a classe light
    //if(html.classList.contains('light')){
    //    html.classList.remove('light')
    //} else{
    //    html.classList.add('light')
    //}
    //Usando a função Toggle pra alterar 
    html.classList.toggle('light')

    // Substituindo a imagem de acordo com o tema e o fundo
    const imagem = document.querySelector('#profile img')
    const fundo = document.querySelector('body')

    if(html.classList.contains('light')){
        imagem.setAttribute('src', './assents/avatar-light.png')
        
        fundo.style.backgroundImage ="linear-gradient(135deg,rgba(255, 229, 180, 0.80),rgba(250, 214, 69, 0.80),rgba(250, 180, 82, 0.80))";
    }else{
        imagem.setAttribute('src', './assents/avatar.png')
        fundo.style.backgroundImage ="radial-gradient(circle, rgba(30, 40, 56, 1) 0%, rgba(60, 45, 100, 1) 49%, rgba(52, 43, 72, 1) 100%)";
    }
}