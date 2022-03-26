import React, { useState } from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMoneyCheckAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const { image, firstName, lastName, email, phone, price } = props.user;
    const [setBtnDisable] = useState(false);

    return (
        <div className="user">
            <img src={image} alt=""/>
            <div>
                <p><FontAwesomeIcon className="icon" icon={faUser} /> Name: <span className="name">{firstName} {lastName}</span></p>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> Email: {email}</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} /> Phone: {phone}</p>
                <p><FontAwesomeIcon className="icon" icon={faMoneyCheckAlt} /> Price: ${price}</p>
            </div>
            <button onClick={() => {
                        props.addToCart(props.user);
                        setBtnDisable(true);
                    }} className={"add-btn"}><FontAwesomeIcon className="icon" icon={faPlusSquare} /> Add </button>
        </div>
    );
};

export default User;