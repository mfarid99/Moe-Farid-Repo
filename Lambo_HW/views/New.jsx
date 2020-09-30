const React = require ('react');

class New extends React.Component {
    render () {
                    return (
        <div>
            <h1>Buy Classic Lamborgini</h1>
            <form action="/lambos" method="POST">
                Image: <input type="text" name="Image" /><br/>
                Model: <input type="text" name="Model" /><br/>
                Year:  <input type="text" name="year" /><br/>
                Color: <input type="text" name="Color" /><br/>
                Price: <input type="text" name="Price" /><br/>
                Stock: <input type="text" name="Stock" /><br/>
                {/* Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/> */}
                <input type="submit" name="" value="Create Lambo"/>
             </form>
        </div>);
        
    }
}

    module.exports = New;