
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Form from './components/Form';
import Card from './components/Card';

const CardList = (props) => (
    <div class="row">
        {props.profiles.map(profile =>
        <div class = "col-sm-2">
            <Card key={profile.id} {...profile}/>
        </div>)}
    </div>
);

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
        <div class="container-fluid">
          <div className="header">{this.props.title}</div>
          <Form onSubmit={this.addNewProfile} />
          <CardList profiles={this.state.profiles} />
        </div>
    );
  }
}

export default App;