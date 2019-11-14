import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div class = "card text-center" className="github-profile" style={{width: 10 + 'rem'}}>
                <div className="card-header">
                    GitHub User
                </div>
                <img class = "card-img-top" src={profile.avatar_url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{profile.name}</h5>
                    <div className="card-text">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;