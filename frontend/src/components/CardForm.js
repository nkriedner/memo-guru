import { useState } from "react";
import { useCardsContext } from "../hooks/useCardsContext";

const CardForm = () => {
    const { dispatch } = useCardsContext();

    const [content_1, setContent_1] = useState("");
    const [content_2, setContent_2] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        console.log("handleSubmit running...");
        e.preventDefault();

        const newCard = { content_1, content_2 };
        console.log("content_1:", content_1);
        console.log("content_2:", content_2);
        console.log("newCard:", newCard);

        const response = await fetch("/api/cards", {
            method: "POST",
            body: JSON.stringify(newCard),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        console.log("json:", json);

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            // reset the input and error values
            setContent_1("");
            setContent_2("");
            setError(null);
            setEmptyFields([]);

            console.log("new card added...");

            dispatch({ type: "CREATE_CARD", payload: json });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create new card</h2>

            <div className="input-wrapper">
                <label htmlFor="content_1">Front Side: </label>
                <input
                    id="content_1"
                    type="text"
                    onChange={(e) => setContent_1(e.target.value)}
                    name="content_1"
                    value={content_1}
                    className={emptyFields.includes("Front Side") ? "error-border" : ""}
                />
            </div>

            <div className="input-wrapper">
                <label htmlFor="content_2">Back Side: </label>
                <input
                    id="content_2"
                    type="text"
                    onChange={(e) => setContent_2(e.target.value)}
                    name="content_2"
                    value={content_2}
                    className={emptyFields.includes("Back Side") ? "error-border" : ""}
                />
            </div>

            <button>Create Card</button>

            {/* If there is an error -> show it */}
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default CardForm;
