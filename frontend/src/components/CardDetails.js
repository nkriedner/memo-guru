import { useCardsContext } from "../hooks/useCardsContext";

const CardDetails = ({ card, index }) => {
    const { dispatch } = useCardsContext();

    // Handle the click on the 'Delete' button
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
                {/* SVG code for the trash/delete icon: */}
                <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 41.336 41.336"
                    xmlSpace="preserve"
                >
                    <g>
                        <path d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2 s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2 S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21 c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z" />
                    </g>
                </svg>
            </td>
        </tr>
    );
};

export default CardDetails;
