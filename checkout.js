if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
     var button = document.getElementsByClassName('btn-checkout')[0]
     button.addEventListener('click' , submitInformation)

     if (localStorage["edit-cart-flag"] == "true"){
         document.getElementsByClassName('info-input-box')[0].value = localStorage['name']
         document.getElementsByClassName('info-input-box')[1].value = localStorage['last-name']
         document.getElementsByClassName('info-input-box')[2].value = localStorage['email']
         document.getElementsByClassName('info-input-box')[3].value = localStorage['country']
         document.getElementsByClassName('info-input-box')[4].value = localStorage['city']
         document.getElementsByClassName('info-input-box')[5].value = localStorage['zip-code']
         document.getElementsByClassName('info-input-box')[6].value = localStorage['address']
         document.getElementsByClassName('info-input-box')[7].value = localStorage['number']
         document.getElementsByClassName('info-input-box')[8].value = localStorage['phone-number']

         if (localStorage['request'] != "empty")
            document.getElementsByClassName('info-input-box')[9].value = localStorage['request']       

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
            if (i != 3)  
                messages[i].innerText = "Please fill out this field"
            else
                messages[i].innerText = "Please select an option"      
        } 
        else if(inputs[i].value != '') {
            if ((i == 0 || i ==1) && validateName_LastName(inputs[i].value))
                flag[i] = removeError(inputs[i], errors[i], messages[i])
            else if (i == 2 & validateEmail(inputs[i].value))
                flag[i] = removeError(inputs[i], errors[i], messages[i]) 
            else if (i ==3 || i==4 || i ==6 )
                flag[i] = removeError(inputs[i], errors[i], messages[i])  
            else if (i == 5 && (inputs[i].value>=10000 && inputs[i].value<=99999))
                flag[i] = removeError(inputs[i], errors[i], messages[i])
            else if (i == 7 && (inputs[i].value>=1 && inputs[i].value<=300))
                flag[i] = removeError(inputs[i], errors[i], messages[i]) 
            else if (i==8 && inputs[i].value.length == 10 && validatePhoneNumber(inputs[i].value))
                flag[i] = removeError(inputs[i], errors[i], messages[i])

        }   
    }
        


    if (inputs[0].value != '' && !validateName_LastName(inputs[0].value)){
        flag[i] = highlightError(inputs[0] , errors[0])
        messages[0].innerText = "Please fill out your name correctly"
    }
    if (inputs[1].value != '' &&  !validateName_LastName(inputs[1].value)){
        flag[i] =  highlightError(inputs[1] , errors[1])
        messages[1].innerText = "Please fill out your last name correctly"    
    }
    if (inputs[2].value != '' &&  !validateEmail(inputs[2].value)){
        flag[i] =  highlightError(inputs[2] , errors[2])
        messages[2].innerText = "Invalid email address"    
    }  
    if (inputs[5].value != '' &&  (inputs[5].value < 10000 || inputs[5].value > 99999 )){
        flag[i] = highlightError(inputs[5] , errors[5])
        messages[5].innerText = "Invalid input. Please use a number between [10000-99999]"    
    }
    if (inputs[7].value != '' &&  (inputs[7].value <= 0 || inputs[7].value > 300)){ 
        flag[i] = highlightError(inputs[7],errors[7])
        messages[7].innerText = "Invalid input. Please use a number between [1-300]"   
    }
    if (inputs[8].value != '' &&  ((inputs[8].value.length < 10 || inputs[8].value.length > 10) ||
        !validatePhoneNumber(inputs[8].value))){ 
        flag[i] = highlightError(inputs[8],errors[8])
        messages[8].innerText = "Invalid phone number"   
    }


    
    var counter = 0;
    for (var i = 0 ; i < 9 ; i++)
        counter = counter + flag[i]

    
    if (counter == 9){
        window.location = "shipping.html"  
        localStorage["name"] = inputs[0].value
        localStorage["last-name"] = inputs[1].value
        localStorage["email"] = inputs[2].value
        localStorage["country"] = inputs[3].value
        localStorage["city"] = inputs[4].value
        localStorage["zip-code"] = inputs[5].value
        localStorage["address"] = inputs[6].value
        localStorage["number"] = inputs[7].value

        if (localStorage["country"] == "Greece")
            localStorage["phone-number"] = "+30" + inputs[8].value
        else if (localStorage["country"] == "Spain")
            localStorage["phone-number"] = "+34" + inputs[8].value
        else
            localStorage["phone-number"] = "+39" + inputs[8].value

        if (inputs[9].value != "")
            localStorage["request"] = inputs[9].value  
        else
            localStorage["request"] = "empty"
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


function validateName_LastName(word){
    const re  = /^[a-zA-Z]+$/
    return re.test(word)
}


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function validatePhoneNumber(number){
    const re  = /^[0-9]+$/
    return re.test(number)
}

