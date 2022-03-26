import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import Questions from '../Questions/Questions';
import User from '../User/User';
import './Users.css';


const Users = () => {

    const [cart, setCart]  = useState([]);

    const [users, setUsers] = useState([]);


    const addToCart = (user) => {
        const newUser = [...users, user];

       if(cart.find(player => player.id === user.id)){
        alert('Duplicate not allowed');
       }
       else {
        setCart(cart => [...cart, user])
       }
    };
    const randomItem= () =>{
        let randomarr = [];
        const random = Math.floor(Math.random() *cart.length);
        randomarr.push(cart[random])
        setCart(randomarr);
    }
    const removeItem = () => {
        setCart([])
    }

    return (
        <div className="users-container">
            <div className="users">
                {
                    fakeData.map(user => <User key={user.id} addToCart={addToCart} user={user}></User>)
                }

            <Questions></Questions>
            </div>
            <div className="cart-details">
                <Cart user={cart}
                randomItem ={randomItem}
                removeItem = {removeItem}
                >
                </Cart>
                
                </div>
        </div>
    );
};

export default Users;