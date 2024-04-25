function pegarNota() {
    let nota = localStorage.getItem("nota")
    let paragrafoNota = document.querySelector(".paragrafo-nota")
    let agradecer = document.querySelector("h1")
    if (nota <= 2) {
        paragrafoNota.innerHTML = `Só ${nota} de 5 parceiro?? Volta lá e muda agora`
        agradecer.innerHTML = "Ainda quer que eu agradeça?"

    }

    else if (nota == 3) {
        paragrafoNota.innerHTML = `${nota} de 5?? Ta bom mas da pra melhorar ein fio`

    }

    else{
        paragrafoNota.innerHTML = `Aí sim ein irmao ${nota} de 5😎🤙`
        agradecer.innerHTML = "Muito obrigado 😍"
    }
}


pegarNota()