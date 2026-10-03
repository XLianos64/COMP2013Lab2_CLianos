import Card from "./card";
import listings from "../data/data";

export default function Container() {
    return (
        <div className="container">
                {listings.map((listing) => (
                    <Card
                        id={listing.id}
                        pic={listing.pic}
                        country={listing.country}
                        location={listing.location}
                        rating={listing.rating}
                        price={listing.price}
                    />
                ))}
        </div>
    );
}