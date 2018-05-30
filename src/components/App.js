import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Standalone React App</h1>
        </div>
    );
  }
}

const Title = (props) => (<NavLink to='/' style={styles.link}>
  <h1 style={styles.title}>App</h1>
</NavLink>)

const styles = {
  title: {
    color: 'red'
  },
  link: {
    textDecoration: 'none'
  }
}

export default App;
