import React, { useState } from 'react';
import List from './List';
import data from './data';


const ReminderCard = () => {
    const [people, setPeople]= useState(data);
    const clearList=() => {
        setPeople([]);
    };


  return (
    <>
    <div className="remindercard_section">
        <div className="container">
            <div className="card_wrapp">
                <div className="card_body">
                    <h3>{people.length} birthdays today</h3>
                    <List people={people}/>
                    <button className="clear_btn" onClick={clearList}>Clear All</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ReminderCard;



// here we get data from data source
// then pass the data to list componet through props