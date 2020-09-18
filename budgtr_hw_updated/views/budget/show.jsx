const React = require("react");
const Layout = require("../Layout.jsx");

class Show extends React.Component {
  render() {
    const { budget, index } = this.props;
    console.log({budget})
    return (
      <Layout title="Show">
      <h1> {budget.name}</h1>

      <a href = {'/budget'}>Go Back</a>

      <h2> {"date   " + budget.date}</h2>

      <h2> {"from   " + budget.from}</h2>

      <h2> {"Amount  " + budget.amount}</h2>

           
            
        {/* <form action={`/budget/${index}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete" />
        </form>
        <a href={`/budget/${index}/edit`}>
          <button>EDIT</button>
        </a>
        <div>   </div> */}

      </Layout>
    );
  }
}
module.exports = Show;