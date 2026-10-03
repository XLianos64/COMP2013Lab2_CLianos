import Card from "./card";
import listings from "../data/data";

export default function Container() {
    return (
        <div>
            <Card
                id={listings[0].id}
                pic={listings[0].pic}
                country={listings[0].country}
                location={listings[0].location}
                rating={listings[0].rating}
                price={listings[0].price}
            />
        </div>
    );
}