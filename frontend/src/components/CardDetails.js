const CardDetails = ({ card, index }) => {
    return (
        <tr>
            <td>{card.content_1}</td>
            <td>{card.content_2}</td>
            <td>{card.memo_level}</td>
        </tr>
    );
};

export default CardDetails;