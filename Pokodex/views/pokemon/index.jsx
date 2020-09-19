const React = require('react')
const Layout = require('../Layout.jsx')

class Index extends React.Component {
    render(){
        const {Pokemon} = this.props
        return (<Layout title="index">
            <a id = "Addpokemonbtn" href="/pokemon/new"><button>Add A Pokemon</button></a>
            <div className = "pokeDiv">
            {Pokemon.map((pokemon, index) => {
                return <a className = "box" href={`/pokemon/${index}`}><img src = {pokemon.img}></img><h2>{pokemon.name}</h2></a>
                        
               
            })}
            </div>
        </Layout>)
    }
}
module.exports = Index