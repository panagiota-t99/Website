if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var button = document.getElementsByClassName('btn-checkout')[1]
    button.addEventListener('click' , submitInformation)

    if (localStorage["edit-cart-flag"] == "true"){
        document.getElementsByClassName('info-input-box')[0].value = localStorage['b-city']
        document.getElementsByClassName('info-input-box')[1].value = localStorage['b-zip-code']
        document.getElementsByClassName('info-input-box')[2].value = localStorage['b-address']
        document.getElementsByClassName('info-input-box')[3].value = localStorage['b-number']
    }
}


function submitInformation(event){
    var button = event.target
    var parent = button.parentElement
    var inputs = parent.getElementsByClassName('info-input-box')
    var errors = parent.getElementsByClassName('error')
    var messages = parent.getElementsByClassName('message')
    var flag = []

    for(var i = 0 ; i < errors.length  ; i++){  
        if (inputs[i].value == '') {     
            flag[i] = highlightError(inputs[i] , errors[i])
            messages[i].innerText = "Please select an option"      
        } 
        else if(inputs[i].value != '') {
            if (i == 0 || i ==2) 
                flag[i] = removeError(inputs[i], errors[i], messages[i])
            else if (i == 1 && (inputs[i].value>=10000 && inputs[i].value<=99999))
                flag[i] = removeError(inputs[i], errors[i], messages[i])
            else if (i == 3 && (inputs[i].value>=1 && inputs[i].value<=300))
                flag[i] = removeError(inputs[i], errors[i], messages[i]) 
        }   
    }
        

    if (inputs[1].value != '' &&  (inputs[1].value < 10000 || inputs[1].value > 99999 )){
        flag[1] = highlightError(inputs[1] , errors[1])
        messages[1].innerText = "Invalid input. Please use a number between [10000-99999]"    
    }
    if (inputs[3].value != '' &&  (inputs[3].value <= 0 || inputs[3].value > 300)){ 
        flag[3] = highlightError(inputs[3],errors[3])
        messages[3].innerText = "Invalid input. Please use a number between [1-300]"   
    }

    var counter = 0;
    for (var i = 0 ; i < 4 ; i++)
        counter = counter + flag[i]

    if (counter == 4){
        window.location = "shipping.html"  
        localStorage["b-city"] = inputs[0].value
        localStorage["b-zip-code"] = inputs[1].value
        localStorage["b-address"] = inputs[2].value
        localStorage["b-number"] = inputs[3].value
        localStorage["billings"] = "true"
    }
   
    
}


function highlightError(input,error){
    input.style.borderColor = "rgb(165, 22, 22)"
    error.style.opacity = "1"
    var flag = 0
    return flag
}


function removeError(input,error,message){ 
    input.style.borderColor = "rgb(115, 117, 117)"
    error.style.opacity = "0"
    message.innerText = ""
    var flag = 1
    return flag 
}