const React = require("react")
const Layout = require('../Layout.jsx')
class Edit extends React.Component {
    render(){
        const {budget, index} = this.props
        return (<Layout title="Edit" color="red" cheese="gouda">
            <form action={`/budget/${index}?_method=PUT`} method="post">
                <input type="text" name="title" value={budget.date}/>
                <input type="text" name="message" value={budget.name}/>
                <input type="submit" value="update"/>
            </form>
        </Layout>)
    }
}
module.exports = Edit;
