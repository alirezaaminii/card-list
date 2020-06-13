import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import axios from 'axios';

export default function (ComposedComponent) {

    //check authentication or get require data
    class Authentication extends Component {

        componentDidMount() {
            if(this.props.news.length === 0){
                axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b66d89f83efa449785ac8a11e8f775b3')
                    .then(res => this.props.saveNews(res.data.articles))
                    .catch(err => console.log(err));
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            news: state.news
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            saveNews: data => dispatch(actions.receiveNews(data)),
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}

