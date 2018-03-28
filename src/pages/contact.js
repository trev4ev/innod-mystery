import React from 'react';

export default class ContactForm extends React.Component {
    onChangeInput(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        fetch('https://untitled-7u6istdb7h9e.runkit.sh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((response) => {
            if (!response.ok) throw new Error(response);
            return response.json();
        })
        .then((response) => {
            console.log(response);
            alert('Sent!');
        })
        .catch(err => console.error(err));
    }

    render() {
        return (
            <form onSubmit={(event) => this.onSubmit(event)}>
                <label for="name">Name</label>
                <input type="text" id="name" onChange={(event) => this.onChangeInput(event)} />
                <label for="email">Email</label>
                <input type="text" id="email" onChange={(event) => this.onChangeInput(event)} />
                <label for="message">Message</label>
                <input type="text" id="message" onChange={(event) => this.onChangeInput(event)} />
                <input type="submit" value="Send message"  />
            </form>
        );
    }
}

