if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
     var button = document.getElementsByClassName('btn-checkout')[0]
     button.addEventListener('click' , submitInformation)
     

}

function submitInformation(event){


    
}







