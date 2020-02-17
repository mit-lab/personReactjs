import React, {Component} from 'react'


// Components
import Parent from './Parent'


class Preloader extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (
      <Parent />
    );
  }
}

export default Preloader;
