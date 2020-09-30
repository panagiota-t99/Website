if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var button0 = document.getElementsByClassName('btn-checkout')[0]
    button0.addEventListener('click' , goBack)

    var button1 = document.getElementsByClassName('btn-checkout')[1]
    button1.addEventListener('click' , submitInformation)
}


function submitInformation(event){
    var button = event.target
    var parent = button.parentElement
    var checked_shipping_method = parent.querySelector('input[name = "shipping"]:checked');

    if(checked_shipping_method != null)
        window.location = "payment.html" 
    else
        parent.getElementsByClassName('message')[0].innerText = 'Please choose an option to proceed.' 
}

function goBack(event){
    var button = event.target
    window.location = "checkout.html"
}