import React,{Component} from "react";

class Employee extends Component{
    render(){
        const employees = this.props.employees;
        const employesList = employees.map(employee=>{
            return(
                <div className="emplist" key={employee.id}>
                    <p>Nom : {employee.name}</p>
                    <p>Email : {employee.email}</p>
                    <p>Téléphone : {employee.phone}</p>
                </div>
            )
        });
        return(
            <div>
                <h1>La liste des employés</h1>
                {employesList}
            </div>
        )
    }
}

export default Employee;