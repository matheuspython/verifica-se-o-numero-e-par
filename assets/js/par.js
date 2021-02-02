let numerosLista = []
let list = document.querySelector('ul#list')

function epar(thi) {
    if (Number(thi.value) % 2 === 0) {
        thi.style.background = 'green'
        document.querySelector('#par').innerHTML = 'é par'
        return addList(thi.value)
    }
    if (Number(thi.value) % 2 !== 0) {
        thi.style.background = 'red'
        document.querySelector('#par').innerHTML = 'é impar'
        return addList(thi.value)
    }
}

function addList(num) {
    numerosLista.push(num)


    const novoLi = document.createElement('li')

    if (Number(num) % 2 === 0) { novoLi.style.color = 'green' } else { novoLi.style.color = 'red' }
    novoLi.innerHTML = num

    list.appendChild(novoLi)
    console.log(numerosLista)
}