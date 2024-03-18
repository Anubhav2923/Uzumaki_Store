import { getCardProductFromLS } from "./getCardProductFromLS";

import products from "./api/products.json";

let cartProducts = getCardProductFromLS();

let filterProducts = products.filter((currProd) => {
  return cartProducts.some((curElem) => curElem.id === currProd.id);
});

console.log(filterProducts);

// to update the add to cart page

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((currProd) => {
    const { category, id, image, name, stock, price } = currProd;

    let productClone = document.importNode(templateContainer.content, true);

    productClone.querySelector('#cardValue').setAttribute("id", `card${id}`);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image;
    
    productClone.querySelector(".productPrice").textContent = price;




    cartElement.appendChild(productClone)




  });
};

// -----------------------------------------------------
// Showing the cartProducts
// --------------------------------------------------------
showCartProduct();

// -----------------------------------------------------
// calculating the card total in our cartProducts page
// --------------------------------------------------------
// updateCartProductTotal();
