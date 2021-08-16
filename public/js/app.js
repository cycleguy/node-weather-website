console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    const url = 'http://localhost:3000/weather?address=' + encodeURIComponent(location);

    msg1.textContent = 'Loading...'
    msg2.textContent = ''

    fetch(url).then((response) => {
         response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.location 
                msg2.textContent = data.forecast
            }
        })
    })
})