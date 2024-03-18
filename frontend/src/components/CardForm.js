import { useState } from "react";
import { useCardsContext } from "../hooks/useCardsContext";

const CardForm = () => {
    const { dispatch } = useCardsContext();

    const [content_1, setContent_1] = useState("");
    const [content_2, setContent_2] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents the default form submission behavior

        const newCard = { content_1, content_2 };

        // POST the new card
        const response = await fetch("/api/cards", {
            method: "POST",
            body: JSON.stringify(newCard),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        // if there is a problem with the response:
        if (!response.ok) {
            setError(json.error); // set the error received from the response
            setEmptyFields(json.emptyFields); // define the emptyFields of the form
        }
        if (response.ok) {
            // reset the input and error values
            setContent_1("");
            setContent_2("");
            setError(null);
            setEmptyFields([]);

            console.log("New card added:", json);

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
                    value={content_1}
                    // if the input field is empty -> style it with a red border
                    className={emptyFields.includes("Front Side") ? "error-border" : ""}
                />
            </div>

            <div className="input-wrapper">
                <label htmlFor="content_2">Back Side: </label>
                <input
                    id="content_2"
                    type="text"
                    onChange={(e) => setContent_2(e.target.value)}
                    value={content_2}
                    // if the input field is empty -> style it with a red border
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
