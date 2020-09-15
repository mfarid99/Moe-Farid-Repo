const React = require ("react")
const Layout = require('../components/Layout.jsx')

class Index extends React.Component {
    render(){
        const {info} = this.props
        return (<Layout title="index">
          
            <table>
                
            {info.map((budget, index) => {
                return <tr>  
                    <th>{budget.date} </th> <th>{budget.name}</th>
                    <th>{budget.from}</th>
                    <th>{budget.amount}</th>
                    
                    
                    </tr> 

                

            })}

           
            
            </table>
        </Layout>)
    }
}
module.exports = Index