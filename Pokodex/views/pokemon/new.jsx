const React = require("react");
const Layout = require("../Layout.jsx");
class New extends React.Component {
  render() {
    return (
      <Layout title="New" color="blue">
        <form action="/pokemon/" method="post">
          <input type="text" placeholder="name" name="name" />
          <input type="submit" value="Update Change" />
        </form>
      </Layout>
    );
  }
}
module.exports = New;