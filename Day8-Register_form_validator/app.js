const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cfPassword = document.querySelector('#confirm_password')

function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form_control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form_control success'
    const small = formControl.querySelector('small')
    small.innerText = ''
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value.trim())){
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

function checkRequired(inputArr){
    let isRequired = false
    inputArr.forEach(function(input){
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true
        } else{
            showSuccess(input)
        }
    })
    return isRequired
}

function checkLength (input, min, max){
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be at less than ${max} characters`)
    } else{
        showSuccess(input)
    }
}


function CheckPasswordMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, 'Password do not match')
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(!checkRequired([username, email, password, cfPassword])){
        checkLength(username, 4, 16)
        checkLength(password, 6, 20)
        checkEmail(email)
        CheckPasswordMatch(password, cfPassword)
    }
})