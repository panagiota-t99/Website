if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var button = document.getElementsByClassName('btn-checkout')[1]
    button.addEventListener('click' , submitInformation)
}


function submitInformation(event){
    var button = event.target
    var parent = button.parentElement
    var checked_payment_method = parent.querySelector('input[name = "payment"]:checked');

    if(checked_payment_method != null){
        localStorage["payment"] = checked_payment_method.value
        if (checked_payment_method == "Online payment")
            localStorage["payment-details"] = "Visa, MasterCard, Paypal or Money transfer"
        else
            localStorage["payment-details"] = "Extra charge: $2.99"
        window.location = "purchase.html" 
    }
    else
        parent.getElementsByClassName('message')[0].innerText = 'Please choose an option to proceed.' 
}

