const React = require ("react")

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
                        <h1>Budgtr</h1>
                    </header>
                        <main>
                            {this.props.children}
                        </main>
                        <footer>
                        <h1>This is a Page Footer</h1>


                        </footer>
                </body>
            </html>
        )
    }

}

module.exports = Layout