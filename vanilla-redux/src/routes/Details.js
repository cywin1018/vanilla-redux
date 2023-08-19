import {useSelector} from "react-redux";
import {Link,useParams,useNavigate} from "react-router-dom";


const Details = () => {
    const navigate = useNavigate();
    const param = useParams();
    const currentState = useSelector((state)=>state);

    const onClickBackBtn = () => navigate(-1);
    const onClickHomeBtn = () => navigate("/");
    const todo = currentState.find((item)=>item.id === parseInt(param.id));
    const others = currentState.filter((todo)=>todo.id !== parseInt(param.id));

    return (
        <>
            <h1>Detail of {todo.text}</h1>

            <h2>Others</h2>
            <ul>
                {others.map((todo) => (
                    <Link key={todo.id} to={`/${todo.id}`}>
                        <li>{todo.text}</li>
                    </Link>
                ))}
            </ul>
            <button onClick={onClickBackBtn}> Go Back</button>
            <button onClick={onClickHomeBtn}> Go Home</button>
        </>
    );
}

export default Details