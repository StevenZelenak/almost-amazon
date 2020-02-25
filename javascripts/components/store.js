import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';


const addToCartEvent = () => {
    alert("You Clicked add to cart");
}



const makeStore = () => {

    const book = bookData.getBook();

    let domString = '';

    domString += `<h2>${book.name}</h2>`;
    domString += '<button id="add-to-cart-button" class="btn btn-primary">Add</button>';
    document.getElementById("add-to-cart-button").addEventListener('click', addToCartEvent);

    util.printToDom("store-container", domString);
};



//if make the key has the same name as the value you only have to type the name once
export default {
    makeStore,

};