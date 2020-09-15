const React = require ("react")
const Layout = require('../components/Layout.jsx')

class Index extends React.Component {
    render(){
        const {info} = this.props
        return (<Layout title="index">
          
            <table>
                
            {info.map((budget, index) => {

                return <tr style = {{textAlign: "left"}}>  

                    <th>{budget.date} </th> 

                    <th style = {{textIndent: 25}}> <a href = {budget.name}>{budget.name}</a> </th> 

                    <th style = {{textIndent: 25}}>{budget.from}</th>

                    <th style = {{textIndent: 25}}>{budget.amount}</th>
                    
                    
                </tr> 

                

            })}

           
            
            </table>
        </Layout>)
    }
}
module.exports = Index