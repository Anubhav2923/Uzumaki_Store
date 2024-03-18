const cartValue = document.querySelector('#cartValue');

export const updateCartValue = (Products)=> {
    return cartValue.innerHTML = ` 
    <i class="fa-solid fa-cart-shopping">${Products.length}</i>
    `
}