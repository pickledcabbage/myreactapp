import React from 'react';
import axios from 'axios';
import './NameForm.css';

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendRequest= this.sendRequest.bind(this);

        this.field = "Name:";

        this.state = {
             name: "",
             last_name: "",
             description : "Nothing here so far!",
         };

        
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000')
            .then( res => {
                console.log(res.data);
                this.setState({ description: res.data});
            });
    }

    handleChange(event) {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
    }

    handleSubmit(event) {

        axios.get('http://127.0.0.1:5000')
            .then( res => {
                console.log(res);
                this.setState({ description: res.data});
            });
    }

    sendRequest(event) {
        axios.get('http://127.0.0.1:5000')
            .then( res => {
                console.log(res.data);
                this.setState({ description: res.data});
            });
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="FormData">
                <div>
                    {this.state.description}
                </div>
                <label>
                    Name:
                    <input type ="text" name="name" value={this.state.name} onChange={this.handleChange}/> 
                </label>

                <label>
                    LastName:
                    <input type ="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/> 
                </label>
                <button type='button' onClick={this.sendRequest}>Send Request!</button>
                <input type="submit" value="Submit" />
               </div>
            </form>
        );
    }
}

export default NameForm