// Import hooks from react
import { useEffect, useState } from "react";
// Import components
import CardDetails from "../components/CardDetails";

const Home = () => {
    // create state for card data
    const [cards, setCards] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            // fetch card data from the backend
            const response = await fetch("/api/cards");
            // parse the json data into an array of objects
            const json = await response.json();

            // check if the data is ok
            if (response.ok) {
                setCards(json);
            }
        };

        fetchCards();
    }, []);

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Japanese</th>
                        <th>English</th>
                        <th>MemoLevel</th>
                    </tr>
                </thead>

                {/* only when there is card data: */}
                <tbody>{cards && cards.map((card) => <CardDetails key={card._id} card={card} />)}</tbody>
            </table>
        </div>
    );
};

export default Home;
