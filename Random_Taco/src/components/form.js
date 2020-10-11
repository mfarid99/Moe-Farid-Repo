import React from "react"

const Form = (props) => {

    

    const [search, setSearch] = React.useState({
        term: ""
    })

    const handleChange = (event) => {
        setSearch({...search, [event.target.name] :event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
        props.search(search.term)
      };

    return (
    <form onSubmit = {handleSubmit}>
        {/* <input type = "text" name = "term" value = {search.term} onChange = {handleChange} /> */}
        <input type = "submit" value = "Another Taco Please"/>

    </form>
    )
}





export default Form