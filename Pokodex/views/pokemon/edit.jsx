const React = require("react")
const Layout = require('../Layout.jsx')
class Edit extends React.Component {
    render(){
        const {pokemon, index} = this.props
        return (<Layout title="Edit" color="red" cheese="gouda">
            <form action={`/pokemon/${index}?_method=PUT`} method="post">
                <input type="text" name="name" value={pokemon.name}/>
                <input type="text" name="img" value={pokemon.img}/>
                <input type="text" name="type" value={pokemon.type}/>
                <input type="text" name="stats[hp]" value={pokemon.stats.hp}/>
                <input type="text" name="stats[attack]" value={pokemon.stats.attack}/>
                <input type="text" name="stats[defense]" value={pokemon.stats.defense}/>
                <input type="text" name="stats[spattack]" value={pokemon.stats.spattack}/>
                <input type="submit" value="update"/>
            </form>
        </Layout>)
    }
}
module.exports = Edit;
