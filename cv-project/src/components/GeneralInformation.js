
import React from "react";


class GeneralInformation extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'hello ',
            email: '',
            phone: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })
    }

    render() {
        return (
            <div id="general-information">
                <form>
                    <label htmlFor="">Your name:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="">Your email:</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="">Your phone number:</label>
                    <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </form>

                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone number: {this.state.phone}</p>
            </div>
        );
    }
    
}

export default GeneralInformation;