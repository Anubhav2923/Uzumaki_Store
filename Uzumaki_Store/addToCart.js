import { getCardProductFromLS } from "./getCardProductFromLS";
import { updateCartValue } from "./updateCartValue";

getCardProductFromLS();

export const addToCart = (event, id, stock)=> {

    let arrLocalStroageProduct = getCardProductFromLS();

    const currentProductElement = document.querySelector(`#card${id}`)
    
    let price = document.querySelector('.productPrice').innerText;
    let quantity = document.querySelector('.productQuantity').innerText;
    
    price =  price.replace('₹',' ');

    let existingProduct = arrLocalStroageProduct.find((currProd) => currProd.id === id);

    if( existingProduct && quantity > 1) {
        quantity = Number(existingProduct.quantity) +Number(quantity);
        price = Number(price * quantity);

        let updateCart = { id, quantity, price};

        updateCart = arrLocalStroageProduct.map((currProd) => {
            return currProd.id === id ? updateCart : currProd;
        });

        localStorage.setItem('cardProductsLS',  JSON.stringify(updateCart));
    }

     if(existingProduct) {
        return false;
     }



    price = Number(price * quantity);
    quantity = Number(quantity)

    let updateCart = {id, quantity, price};
    arrLocalStroageProduct.push(updateCart);

    localStorage.setItem('cardProductsLS',  JSON.stringify(arrLocalStroageProduct));

    updateCartValue(arrLocalStroageProduct);

}