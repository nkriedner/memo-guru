import { useCardsContext } from "../hooks/useCardsContext";

const CardDetails = ({ card, index }) => {
    const { dispatch } = useCardsContext();

    const handleClick = async () => {
        const response = await fetch("/api/cards/" + card._id, {
            method: "DELETE",
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_CARD", payload: json });
        }
    };

    return (
        <tr>
            <td>{card.content_1}</td>
            <td>{card.content_2}</td>
            <td>{card.memo_level}</td>
            <td className="delete" title="Delete Card" onClick={handleClick}>
                X
            </td>
        </tr>
    );
};

export default CardDetails;
