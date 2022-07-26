// Validate the form
const inputs = document.querySelectorAll('form .field input')


// Validate the form 
function validateInput(e) {
    
    //Array of states
    const states = ['valid', 'not-valid'];

    let classes;

    //console.log(e.target.value.length)

    // Check the input to see if it is valid
    if(e.target.value.length === 0) {
        // Input empty fire an alert
        classes = states[1]
        console.log(classes)
    } else {
        classes = states[0]
        console.log(classes)
    }

    // generate or remove the alert
    if(classes === 'not-valid') {

        // If an alert doesn't allready exist, then add an alert
        if(e.target.parentElement.nextElementSibling.classList[0] !== "alert") {

            // Create the alert div
             const errorDiv = document.createElement('div')
            errorDiv.appendChild(document.createTextNode('This field is mandatory'))
            errorDiv.classList.add('alert')

            // Inject error inside dom before next field
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling)
        }

       
    }else {
        // If the input has something
        // Check that the next element has the alert class
        if(e.target.parentElement.nextElementSibling.classList[0] === "alert") {
            // If it does remove that element
            e.target.parentElement.nextElementSibling.remove()
        }
        
    }


}

// Add eventlisners to inputs
inputs.forEach(input => {
    input.addEventListener('blur', validateInput)
    input.addEventListener('input', validateInput)
})


