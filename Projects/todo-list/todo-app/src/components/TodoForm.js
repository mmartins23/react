import { useState } from "react";

const TodoForm = (props) => {
    const [text, setText] = useState("");

    function handleChange(e) {
        // getting the value of an input
        let t = e.target.value;
        setText(t);
    }

    function addItem(e) {
        e.preventDefault();
        if (text) {
            // setItems([...items, text]);
            props.onAddItem(text);
            setText("");
        }
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} type="text" value={text} />
                <button onClick={addItem}>Add</button>

            </form>

        </div>
    );
}

export default TodoForm;