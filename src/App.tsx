import Card from "./components/card";
import listings from "./data/data";

function App() {
    return (
        <>
            <h1>Resorts Lite</h1>

            <Card
                id={listings[0].id}
                pic={listings[0].pic}
                country={listings[0].country}
                location={listings[0].location}
                rating={listings[0].rating}
                price={listings[0].price}
            />
        </>
    );
}

export default App;