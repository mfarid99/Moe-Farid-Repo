const React = require("react");
const Layout = require("../Layout.jsx");
class Show extends React.Component {
  render() {
    const { pokemon, index } = this.props;
    return (
      <Layout title="Show">
        <div> 
        <div>  

        <h2 id = "pokename">{pokemon.name}</h2>
        <div><img src = {pokemon.img}></img></div>

        </div>

        <div>{"Type: " + pokemon.type}</div>



        <div>  
        <div>{"HP: " + pokemon.stats.hp}</div>
        <div>{"Attack: " + pokemon.stats.attack}</div>
        <div>{"Defense: " + pokemon.stats.defense}</div>
        <div>{"Spattack: " + pokemon.stats.spattack}</div>
        </div>




        <form action={`/pokemon/${index}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete" />
        </form>
        <a href={`/pokemon/${index}/edit`}>
          <button>EDIT</button>
        </a>

        </div>
      </Layout>
    );
  }
}
module.exports = Show;