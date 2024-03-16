import { useEffect, useState } from "react";

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
        <div className="home">
            <h2>Home</h2>
            <div className="cards">
                {/* only when there is card data: */}
                {cards && cards.map((card) => <p key={card._id}>{card.content_1}</p>)}
            </div>
        </div>
    );
};

export default Home;
