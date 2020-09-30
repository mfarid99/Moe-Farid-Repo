// This adds react to our file
const React = require('react');
const { createPortal } = require('react-dom');

class AppLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
        <link rel = "stylesheet" href = "public/style.css"/>

            <title>
            
              {this.props.title}</title>
              
        </head>
        <body>
          <h1 style = {{color: "red"}}>FROM APPLAYOUT</h1>
        <h1>{this.props.title}</h1>
       {/* This is where our other components will be injected */}
          {this.props.children}
          
          {/* <hr/>
          <p>Copyright &copy; 2020 Fruit Netweork All rights reserved</p> */}
        </body>
    </html>
    )
  }
}
module.exports= AppLayout;