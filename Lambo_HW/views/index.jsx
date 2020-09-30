const React = require("react");
const AppLayout = require("./layout/AppLayout");



class Index extends React.Component {
  render() {

//  if lambo.stock <0 {
//    <h1>Out of stock</h1>
//    else
//    {
//      {lambo.Stock}
//    }
//  }
    
    const mystyle3 = {
      color: "red"
    }

    const mystyle = {
      color: "black"
    }
    
const mystyle2 = {
  backgroundcolor: "red",
  float: "left",
  width: "39%",
  margin: "20px 20px 20px 20px",
  padding: "5px 40px 5px 5px",
  boxsizing: "border-box",
  border: "5px solid red"

  

}



      // const mystyle = {

      // display: "flex",
      // flexdirection: "row",
      //   justifycontent: "space-between",
      //   width: "500px",
      //   margin: "0 auto",
      //   float: "none"
      //     };

    return (
      <AppLayout title="Lambo Index Page"
                  title = "INDEX PAGE LAMBO">

        <div>
          
            {this.props.lambos.map((lambo, i) => {

              

              
              return (

                <div className = "container" style = {mystyle}>
                <div className = "lamboDiv" style = {mystyle2}> 
                  <img src = {lambo.Image}></img><br />
                  <div className = "childImg"> 


                Model: {lambo.Model} <br />
                Year: {lambo.Year} <br />
                
                Color: {lambo.Color} <br />    
                Price: ${lambo.Price} <br />
                {lambo.Stock < 1 ? <h1 style = {mystyle3} > Out Of Stock</h1>: <h1>{lambo.Stock}</h1>}
                  <form action={`  /lambos/${lambo._id}/buy?_method=put`}method ="POST">
                <button> BUY {lambo.name} </button>
                </form>
                
                

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
                               
                </div>
                
                </div>
                
              ) ; 
            })}
          
        </div>
      </AppLayout>
    ) ;
  } 
} 

module.exports = Index;