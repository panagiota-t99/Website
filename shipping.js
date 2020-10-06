if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var button = document.getElementsByClassName('btn-checkout')[1]
    button.addEventListener('click' , submitInformation)

    if (localStorage["edit-cart-flag"] == "true"){
        if (localStorage["shipping"] == "Standard shipping")
            document.getElementById("1").checked = true;
        else if (localStorage["shipping"] == "Economy shipping")
            document.getElementById("2").checked = true;
        else
            document.getElementById("3").checked = true;
    }
}


function submitInformation(event){
    var button = event.target
    var parent = button.parentElement
    var checked_shipping_method = parent.querySelector('input[name = "shipping"]:checked');
    
    if(checked_shipping_method != null){
        localStorage["shipping"] = checked_shipping_method.value
        if (checked_shipping_method.value == "Standard shipping"){
            localStorage["shipping-time"] = 14
            localStorage["shipping-fee"] = "$4.99"
        }
        else if (checked_shipping_method.value == "Economy shipping"){
            localStorage["shipping-time"] = 10
            localStorage["shipping-fee"] = "$7.99"
        }
        else{
            localStorage["shipping-time"] = 5
            localStorage["shipping-fee"] = "$14.99"
        }

        window.location = "payment.html" 
    }
    else
        parent.getElementsByClassName('message')[0].innerText = 'Please choose an option to proceed.' 
}

