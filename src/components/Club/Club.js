import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Club.css';

const Club = () => {
    const [clubs, setClubs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClubs(data))
    },)
    return (
        <div>
            <div className='gym-club'>
                <h1>World-Sport-Club</h1>
            </div>
            <div>
                <h3>Choice Your Sport</h3>
            </div>
            <div className='club-container'>
                <div className='products-container'>
                    {
                        clubs.map(club => <Product key={club.id} club={club}></Product>)
                    }
                </div>
                <div className='total-info'>
                    <div>
                        <h4>Mongswiching Chowdhury</h4>
                        <h4>Rangamati, Bangladesh</h4>
                    </div>
                    <div className='information-details'>
                        <div className='information'>
                            <h3>80</h3>
                            <p><small>kg</small></p>
                            <h3>6.5</h3>
                            <h3>25</h3>
                            <p><small>yrs</small></p>
                        </div>
                        <div className='fitnes-info'>
                            <p>Weight</p>
                            <p>Height</p>
                            <p>Age</p>
                        </div>

                    </div>
                    <div>
                        <h3>Add A Break</h3>
                    </div>
                    <div className='circle'>
                        <p>10s</p>
                        <p>20s</p>
                        <p>30s</p>
                        <p>40s</p>
                    </div>
                    <div>
                        <h3>Exercise Details</h3>
                    </div>
                    <div className='exercise-time'>
                        <h4>Exercise time</h4>
                    </div>
                    <div className='break-time'>
                        <h4>Break time</h4>
                    </div>
                    <button className='btn-activity'>
                        <p>Activity Completed</p>
                    </button>
                </div>
            </div>
            <div className='question-and-answer'>
                <h3>Question # 1: How does work react??</h3>
                <p>Answer: While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>

                <h3>Question # 2: Difference between props and state  ??</h3>
                <p>Answer: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.state to store the data current page needs in controller-view. props to pass data & event handlers down to child components.</p>

                <h3>Question # 3: useEffect api data other than loading what else is used?? </h3>
                <p>Answer: Running once on mount: fetch API data.
                    Running on state change: validating input field.
                    Running on state change: live filtering.
                    Running on state change: trigger animation on new array value.
                    Running on props change: update paragraph list on fetched API data update.</p>
            </div>
        </div>
    );
};

export default Club;