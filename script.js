const submit = document.querySelector('#submit')
const rating = document.querySelector('.rating-state')
const thank = document.querySelector('.thank-state')

const nbOne = document.querySelector('#one')
const nbTwo = document.querySelector('#two')
const nbThree = document.querySelector('#three')
const nbFour = document.querySelector('#four')
const nbFive = document.querySelector('#five')

const selection = document.querySelector('#note')

nbOne.addEventListener('click', ()=> {
    submit.addEventListener('click', ()=> {
        if (rating.style.display == 'flex') {
            rating.style.display = 'none'
            thank.style.display = 'flex'
            selection.innerHTML = '&nbsp; 1 &nbsp;'
        } else {
            rating.style.display = 'flex'
        }
    })
})

nbTwo.addEventListener('click', ()=> {
    submit.addEventListener('click', ()=> {
        if (rating.style.display == 'flex') {
            rating.style.display = 'none'
            thank.style.display = 'flex'
            selection.innerHTML = '&nbsp; 2 &nbsp;'
        } else {
            rating.style.display = 'flex'
        }
    }) 
})

nbThree.addEventListener('click', ()=> {
    submit.addEventListener('click', ()=> {
        if (rating.style.display == 'flex') {
            rating.style.display = 'none'
            thank.style.display = 'flex'
            selection.innerHTML = '&nbsp; 3 &nbsp;'
        } else {
            rating.style.display = 'flex'
        }
    })
})

nbFour.addEventListener('click', ()=> {
    submit.addEventListener('click', ()=> {
        if (rating.style.display == 'flex') {
            rating.style.display = 'none'
            thank.style.display = 'flex'
            selection.innerHTML = '&nbsp; 4 &nbsp;'
        } else {
            rating.style.display = 'flex'
        }
    })
})

nbFive.addEventListener('click', ()=> {
    submit.addEventListener('click', ()=> {
        if (rating.style.display == 'flex') {
            rating.style.display = 'none'
            thank.style.display = 'flex'
            selection.innerHTML = '&nbsp; 5 &nbsp;'
        } else {
            rating.style.display = 'flex'
        }
    })
})


