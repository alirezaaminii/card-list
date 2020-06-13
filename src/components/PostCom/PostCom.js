import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {editSource} from "../../actions";

class PostCom extends PureComponent {
    state = {
        editSource: false,
        sourceName: this.props.location.state.source.name,
        autoCompleteItems: [],
        autoCompleteFlag: false
    };

    editSource = () => {
        if (this.state.editSource) {
            let data = {
                id: this.props.location.state.source.id,
                name: this.state.sourceName
            };
            //send data to update server
            //...

            this.props.editSource(data);

        }
        this.setState(prevState => ({
            editSource: !prevState.editSource
        }))
    };


    handleChange = e => {
        this.setState({
            sourceName: e.target.value
        });

        if (e.target.value.length > 0) {
            let news = this.props.news;
            const getNews = news => Object.keys(news).map(id => news[id]);
            const filterData = (data, text) => {
                return data.filter(post => (
                    post.source.name === undefined
                        ? null
                        : post.source.name.includes(text)
                ));
            };
            let result = filterData(getNews(news), e.target.value);

            this.setState({
                autoCompleteItems: result,
                autoCompleteFlag:true
            });
        }
    };

    selectSource = e => {
        this.setState({
            sourceName: e.target.value,
            autoCompleteFlag:false,
        });

    };
    render() {
        const {title, author, urlToImage, description} = this.props.location.state;
        const {editSource, sourceName, autoCompleteItems, autoCompleteFlag} = this.state;
        return (
            <section className="CityContainer CityContainer_Style"
                     style={{backgroundImage: "url(" + urlToImage + ")"}}>

                <div className="weather">
                    <p className="weather-title">
                        {title}
                        <br/>
                        <small>Author: {author}</small>
                    </p>
                </div>

                <div className="information">
                    <div
                        onClick={this.editSource}
                        className="information-button--add">
                        {editSource ? 'Submit' : 'Edit'}
                    </div>
                    <input type="text" className="information--input" id={editSource ? 'active' : null}
                           value={sourceName}
                           onChange={this.handleChange}
                    />
                    <ul className={editSource ? 'autoComplete-list' : 'd-none'}>
                        {autoCompleteFlag &&
                        autoCompleteItems.map((item, index) =>
                            <input onClick={this.selectSource}
                                   className="autoComplete-list--item" key={index} readOnly value={item.source.name}/>)
                        }


                    </ul>

                    <div className="information-container">
                        <div className="information-item-title information-item">
                            {description}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const getNews = news => Object.keys(news).map(id => news[id]);

const mapStateToProps = (state) => {
    return {
        news: getNews(state.news)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editSource: data => dispatch(editSource(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCom);

