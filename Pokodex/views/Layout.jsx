const React = require ("react")
const Pokemon = require("../models/pokemon")

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                <title> {this.props.title} </title>
                <link rel = "stylesheet" href = "/style.css"/>
                </head>
                <body>
                    <header>
                        <h1>POKODEX</h1>
                    </header>
                        <main>
                            {this.props.children}
                        </main>
                        <footer>
                        <h1>BOTTOM</h1>


                        </footer>
                </body>
            </html>
        )
    }

}

module.exports = Layout