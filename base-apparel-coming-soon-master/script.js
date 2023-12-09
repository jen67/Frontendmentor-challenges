(function () {
    const form = document.querySelector('form')
    const input = document.querySelector('input')
    const error = document.querySelector('.error')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = input.value
        if (validateEmail(email)) {
        error.innerHTML = ''
            form.classList.remove('error')
            input.src = 'images/icon-error.svg'
        } else {
        error.innerHTML = 'Please provide a valid email' 
        form.classList.add('error')
        }
    })
    
    function validateEmail(email) {
        const re = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

        return re.test(email)
    }
})()