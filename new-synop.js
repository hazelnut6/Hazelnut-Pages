let cart = document.querySelector('.cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
}
document.querySelector('#close-cart-btn').onclick = () =>{
  cart.classList.remove('active');
}






let cartBtns = document.getElementsByClassName('btn');
let mainContainer = document.getElementsByTagName("tbody")[0]
let quantityField = document.getElementsByClassName('num')
let removeBtn = document.getElementsByClassName('remove-btn')






  for(let i = 0; i < cartBtns.length; i++){
    cartBtns[i].addEventListener('click', addToCart)
}

function addToCart(event) {
    let button = event.target;
    let buttonParent = button.parentElement
    let buttonGrandparent = button.parentElement.parentElement
    let itemName = buttonGrandparent.children[2].innerText
    let itemPrice =  buttonGrandparent.children[3].innerText
    let itemImage = buttonGrandparent.children[0].src


    
   
    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML = ` <td>            
    <img src="${itemImage}" height="130px" width="100px" class="item-pic">
    </td>
    <td class="item-name"><h3>${itemName}</h3></td>
    <td class="item-price"><h3>${itemPrice}</h3></td>
    <td><input type="number" class="num" value="1"></td>
    <td class="total-price"><h3>${itemPrice}</h3></td>
    <td>
        <button class="btn remove-btn">Remove</button><br>
        <button class="btn checkout-btn">Checkout</button>
    </td>`
    mainContainer.append(itemContainer);



    for(let i = 0; i < quantityField.length; i++){
      quantityField[i].addEventListener('click', updateTotal)
    }

    for(let i = 0; i < removeBtn.length; i++){
      removeBtn[i].addEventListener('click', removeItem)
    }

    grandTotal()
}



function updateTotal(event){
  numberOfItems = event.target
  numberOfItems_parent = numberOfItems.parentElement.parentElement
  priceField = numberOfItems_parent.getElementsByClassName('item-price')[0]
  totalField = numberOfItems_parent.getElementsByClassName('total-price')[0]
  priceFieldContent = priceField.children[0].innerText.replace('$', '')
  totalField.children[0].innerText = '$' + numberOfItems.value * priceFieldContent

  if(isNaN(numberOfItems.value) || numberOfItems.value <= 0){
    numberOfItems.value = 1
  }
  grandTotal()

}



function grandTotal(){
  let total = 0
  let finalTotal = document.getElementsByClassName('final-total')[0]
  let totalPrice = document.getElementsByClassName('total-price')

  for(let i = 0; i < totalPrice.length; i++){
    totalPrice_content = Number(totalPrice[i].innerText.replace('$', ''))
    total += totalPrice_content
  }
  finalTotal.children[0].innerText = '$' + total
  console.log(total)
}


function removeItem(event){
  remove_btn = event.target
  remove_btnGrandparent = remove_btn.parentElement.parentElement
  remove_btnGrandparent.remove()
  grandTotal()
}