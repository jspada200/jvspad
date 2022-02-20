import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function BlogPostLink({
  id,
  author,
  created_at,
  image,
  body,
  title,
}) {
  return (
    <Card className="bg-dark text-white">
      <div className={styles.card}>
        {image ? (
          <>
            <Card.Img src={image} alt={title} />
            {console.log("img", image)}
            <Card.ImgOverlay>
              <Card.Title>
                <h2>
                  <Container className={styles.darkenbg}>
                    <Row>
                      <Col>{title}</Col>
                      <Col>
                        {author} - {created_at}
                      </Col>
                    </Row>
                  </Container>
                </h2>
              </Card.Title>
            </Card.ImgOverlay>
            <Card.Text>{body}</Card.Text>
          </>
        ) : (
          <>
            <Card.Title>
              <h2>
                <Container className={styles.darkenbg}>
                  <Row>
                    <Col>{title}</Col>
                    <Col>
                      {author} - {created_at}
                    </Col>
                  </Row>
                </Container>
              </h2>
            </Card.Title>
            <Card.Text>{body}</Card.Text>
          </>
        )}
      </div>
    </Card>
  );

  // return <div>{title}</div>;
}
