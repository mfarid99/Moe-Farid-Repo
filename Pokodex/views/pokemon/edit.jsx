const React = require("react")
const Layout = require('../Layout.jsx')
class Edit extends React.Component {
    render(){
        const {pokemon, index} = this.props
        return (<Layout title="Edit" color="red" cheese="gouda">
            <form action={`/pokemon/${index}?_method=PUT`} method="post">
                <input type="text" name="title" value={pokemon.name}/>
                <input type="text" name="title" value={pokemon.img}/>
                <input type="text" name="message" value={pokemon.type}/>
                <input type="submit" value="update"/>
            </form>
        </Layout>)
    }
}
module.exports = Edit;
