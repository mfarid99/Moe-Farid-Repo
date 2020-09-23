const React = require("react");
const AppLayout = require("./layout/AppLayout")
class Index extends React.Component {
  render() {
    return (
        <AppLayout title = "Fruits Index Page">  
      <div>
        <ul>
          {this.props.fruits.map((fruit, i) => {
            return (
              <li>
                The {fruit.name} is {fruit.color}
                {fruit.readyToEat
                  ? `- It is ready to eat`
                  : `- It is not ready to eat`}
              </li>
            );
          })}
        </ul>
      </div>
      </AppLayout>
    );
  }
}
module.exports = Index;





