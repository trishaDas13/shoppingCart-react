import './index.css';
import { useState} from 'react';

export default function Card(props){

    let[cardList, setCardList] = useState([
        {
            pName: "Product-1",
            pValue: "845.69",
            pQty: 1,
        },
        {
            pName: "Product-2",
            pValue: "598.66",
            pQty: 1,
        }
    ]);

    //todo ----- decrease the item qty -----
    function deleteItem(i){
        let updatedList = [...cardList];
        if(updatedList[i].pQty > 1){
            updatedList[i].pQty -= 1;
        }
        else{
            updatedList.splice(i, 1);
        }
        setCardList([...updatedList]);
        props.updateCart(updatedList.length, updatedList);
       

    }
    //todo ----- increase the item qty -----
    function addItem(i){
        let updatedList = [...cardList];
        updatedList[i].pQty += 1;
        setCardList([...updatedList]);
        props.updateCart(updatedList.length, updatedList);
    }

    return(
        <>       
            {
                cardList.map((item, index) => {
                    return (
                        <div className="card">
                            <p>{item.pName}</p>
                            <p>${item.pValue}</p>
                            <div className="btns">
                                <button
                                    title="Delete the item"
                                    onClick = {() => deleteItem(index)}
                                >➖</button>
                                <span>{item.pQty}</span>
                                <button
                                    title="Add the item"
                                    onClick={() => addItem(index)}
                                >➕</button>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}