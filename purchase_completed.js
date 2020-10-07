if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    document.getElementsByClassName('email')[0].innerText = localStorage['email']

    var n = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    var c
    if (localStorage['country'] == "Greece")
        c = "GR"
    else if (localStorage['country'] == "Spain")
        c = "SP"
    else
        c = "IT"

    document.getElementsByClassName('number')[0].innerText = c + n
}