// Import hooks from react
// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useCardsContext } from "../hooks/useCardsContext";
// Import components
import CardDetails from "../components/CardDetails";
import CardForm from "../components/CardForm";

const Home = () => {
    // create state for card data
    // const [cards, setCards] = useState(null);
    const { cards, dispatch } = useCardsContext();

    useEffect(() => {
        const fetchCards = async () => {
            // fetch card data from the backend
            const response = await fetch("/api/cards");
            // parse the json data into an array of objects
            const json = await response.json();

            // check if the data is ok
            if (response.ok) {
                // setCards(json);
                dispatch({ type: "SET_CARDS", payload: json });
            }
        };

        fetchCards();
    }, []);

    return (
        <>
            <section>
                <CardForm />
            </section>
            <section>
                <div className="table-wrapper">
                    <table>
                        <caption>List Of All Cards</caption>
                        <thead>
                            <tr>
                                <th>Front Side</th>
                                <th>Back Side</th>
                                <th>MemoLevel</th>
                            </tr>
                        </thead>

                        {/* only when there is card data: */}
                        <tbody>{cards && cards.map((card) => <CardDetails key={card._id} card={card} />)}</tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Home;
