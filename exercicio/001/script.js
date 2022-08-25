function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Horario: ${hora}:${minutos}`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/solManha.png'
        document.body.style.background = '#ffb72d'
    }else if(hora < 18){
        //boa tarde
        img.src = 'img/solTarde.png'
        document.body.style.background = '#683637'
    }else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#252a3a'
    }
}

