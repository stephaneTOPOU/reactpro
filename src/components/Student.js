import React,{Component} from 'react';

class Student extends Component{
    render(){
        const {name, email, phone} = this.props;
        return(
            <div>
                <h1>Détails des étudiants</h1>
                <p>Nom : {name}</p>
                <p>Email : {email}</p>
                <p>Téléphone : {phone}</p>
            </div>
        );
    }
}


export default Student;