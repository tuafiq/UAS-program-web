import { Card, Button } from "react-boostrap";

function NewsCard({ tittle, description, image, url }) {
  return (
    <Card className="h-100 shadow-sm news-card">
      <Card.img
        variant="top"
        src={image || "https:via.placeholder.com/300x200"}
        style={{ Height: "250px", ObjectFit: "cover" }}
      />
      <Card.body>
        <Card.title className="fw-bold text-truncate">{title}</Card.title>
        <Card.text className="text-muted" style={{ fontSize: "0.9rem" }}>
          {description}
        </Card.text>
        {url && (
          <Button variant="primary" size="sm" href={url} target="-blank">
            Baca selengkapnya
          </Button>
        )}
      </Card.body>
    </Card>
  );
}

export default NewsCard; // ini wajib ada
