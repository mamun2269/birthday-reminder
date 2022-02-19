import React from 'react';

const List = ({people}) => {

  return (
    <>
        {
            people.map((person) =>{
            const{ id, name, age, image}=person;
            return(
                <>
                    <div className="list" key={id}>
                        <img className="list_img" src={image} alt="list img" />
                        <div className="details">
                            <h4 className="name">{name}</h4>
                            <p className="age">{age}</p>
                        </div>
                    </div>
                </>
            )
            })
        }
    </>
  )
}

export default List;