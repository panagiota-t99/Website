if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var button1 = document.getElementsByClassName('btn-checkout')[1]
    button1.addEventListener('click' , submitInformation)
}


function submitInformation(event){
    var button = event.target
    var parent = button.parentElement
    var checked_shipping_method = parent.querySelector('input[name = "payment"]:checked');

    if(checked_shipping_method != null)
        window.location = "purchase.html" 
    else
        parent.getElementsByClassName('message')[0].innerText = 'Please choose an option to proceed.' 
}

