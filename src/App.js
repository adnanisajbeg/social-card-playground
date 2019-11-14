
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Form from './components/Form';
import Card from './components/Card';

const CardList = (props) => (
    <div class="card">
      {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
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
        <div>
          <div className="header">{this.props.title}</div>
          <Form onSubmit={this.addNewProfile} />
            <div class="row">
                <div class="col-sm-6">
                    <CardList profiles={this.state.profiles} />
                </div>
            </div>
        </div>
    );
  }
}

export default App;