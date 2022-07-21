import React from "react";

const Teacher = (props) =>{
    const {name, email, phone} = props;
    return(
        <div>
            <h3>Détails des enseignants</h3>
            <p>Nom : {name}</p>
            <p>Email : {email}</p>
            <p>Téléphone : {phone}</p>
        </div>
    )
}

export default Teacher;
