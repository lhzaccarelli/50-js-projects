const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    //Using Async/Await
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke


    // Using THEN
    // fetch('https://icanhazdadjoke.com/', config)
    //     .then(res => res.json())
    //     .then(data => {
    //         jokeEl.innerHTML = data.joke
    //     })
}

