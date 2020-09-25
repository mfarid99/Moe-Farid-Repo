const React = require("react");
const AppLayout = require("./layout/AppLayout");

class Index extends React.Component {
  render() {
    return (
      <AppLayout title="Lambo Index Page">
        <div>
          <ul>
            {this.props.lambos.map((lambo, i) => {
              return (
                <div> 
                  {lambo.Image} <br />
                  {lambo.Model} <br />
                  {lambo.Year} <br />

                {lambo.Color} <br />    
                {lambo.Price}
                {lambo.readyToBuy?`Ready To Buy`: `not ready to buy`}


                  <form
                    action={`/lambos/${lambo._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  
                  </form>
                  
                  <form
                    action={`  /lambos/${lambo._id}/edit`}
                  >
                    <input type="submit" value="EDIT" />
                  </form>

                
                               
                </div>
              );
            })}
          </ul>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Index;