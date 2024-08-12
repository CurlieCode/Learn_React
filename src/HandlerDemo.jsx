import React, {useState} from 'react';


function HandlerDemo(){
    const [name, setName]= useState("Curlie");
    const [Qty, setQty] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment]=useState("");
    const [ship, setShip] = useState("delivery");

    function handleInput(event){
        setName(event.target.value)
    }

    function handleNumber(event){
        setQty(event.target.value)
    }

    function handleComment(event){
        setComment(event.target.value)
    }

    function handlePayment(event){
        setPayment(event.target.value)
    }

    function handleShip(event){
        setShip(event.target.value)
    }

    return(
        <div>
            <input value ={name} 
            onChange= {handleInput}/>
            <p> Name :{name}</p>
            <input value ={Qty} 
            onChange= {handleNumber}
            type = "number"/>
            <p> Quantity :{Qty}</p>
            <textarea value = {comment} onChange={handleComment}
            placeholder='Enter delivery instructions'/>
            <p>Comment :{comment}</p>

            <select value = {payment} onChange={handlePayment}>
                <option value=""> Select any option </option>
                <option value ="MasterCard">Master Card</option>
                <option value ="Visa">Visa </option>
                <option value ="GiftCard">Gift Card </option>
            </select>
            <p>Mode of Payment : {payment}</p>


            <label>
                <input type = "radio" value = "pickup" checked={ship === "pickup" }
                    onChange={handleShip} />
                Pick Up
            </label><br/>
            
            <label>
            <input type = "radio" value = "delivery" checked={ship === "delivery" }
                    onChange={handleShip} />
                Delivery
            </label>
            <p> Mode of shipping : {ship}</p>

        </div>
    )

}

export default HandlerDemo