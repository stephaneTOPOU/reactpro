import React, { Component } from "react";
import './AddEmployee.css';

class AddEmployee extends Component {
    state = {
        name: null,
        email: null,
        phone: null
    }
    Ajouter = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    btnAjouter = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state)
    }

    componentDidMount()
    {
        console.log("component did Mount method is called");
    }

    componentDidUpdate()
    {
        console.log("component did update method is called");
    }

    componentWillUnmount()
    {
        console.log("component will UnMount method is called")
    }

    render() {
        return (
            <div>
                <h1>Ajouter un nouvel(le) employé(e)</h1>
                <form className="empform" onSubmit={this.btnAjouter}>
                    Nom : <input type="text" name="name" onChange={this.Ajouter} /> <br />
                    Email : <input type="email" name="email" onChange={this.Ajouter} /> <br />
                    Téléphone : <input type="text" name="phone" onChange={this.Ajouter} /> <br />
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        )
    }
}

export default AddEmployee;