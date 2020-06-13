import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Card extends Component {
    state = {
        redirect: false
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: 'post/' + this.props.publishedAt,
                state: this.props
            }}/>
        }

        return null
    };

    render() {
        const {title, author, urlToImage} = this.props;
        return (
            <div
                className="card-group--item"
                style={{backgroundImage: "url(" + urlToImage + ")"}}>
                <p className="card-group--item-city">{title.substring(0, 39)} ...</p>
                {author && <p className="card-group--item-country"><small>-{author}-</small></p>}
                {this.renderRedirect()}
                <mark onClick={()=>this.setState({redirect: true})}>Read More</mark>
            </div>
        )
    }
}


export default Card;

