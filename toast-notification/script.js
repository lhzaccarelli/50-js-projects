const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = [
    'info', 
    'success', 
    'error'
]

button.addEventListener('click', () => createNotification(getRandomMessage(), getRandomType()))

function createNotification(message, type = 'info', timeout = 3000) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type)

    notif.innerText = message

    toasts.appendChild(notif)

    setTimeout(() => notif.remove(), timeout)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}