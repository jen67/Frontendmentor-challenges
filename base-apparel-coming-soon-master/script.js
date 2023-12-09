(function () {
    const form = document.querySelector('form')
    const input = document.querySelector('input')
    const error = document.querySelector('.error')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (validateEmail) {
            error.innerHTML = '';
            input.classList.remove(errorImg);
        }
          else {
            error.innerHTML = 'Please provide a valid email';
            input.classList.add(errorImg);
        }
        
        function validateEmail() {
            const email = input.value;
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        }
        
    }); 
})()