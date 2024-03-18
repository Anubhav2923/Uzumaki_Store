import { updateCartValue } from "./updateCartValue";

export const getCardProductFromLS = () => {
    let cardProducts = localStorage.getItem('cardProductsLS');

    if(!cardProducts) {
        return [];
    }

    cardProducts = JSON.parse(cardProducts);

    updateCartValue(cardProducts);
    
    return cardProducts;
}