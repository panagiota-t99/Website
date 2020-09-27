if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
     var button = document.getElementsByClassName('btn-checkout')[0]
     button.addEventListener('click' , submitInformation)
     

}

function submitInformation(event){
    var button = event.target
    var parent = button.parentElement
    var titles = parent.getElementsByClassName('info-title')
    var inputs = parent.getElementsByClassName('info-input-box')
    var errors = parent.getElementsByClassName('error')

    for(var i = 0 ; i < errors.length  ; i++){
        
        if (inputs[i].value == '')
            {
                highlightError(inputs[i] , errors[i])
                
            }  
        
    }
    if (!validateName_LastName_City(inputs[0].value))
    {
        errors[0].style.opacity = "1"
        inputs[0].style.borderColor = "rgb(165, 22, 22)"
    }
    if (!validateName_LastName_City(inputs[1].value))
    {
        errors[1].style.opacity = "1"
        inputs[1].style.borderColor = "rgb(165, 22, 22)"
    }

    if (!validateEmail(inputs[2].value))
    {
        errors[2].style.opacity = "1"
        inputs[2].style.borderColor = "rgb(165, 22, 22)"
    }
    if (!validateName_LastName_City(inputs[4].value))
    {
        errors[4].style.opacity = "1"
        inputs[4].style.borderColor = "rgb(165, 22, 22)"
    }
    if (inputs[5].value < 10000 || inputs[5].value > 99999 )
    {
        errors[5].style.opacity = "1"
        inputs[5].style.borderColor = "rgb(165, 22, 22)"
    }
    if (inputs[7].value <= 0 || inputs[7].value > 300)
    { 
        highlightError(inputs[7],errors[7])
        parent.getElementsByClassName('message')[0].innerText = "hello"
    }
    
    
}

function highlightError(input,error)
{
    error.style.opacity = "1"
    input.style.borderColor = "rgb(165, 22, 22)"
}


function validateName_LastName_City(word){
    const re  = /^[a-zA-Z]/
    return re.test(word)
}



function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

