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
    var checked_shipping_method = parent.querySelector('input[name = "shipping"]:checked');

    if(checked_shipping_method != null)
        window.location = "payment.html" 
    else
        parent.getElementsByClassName('message')[0].innerText = 'Please choose an option to proceed.' 



}