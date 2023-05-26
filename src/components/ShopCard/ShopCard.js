import Card from "react-bootstrap/Card";

export function ShopCard({ shop, getProducts, showProducts }) {
    return (
        <Card
            style={{ width: "18rem", cursor: "pointer" }}
            // onClick={() => getProducts(shop._id)}
            onClick={() => showProducts(shop._id)}
        >
            <div style={{ height: "150px", overflow: "hidden" }}>
                <Card.Img
                    variant="top"
                    src={shop.poster}
                    style={{ objectFit: "contain", height: "inherit" }}
                />
            </div>
            <Card.Body>
                <Card.Title>{shop.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}
