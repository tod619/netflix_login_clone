// Validate the form
const inputs = document.querySelectorAll('form .field input')


// Validate the form 
function validateInput(e) {
    
    //Array of states
    const states = ['valid', 'not-valid'];

    let classes;

    //console.log(e.target.value.length)

    if(e.target.value.length === 0) {
        // Input empty fire an alert
        classes = states[1]
        console.log(classes)
    } else {
        classes = states[0]
        console.log(classes)
    }


}

// Add eventlisners to inputs
inputs.forEach(input => {
    input.addEventListener('blur', validateInput)
    input.addEventListener('input', validateInput)
})


