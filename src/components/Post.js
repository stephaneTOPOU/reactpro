import React,{Component} from 'react';
import Student from './Student';

class Post extends Component{
    //Etat
    state={
        Nom : 'Landrine',
        Age : 20,
        email : '',
        telephone : '',
        Competence : ['javaScript','HTML','CSS']
    }

    //action quand tu clique sur le bouton
    cliquez=(e)=>{
        console.log(this.state);
    }

    //action quand tu passe la souris sur le bouton
    sourisPasser=(e)=>{
        console.log(e.target,e.pageX);
    }

    //Affichage
    copie=(e)=>{
        console.log('Le paragraphe a été copié');
    }

    //Changé d'état
    changerEtat=(e)=>{
        this.setState({
            Nom : 'Stéphane',
            Age : 27,
            Competence : ['Laravel8','PHP','Python']
        })
    }

    //
    handelChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    //
    handelSubmit=(e)=>{
        e.preventDefault();
        console.log('Nom',this.state.Nom);
        console.log('Email',this.state.email);
        console.log('Phone',this.state.telephone);
    }


    render(){
        return(
            <div>
                <h1>Ce ci est un composent</h1>
                {new Date().toLocaleString()}
                <p>Nom : {this.state.Nom}</p>
                <p>Age : {this.state.Age}</p>
                <p>Competence :{this.state.Competence.join(',')}</p>
                <button onClick={this.cliquez}>Cliquez ici</button>
                <button onMouseOver={this.sourisPasser}>souris ici</button>
                <p onCopy={this.copie}>Ce ci est un paragraphe de test</p>
                <button onClick={this.changerEtat}>Chandez d'état</button>
                <form onSubmit={this.handelSubmit}>
                    Nom       : <input type="text" name='Nom'onChange={this.handelChange}></input><br/>
                    Email     : <input type="email" name='email'onChange={this.handelChange}></input><br/>
                    Téléphone : <input type="phone" name='telephone'onChange={this.handelChange}></input><br/>
                    <button type='submit'>Ajouter</button>
                </form>
                <br/>
                <Student name="Landrine" email="landrine@gmail.com" phone="92655030" />
                <Student name="Stéphane" email="stephane@gmail.com" phone="93542058" />
            </div>
        )
    }
}

export default Post;