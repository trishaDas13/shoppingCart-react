import './index.css';
import Card from './Card'
import { useState} from 'react';

export default function Cart(){

    let[cartItem, setCartItem] = useState(2);
    let [totalPrice, setTotalPrice] = useState(1444.35);
    
    //todo ----- update cart count -----
    function updateCart(count, updatedCardList){
        setCartItem(count);

        let totalPrice = updatedCardList.reduce((total, item) => {
            return total + (item.pQty * parseFloat(item.pValue));
        }, 0)
        setTotalPrice(totalPrice.toFixed(2)); //* Round to 2 decimal places
    }

    return(
        <>

            <nav>
                <h1 className="title">👗 Shopping Cart</h1>
                <h1 className="cartItem">🛒<span>{cartItem}</span></h1>
            </nav>
            <main>
                <div className="addItems">
                <h2>Your Items</h2>
                <button
                >Add Items</button>
                </div>
                <div className="cardContainer">
                    <Card 
                        updateCart={updateCart}
                    />
                </div>
                <section className="totalPrice">
                    <h2>Total Price:</h2>
                    <h3>{totalPrice}</h3>
                </section>
            </main>
        </>
    );
}

