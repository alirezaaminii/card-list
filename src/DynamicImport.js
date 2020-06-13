import { Component } from 'react';


class DynamicImport extends Component {
    state = {
        component: null
    }
    componentDidMount () {
        this.props.load()
            .then((component) => {
                this.setState(() => ({
                    component: component.default ? component.default : component
                }))
            })
    }
    render() {
        return this.props.children(this.state.component)
    }
}
export default DynamicImport;