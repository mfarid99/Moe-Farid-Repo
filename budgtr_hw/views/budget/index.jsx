const React = require ("React")

class Index extends React.Component {
    render() {
        const {info} = this.props
        return (
            <div>
               <h1>Hello Man</h1>
            </div>
        )
    }
}

module.exports = Index