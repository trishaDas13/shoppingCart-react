import './index.css';
import { useState} from 'react';

export default function Card(props){

    // let[cardList, setCardList] = useState(props.cardList);

    // //todo ----- decrease the item qty -----
    // function deleteItem(i){
    //     let updatedList = [...cardList];
    //     if(updatedList[i].pQty > 1){
    //         updatedList[i].pQty -= 1;
    //     }
    //     else{
    //         updatedList.splice(i, 1);
    //     }
    //     setCardList([...updatedList]);
    //     props.updateCart(updatedList.length, updatedList);
    // }
    // //todo ----- increase the item qty -----
    // function addItem(i){
    //     let updatedList = [...cardList];
    //     updatedList[i].pQty += 1;
    //     setCardList([...updatedList]);
    //     props.updateCart(updatedList.length, updatedList);
    // }

    const [count, setCount] = useState(1);

    const deleteItem = (i) => {
      let updatedList = [...props.cardList];
      let updatedCount = count - 1;
      setCount(updatedCount);
      props.updateCart(updatedCount, updatedList);
    };
  
    const addItem = (i) => {
      let updatedList = [...props.cardList];
      updatedList[i].pQty += 1;
      setCount(count + 1);
      props.updateCart(count + 1, updatedList);
    };

    return(
        <>       
            {
                props.cardList.map((item, index) => {
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