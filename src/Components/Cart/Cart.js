import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Cart.css';

const Cart = (props) => { 

    return (
        <div className="cart">
            <h2>Total Players added: {props.user.length}</h2>
            <div className="avatar-container">
                {
                    props.user.map(user => <Avatar 
                    user={user}
                    key ={user.id} 
                    >
                    </Avatar>)
                }
            </div>
            <button onClick={props.randomItem} className="choose-btn">Choose One</button>
            <button onClick={props.removeItem} className="close-btn">Close All</button>
        </div>
    );
};

export default Cart;