const React = require ('react');

class New extends React.Component {
    render () {
        return (
            <form action = "/fruits" method = "POST">
                Title: <input type = "text" name = "title"/> 
                <br/> 
                Entry: <input type = "textarea" name = "entry"/>
                <br/>
                shipIsBroken: <input type = "checkbox" name = "shipBroken"/>
                <br/>
                <input type = "submit" name = "" value = "Verify"/>

                </form>
        )
    }
}

                module.exports = New