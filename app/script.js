function contar() {
    var txtinicio = document.getElementById("txtinicio")
    var txtfim = document.getElementById("txtfim")
    var txtpassos = document.getElementById("txtpassos")
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passos = Number(txtpassos.value)
    var res = document.getElementById("contagem")

        //validações de preenchimento dos campos
        if (inicio == ""){
            window.alert('Favor preencher o valor inicial!')
        } else if (fim == ""){
            window.alert('Favor preencher o valor final!')
        } else if (passos <= 0){
            window.alert('Progressão inválida! Verifique o valor digitado.')
        } else if (inicio > fim){
            //contagem decrescente (Subtração)
            res.innerHTML = `<p>Contando...</p>`
            while (inicio >= fim) {
                res.innerHTML += `&#128073;${inicio} `
                inicio=inicio-passos
            }
            res.innerHTML += `&#9995;`
            if(inicio + passos == fim){
                res.innerHTML += `<p>A contagem chegou ao fim. &#128522;</p>`
            } else {
                res.innerHTML += `<p>O próximo passo seria menor que ${fim}. &#128540;</p>`
            }
        }else{
            //contagem crescente (Adição)
            res.innerHTML = `<p>Contando...</p>`
            while (inicio <= fim) {
                res.innerHTML += `&#128073;${inicio} `
                inicio=inicio+passos
            }
            res.innerHTML += `&#9995;`
            if(inicio - passos == fim){
                res.innerHTML += `<p>A contagem chegou ao fim. &#128522;</p>`
            } else {
                res.innerHTML += `<p>O próximo passo seria maior que ${fim}. &#128540;</p>`
            }
        }
}