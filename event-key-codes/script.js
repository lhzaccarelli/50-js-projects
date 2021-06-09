const insert = document.getElementById('insert')
const results = document.getElementById('results')
const eventKey = document.getElementById('event-key')
const eventKeyCode = document.getElementById('event-key-code')
const eventCode = document.getElementById('event-code')

window.addEventListener('keydown', (e) => {
    results.classList.add('active')

    eventKey.innerHTML = e.key === ' ' ? 'Space' : e.key
    eventKeyCode.innerHTML = e.keyCode
    eventCode.innerHTML = e.code
})