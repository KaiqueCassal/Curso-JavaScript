function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')

    var res = document.getElementById('res')
    res.style.textAlign = 'center'

    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sex')

        var idade = ano - Number(fano.value)

        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos</p>`
        res.appendChild(img)
    }
}