const React = require("react");
const Layout = require("../Layout.jsx");
class New extends React.Component {
  render() {
    return (
      <Layout title="New" color="blue">
        <form action="/pokemon/" method="post">
          <input type="text" 
          placeholder="name" name="name" />

          <input type="text"  placeholder="image path" name="img"/>

          <input type="text" placeholder="hp" name="stats[hp]" />
          <input type="text" placeholder="attack" name="stats[attack]" />
          <input type="text" placeholder="defense" name="stats[Defense]" />
          <input type="text" placeholder="spattack" name="stats[spattack]" />
          <input type="submit" value="Update Change" />

        </form>
      </Layout>
    );
  }
}
module.exports = New;