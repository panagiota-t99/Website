if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var row = document.createElement('div')
    row.classList.add('client-info-details')
    var info = document.getElementsByClassName('client-info')[0]

    var cartRowContent = `
    <div class="black">Name: ${localStorage["name"]}</div>
    <div class="black">Last Name: ${localStorage["last-name"]}</div>
    <div class="black">Email: ${localStorage["email"]}</div>
    <div class="black">Country: ${localStorage["country"]}</div>
    <div class="black">City: ${localStorage["city"]}</div>
    <div class="black">Address: ${localStorage["address"]} ${localStorage["number"]}</div>
    <div class="black">Zip code: ${localStorage["zip-code"]}</div>
    `
    row.innerHTML = cartRowContent   
    info.append(row)



    var row1 = document.createElement('div')
    row1.classList.add('ship-info-details')
    var info1 = document.getElementsByClassName('shipping-info')[0]

    var cartRowContent1 = `
    <div class="black">${localStorage["shipping"]}</div>
    <div class="black">Approximate time of delivery: ${localStorage["shipping-time"]} days</div>
    <div class="black">Cost: $${localStorage["shipping-fee"]}</div>
    `
    row1.innerHTML = cartRowContent1   
    info1.append(row1)




    var row2 = document.createElement('div')
    row2.classList.add('pay-info-details')
    var info2 = document.getElementsByClassName('payment-info')[0]

    var cartRowContent2 = `
    <div class="black">${localStorage["payment"]}</div>
    <div class="black">${localStorage["payment-details"]}</div>
    `
    row2.innerHTML = cartRowContent2   
    info2.append(row2)





}