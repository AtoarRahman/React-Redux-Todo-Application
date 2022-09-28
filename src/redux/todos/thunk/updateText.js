import { textUpdated } from "../actions";

const updateText = (todoId, text) => {
    return async (dispatch) => {
        const response = await fetch(`https://lwsjsonserver.herokuapp.com/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                text: text,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(textUpdated(todo.id, todo.text));
    };
};

export default updateText;
