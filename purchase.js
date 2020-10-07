if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var row0 = document.createElement('div')
    row0.classList.add('details')
    var info0 = document.getElementsByClassName('contact-info')[0]

    var code
    if (localStorage["country"] == "Greece")
        code = "+30" 
    else if (localStorage["country"] == "Spain")
        code = "+34" 
    else if (localStorage["country"] == "Italy")
        code = "+39" 

    var cartRowContent0 = ` <div class="black">${localStorage["name"]} ${localStorage["last-name"]} </div>
        <div class="black">${localStorage["email"]}</div>
        <div class="black">${code} ${localStorage["phone-number"]}</div>
    `
    row0.innerHTML = cartRowContent0 
    info0.append(row0)


    var row = document.createElement('div')
    row.classList.add('details')
    var info = document.getElementsByClassName('client-info')[0]

    var cartRowContent = `<div class="black">${localStorage["country"]}</div>
        <div class="black">${localStorage["city"]}</div>
        <div class="black">${localStorage["address"]} ${localStorage["number"]}</div>
        <div class="black">${localStorage["zip-code"]}</div>
    `
    row.innerHTML = cartRowContent   
    info.append(row)


    if (localStorage["request"] != "empty" )
    {
        var extra = document.createElement('div')
        extra.classList.add('details')
        var request = document.getElementsByClassName('client-info')[0]
        var requestContent = `<div class="black request">Special request: ${localStorage["request"]}</div>`
        extra.innerHTML = requestContent
        request.append(extra)
    }

    if (localStorage["billings"] == "true"){
        var row_b = document.createElement('div')
        row_b.classList.add('details')
        var info_b = document.getElementsByClassName('billings')[0]

        var cartRowContent_b = ` <h2 class="section-header section-header-small">Billings address</h2>
            <div class="black">${localStorage["country"]}</div>
            <div class="black">${localStorage["b-city"]}</div>
            <div class="black">${localStorage["b-address"]} ${localStorage["b-number"]}</div>
            <div class="black">${localStorage["b-zip-code"]}</div>
        `
        row_b.innerHTML = cartRowContent_b   
        info_b.append(row_b)
    }


    var row1 = document.createElement('div')
    row1.classList.add('details')
    var info1 = document.getElementsByClassName('shipping-info')[0]

    var cartRowContent1 = `
    <div class="black">${localStorage["shipping"]}</div>
    <div class="black">Approximate time of delivery: ${localStorage["shipping-time"]} days</div>
    <div class="black">Cost: ${localStorage["shipping-fee"]}</div>
    `
    row1.innerHTML = cartRowContent1   
    info1.append(row1)


    var row2 = document.createElement('div')
    row2.classList.add('details')
    var info2 = document.getElementsByClassName('payment-info')[0]

    var cartRowContent2 = `
    <div class="black">${localStorage["payment"]}</div>
    <div class="black">${localStorage["payment-details"]}</div>
    `
    row2.innerHTML = cartRowContent2   
    info2.append(row2)


    var button1 = document.getElementsByClassName('btn-edit')[0]
    var button2 = document.getElementsByClassName('btn-purchase')[0]
    button1.addEventListener('click' , editCart)
    button2.addEventListener('click' , completePurchase)

    displayCart()
}


function editCart(event){
    button = event.target
    localStorage["edit-cart-flag"] = "true"
    window.location = "store.html"
}


function completePurchase(event){
    button = event.target
    window.location = "purchase_completed.html"
}


function displayCart(){
    var num = localStorage["n"].length - 1
    var total = 0

    for (var i = 0 ; i < num ; i++){
        var row3 = document.createElement('div')
        row3.classList.add('cart-row')
        var info3 = document.getElementsByClassName('cart-info')[0]

        var cartRowContent3 = `<div class="cart-item cart-column">
            <img class="cart-item-image" src="${localStorage["item-image" + i]}">
            <span class="cart-item-title">${localStorage["item-name" + i]}</span>
            </div>
            <span class="cart-price cart-column">${localStorage["item-price" + i]}</span>
            <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="${localStorage["item-quantity" + i]}" readonly>
            </div>
            <span class="cart-total-item-price cart-column">${localStorage["item-full-price" + i]}</span>
        `
        row3.innerHTML = cartRowContent3  
        info3.append(row3)


        var price = parseFloat(localStorage["item-price" + i].replace('$',''))
        var quantity = parseInt(localStorage["item-quantity" + i] )
        total = total + (price * quantity)  
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('subtotal-price')[0].innerText = "$" + total
    addShipping_Payment()
}


function addShipping_Payment(){
    document.getElementsByClassName('subtotal-price-extra')[0].innerText = "+ " + localStorage['shipping-fee']
    var s = parseFloat(localStorage['shipping-fee'].replace('$',''))
    var t = document.getElementsByClassName('subtotal-price')[0].innerText
    var total = parseFloat(t.replace('$',''))
    total = total + s

    if (localStorage["payment"] == "Cash on delivery"){
        document.getElementsByClassName('subtotal-title')[2].innerText = "COD"
        document.getElementsByClassName('subtotal-price-extra')[1].innerText = "+ $2.99"
        var p =  2.99
        total = total + p
    }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = "$" + total
}




