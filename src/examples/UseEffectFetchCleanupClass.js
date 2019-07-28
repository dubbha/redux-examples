import React, { Component } from 'react';
import { fetchUser } from './utils';

export class UseEffectFetchCleanupClass extends Component {
  state = {
    uid: 1,
    user: null,
  };

  fetch() {
    fetchUser(this.state.uid).then(user => {
      if (!this.unmounted && user.id === this.state.uid) {
        this.setState({ user });
      } else {
        console.log('outdated', user);
      }
    })
  }

  setUid = (e) => {  // bind the callback
    this.setState({ uid: Number(e.target.value) });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.uid !== prevState.uid) {
      this.fetch();
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }
  
  render() {
    const { uid, user } = this.state;

    return (
      <div>
        <label>ID: </label>
        <input type="number" value={uid} onChange={this.setUid} min={1} max={10} />
        { user && (
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
          </ul>
        )}
      </div>
    )
  }
}
