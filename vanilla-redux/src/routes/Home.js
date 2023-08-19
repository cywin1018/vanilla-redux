import {useState} from "react";

const Home = () => {
    const [text,setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault()
        console.log(text)
    }
    return (<>
        <h1>ToDo</h1>
        <form onSubmit={onSubmit}>
            <input type={"text"} value={text} onChange={onChange}/>
            <button>Add</button>
        </form>
        <ul></ul>
    </>);
}
 export default Home;