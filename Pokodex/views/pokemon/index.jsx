const React = require('react')
const Layout = require('../Layout.jsx')

class Index extends React.Component {
    render(){
        const {Pokemon} = this.props
        return (<Layout title="index">
            <a href="/pokemon/new"><button>Add A Pokemon</button></a>
            <div>
            {Pokemon.map((pokemon, index) => {
                return <a href={`/pokemon/${index}`}><div>{pokemon.name}</div></a>
               
            })}
            </div>
        </Layout>)
    }
}
module.exports = Index