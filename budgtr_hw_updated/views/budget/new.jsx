const React = require("react");
const Layout = require("../Layout.jsx");
class New extends React.Component {
  render() {
    return (
      <Layout title="New" color="blue">
        <h2>Add a new item</h2>
        <a href = {`/budget`}  >Go Back</a>
        <form action="/budget/" method="post">
          <input type="text" placeholder="date" name="date" />
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="amount" name="amount" />
          <input type="text" placeholder="from" name="from" />
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    );
  }
}
module.exports = New;