
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
        this.setState({ name: event.target.value })
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
                    <input type="text" />
                    <label htmlFor="">Your phone number:</label>
                    <input type="text" />
                </form>

                <p>{this.state.name}</p>
            </div>
        );
    }
    
}

export default GeneralInformation;