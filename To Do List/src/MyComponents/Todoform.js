import React, {useState , useEffect , useRef} from 'react'

function Todoform(props) {
    const [input, setInput]=useState(props.edit ? props.edit.value : '');
    //above statement helps in keeping the text entered before while clicking on edit
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    });

    // handle change function 
    const handleChange = e =>{
        setInput(e.target.value);
    }
    //handleSubmit is a function
    const handleSubmit = e =>{
        e.preventDefault(e);

        props.onSubmit({
            //produces a random number out of 10000 for the list of item to do so that they do not clash with each other id
            id: Math.floor(Math.random()*10000), 
            text: input
        });
        setInput('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>
            <input 
            type="text"
            placeholder="Update your Todo"
            value={input} name="text"
            className="todo-input edit" 
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
            </>
            ): 
            (
            <>
            <input 
            type="text"
            placeholder="Add a Todo"
            value={input} name="text"
            className="todo-input" 
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button">Add Todo</button>
            </>
            )
            }
            
        </form>
    )
}

export default Todoform;
