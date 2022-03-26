import React from 'react';

const Questions = () => {
    return (
        <div>
            <h3>Question 1: How React Works?</h3>
            <h4>Answer: </h4>
            <p>ReactJs one of the most popular JavaScript libraries for mobile and web application development.React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. </p>
            <h3>Question 2: Props vs State Difference.</h3>
            <h4>Answer: </h4>
            <p>Props are a JavaScript object that React components receive as an arbitrary input to produce a React element. They provide a data flow between the components. Props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable.

            State is a JavaScript object which contains data that influence how the component looks at a certain point in time. The second part is what makes the state different compared to props. State is just a snapshot of the app in a time.
            </p>
        </div>
    );
};

export default Questions;