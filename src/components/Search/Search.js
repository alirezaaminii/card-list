import React, {Component} from 'react';
import {ClipLoader} from "react-spinners";
import searchIcon from '../../assets/img/SVG/search(1)-gray.svg';
import cancel from '../../assets/img/SVG/Cancel.svg';
import ErrorBoundary from "../errors/ErrorBoundary";

class Search extends Component {
    state = {
        search: "",
        loading: false
    };

    handleChange = (ev) => {
        this.setState({
            search: ev.target.value,
            loading: false,
        });

        this.props.search(ev.target.value)
    };

    handleCancel = () => {
        this.setState({search: '',});
        this.props.removeSearch();
    };

    render() {
        return (
            <ErrorBoundary>
                <div className="searchBox">
                    <form>
                        <div className="form-group">
                            <input onChange={this.handleChange}
                                   value={this.state.search}
                                   type="search"
                                   className="search-input"
                                   id="search"
                                   placeholder="Search title..."
                                   autoComplete="off"/>
                            <label htmlFor="search"><img src={searchIcon} alt=""/></label>
                        </div>
                        <div className="form-group">

                            <img onClick={this.handleCancel} src={cancel} className={this.state.loading ? 'd-none' : null}
                                 alt=""/>

                            <ClipLoader color={'#777777'} loading={this.state.loading}/>
                        </div>
                    </form>
                </div>
            </ErrorBoundary>
        )
    }
}


export default Search;

