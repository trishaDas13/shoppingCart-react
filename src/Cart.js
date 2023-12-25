import './index.css';
import Card from './Card'
import { useState} from 'react';

export default function Cart(){

    let[cartItem, setCartItem] = useState(2);
    let [totalPrice, setTotalPrice] = useState(1444.35);
    let[cardList, setCardList] = useState([
        {
            pName: "Product-1",
            pValue: 847.89,
            pQty: 1,
        },
        {
            pName: "Product-2",
            pValue: 598.66,
            pQty: 1,
        }
    ]);
    
    //todo ----- update cart count -----
    function updateCart(count, updatedCardList){
        setCartItem(count);

        let totalPrice = updatedCardList.reduce((total, item) => {
            return total + (item.pQty * parseFloat(item.pValue));
        }, 0)
        setTotalPrice(totalPrice.toFixed(2)); //* Round to 2 decimal places
    }
    //todo ----- Clear cart -----
    function clearCart(){
        document.getElementById('cardContainer').innerHTML = "";
        setTotalPrice('0.00');
        setCartItem(0);
    }
    //todo ----- add item in the list -----
    function addToCart(){
        let updateCardList = []
        let newItem = {
            pName: `Product - ${cardList.length + 1}`,
            pValue: (Math.random() * (300 - 70) + 70).toFixed(2),
            pQty: 1,
        }
        updateCardList = [...cardList, newItem]
        setCardList(updateCardList);
        updateCart(updateCardList.length, updateCardList)
    }

    return(
        <>

            <nav>
                <h1 className="title">Shopping Cart</h1>
                <h1 className="cartItem">🛒<span>{cartItem}</span></h1>
            </nav>
            <main>
                <div className="addItems">
                <h2>Your Items</h2>
                <button
                    className="button-cart"
                    onClick={()=>{addToCart()}}
                >Add Items</button>
                </div>
                <div id="cardContainer">
                    <Card 
                        updateCart={updateCart}
                        cardList = {cardList}
                    />
                </div>
                <section className="totalPrice">
                    <h2>Total Price:</h2>
                    <h2>$ {totalPrice}</h2>
                </section>
                <button
                    className="button-cart"
                    onClick={clearCart}
                >Clear Cart</button>
            </main>
        </>
    );
}

