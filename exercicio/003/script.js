function contar(){
    let ini = document.getElementById('i')
    let fim = document.getElementById('f')
    let pas = document.getElementById('p')

    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO] Falta dados')
    }else{
        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            alert('[Passo inválido] considerando PASSo = 1')
            p = 1
        }

        if(i < f){
            //crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            //regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}