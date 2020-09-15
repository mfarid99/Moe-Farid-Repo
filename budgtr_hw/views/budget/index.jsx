const React = require ("react")
const Layout = require('../components/Layout.jsx')

class Index extends React.Component {
    render() {
        const {info} = this.props
        return (<Layout title = "index">

           

            <div>
               <h1>Hello Man 1</h1>
            </div>
            
            </Layout>
        )
    }
}

module.exports = Index