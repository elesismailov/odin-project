
import React from "react";


class EducationInformation extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'hello ',
            title: '',
            years: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })
    }

    render() {
        return (
            <div id="education-information">
                <form>
                    <label htmlFor="">School name: </label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="">Title of study: </label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="">Years of study: </label>
                    <input
                        type="text"
                        name="years"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </form>

                <p>School name: {this.state.name}</p>
                <p>Title of study: {this.state.title}</p>
                <p>Years of study: {this.state.years}</p>
            </div>
        );
    }
    
}

export default EducationInformation;