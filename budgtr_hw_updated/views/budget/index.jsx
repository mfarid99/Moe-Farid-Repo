const React = require('react')
const Layout = require('../Layout.jsx')




class Index extends React.Component {
    render(){
        const {budgets} = this.props

        const total = budgets.reduce((total, item) => {
            return total += Number(item.amount)
            },0)

            const changeColor = (total)=>{
                if (total>0){
                    return (
                        <h2 style={{color: 'green'}}>Your bank account total is: $
                        {total}
                    </h2>
                    )
                }else {
                    return (
                    <h2 style={{color: 'red'}}>Your bank account total is: $
                    {total} </h2>
                    )
                }
              }

        return (<Layout title="index">
            <h1> {changeColor(total)} </h1>


            <h1 id = "budget"> Budgtr </h1>
          
            <a href = {'/budget/new'}>Add new item</a>
            
          <table>
            {budgets.map((budget, index) => {
            
             
            

            

            console.log(total)




                return   <tr style = {{textAlign: "left"}}>  

                    <th>{budget.date} </th> 

                    <th style = {{textIndent: 25}}> <a href = {`/budget/${index}`}>{budget.name}</a> </th> 

                    <th style = {{textIndent: 25}}>{budget.from}</th>

                    <th style = {{textIndent: 25}}>{budget.amount}</th>


                    
                    
                </tr> 
                        


            })}


            
            </table>
        </Layout>)
    }
}
module.exports = Index