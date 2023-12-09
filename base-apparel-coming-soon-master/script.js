(function () {
    const form = document.querySelector('form')
    const input = document.querySelector('input')
    const error = document.querySelector('.error')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = input.value
        if (validateEmail(email)) {
        error.classList.remove('active')
        form.classList.remove('error')
        } else {
        error.classList.add('active')
        form.classList.add('error')
        }
    })
    
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }
})()