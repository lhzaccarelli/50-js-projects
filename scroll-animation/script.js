const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //Tamanho da tela -> window.innerHeight

    //Trigger point
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // Pega a posição da caixa (top)
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}