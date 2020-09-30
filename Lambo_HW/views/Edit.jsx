const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Edit extends React.Component {
  render() {
    return (
      <AppLayout title="Edit Page">
        {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
        {/* form is not complet we will do that below*/}
        <form
          action={`/lambos/${this.props.lambo._id}?_method=PUT`}
          method="POST"
        >
          {"Image: "}
          <input type="text" name="Image" defaultValue={this.props.lambo.Image} />
          <br />
          {"Model: "}
          <input type="text" name="Model" defaultValue={this.props.lambo.Model}
          />
          {"Year: "}
          <input type="text" name="Year" defaultValue={this.props.lambo.Year} />
          <br />
          {"Color: "}
          <input type="text" name="Color" defaultValue={this.props.lambo.Color} />
          <br />
          {"Price: "}
          <input type="text" name="Price" defaultValue={this.props.lambo.Price} />
          <br />
          {"Stock: "}
          <input type="text" name="Stock" defaultValue={this.props.lambo.Stock} />
          <br />
          
          <input type="submit" value="Submit Changes" />
        </form>
      </AppLayout>
    );
  }
}
module.exports = Edit;