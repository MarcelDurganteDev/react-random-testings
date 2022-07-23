import React, { Component } from 'react';
import './App.css';

function FriendsList(props) {
    return (
        <ul>
            {props.list.map(name => (
              <li key={name}>
                <span>
                  {name}
                </span>
                <button >Remove</button>
              </li>
            ))}
        </ul>
    );
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: ['marcel', 'mika', 'mãe']
        };
    }

    handleRemove(name) {
        this.setState(currState => {
            return {
                friends: currState.friends.filter(friend => friend !== name)
            };
        });
    }

    render() {
        return (
            <div>
                <FriendsList list={this.state.friends} />
            </div>
        );
    }
}

export default App;
