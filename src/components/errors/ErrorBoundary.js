import React from 'react';


class ErrorBoundary extends React.Component {
    state = {
        hasError : false
    }


    static getDerivedStateFromError(error) {
        return { hasError : true }
    }

    componentDidCatch(error , errorInfo) {
        // send errrorInfo to Server for store
    }


    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }


        return this.props.children;
    }

}


export default ErrorBoundary;