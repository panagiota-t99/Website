if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var removeCartItemBtns = document.getElementsByClassName('btn-danger')
    for(var i=0 ; i<removeCartItemBtns.length ; i++){
        var button = removeCartItemBtns[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i=0 ; i<quantityInputs.length ; i++){
        var input = quantityInputs[i]
        input.addEventListener('change' , quantityChanged)
    }

    var addToCartBtns = document.getElementsByClassName('item-btn')
    for(var i=0 ; i<addToCartBtns.length ; i++){
        var addToCart = addToCartBtns[i]
        addToCart.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-checkout')[0].addEventListener('click' , purchaseClicked)

    localStorage["n"] = 0
}


function purchaseClicked(event){
    var button = event.target
    var total1 = document.getElementsByClassName('cart-total-price')[0]
    var total2 = parseFloat(total1.innerText.replace('$',''))
    if (total2 == 0){
        alert('The cart is empty!')
        return
    }

    
    window.location = "checkout.html"
}


function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}


function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var image_source = shopItem.getElementsByClassName('item-image')[0].src
    addItemToCart(title,price,image_source)
    updateCartTotal()
}

function addItemToCart(title, price, image_source){
    var row = document.createElement('div')
    row.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var itemNames = cartItems.getElementsByClassName('cart-item-title')
    for(var i=0 ; i<itemNames.length ; i++){
        if (itemNames[i].innerText == title){
            alert("This item is already added to the cart!")
            return
        }
    }

    var cartRowContent = `<div class="cart-item cart-column">
        <img class="cart-item-image" src="${image_source}">
        <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger"type="button">REMOVE</button>
        </div>
        <span class="cart-total-item-price cart-column">${price}</span>
        `
    row.innerHTML = cartRowContent   
    cartItems.append(row)
    row.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    row.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    localStorage["n"] = localStorage["n"]  + 1

}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var row_value = 0
    for(var i=0 ; i<cartRows.length ; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        row_value = price * quantity
        row_value = Math.round(row_value * 100) / 100
        document.getElementsByClassName('cart-total-item-price')[i+1].innerText= '$' + row_value;
        total = total + row_value
        localStorage["item-name" + i] = cartRow.getElementsByClassName('cart-item-title')[0].innerText
        localStorage["item-price" + i] = priceElement.innerText
        localStorage["item-quantity" + i] = quantity
        localStorage["item-full-price" + i] = row_value
        localStorage["item-image" + i] = cartRow.getElementsByClassName('cart-item-image')[0].src
        localStorage["item-i" + i] = i
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}




