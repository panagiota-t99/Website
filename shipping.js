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
    var checked_shipping_method = parent.querySelector('input[name = "shipping"]:checked');
    alert(localStorage["name"] + localStorage["last-name"] + localStorage["email"] + localStorage["country"] +
    localStorage["city"] + localStorage["zip-code"] + localStorage["address"] + localStorage["number"] + localStorage["request"])

    if(checked_shipping_method != null)
        window.location = "payment.html" 
    else
        parent.getElementsByClassName('message')[0].innerText = 'Please choose an option to proceed.' 
}

