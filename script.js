document.addEventListener('DOMContentLoaded', function () {

    let tamanhoAtualFonte = 1

    const aumentaTamanhoFonte = document.getElementById('aumentar-fonte')

    aumentaTamanhoFonte.addEventListener('click', function ()  {

        tamanhoAtualFonte += 0.1
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    const diminuiTamanhoFonte = document.getElementById('diminuir-fonte')

    diminuiTamanhoFonte.addEventListener('click', function ()  {

        tamanhoAtualFonte -= 0.1
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    const alternaContraste = document.getElementById('alterna-contraste')

    alternaContraste.addEventListener('click', function(){

        document.body.classList.toggle('alto-contraste')

    })



})