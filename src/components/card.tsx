
import type { ResortListing } from "../data/data";

export default function Card({
    pic,
    country,
    location,
    rating,
    price,
}: ResortListing) {
    return (
        <div>
            <img src={pic} alt={location} />
            <h2>{country}</h2>
            <h3>{location}</h3>
            <p>★ {rating}</p>
            <p>${price}</p>
        </div>
    );
}