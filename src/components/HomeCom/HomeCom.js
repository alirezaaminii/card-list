import React, {Component} from 'react';
import {connect} from "react-redux";
import Search from "../Search/Search";
import Card from '../Card/Card';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/core/styles';
import Loading from "../LoadingCom/Loading";

const StyledButton = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '2rem auto',
        display: 'block'
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

class HomeCom extends Component {
    state = {
        error: false,
        loading: true,
        searchResult: [],
        maximumCards: 5,
        disabled: false
    };

    componentDidMount() {
        setTimeout(()=>{
            this.setState({loading: false})
        },200)
    }

    loadMore = () => {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            if (this.state.maximumCards + 5 > this.props.news.length) {
                this.setState({
                    maximumCards: this.props.news.length,
                    loading: false,
                    disabled: true
                })
            } else {
                this.setState({
                    maximumCards: this.state.maximumCards + 5,
                    loading: false
                })
            }

        }, 700)

    };

    searchData = (text) => {
        if(text.length > 1){
            let news = this.props.news;
            const getNews = news => Object.keys(news).map(id => news[id]);
            const filterData = (data, text) => {
                return data.filter(post => (
                    post.title === undefined
                        ? null
                        : post.title.includes(text)
                ));
            };
            let result = filterData(getNews(news), text);

            this.setState({
                searchResult: result
            });
            result = null;
            news = null;
        }
    };

    render() {
        const {news} = this.props;
        const {disabled, error, maximumCards, searchResult} = this.state;
        return (
            <section className="HomeContainer">

                <Search {...this.props}
                        search={(data) => this.searchData(data)}
                        removeSearch={() => this.setState({searchResult: ''})}/>

                <h2 className={error ? 'errorText' : 'd-none'}>Something went wrong</h2>

                {/* Search Result */}
                {searchResult.length > 0 ? <h4>Search Result:</h4> : null}
                {searchResult && searchResult.map((item, index) => <Card key={index} {...item}/>)}


                {/* News */}
                {news && <h4>News:</h4>}
                {news && news.map((item, i) =>
                    i <= maximumCards ?
                        <Card {...item} key={i}/>
                        : null
                )}

                {/* Load More Button */}
                <Container maxWidth="sm">
                    <Box justifyContent="center">
                        {
                            this.state.loading
                                ? <Loading/>
                                : <StyledButton
                                    variant="contained" onClick={this.loadMore} color='primary'
                                    disabled={disabled}
                                >Load More</StyledButton>

                        }
                    </Box>
                </Container>

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

export default connect(mapStateToProps, null)(HomeCom);

