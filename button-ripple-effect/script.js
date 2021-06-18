const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        // e.target é o objeto de onde o evento foi disparado. Equivalente ao $(this) do jQuery
        const btnTop = e.target.offsetTop
        const btnLeft = e.target.offsetLeft

        const insideX = x - btnLeft
        const insideY = y - btnTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = `${insideY}px`
        circle.style.left = `${insideX}px`

        // this só funciona com funções normais e não com arrow functions
        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})