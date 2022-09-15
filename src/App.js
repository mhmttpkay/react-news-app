import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardGroup, Card, Button, Col, ListGroupItem, ListGroup, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import './App.css';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get("https://newsapi.org/v2/top-headlines?country=tr&apiKey=bff784de966a4c399dd37f591fbb2db9");
      setNews(res.data.articles);

      console.log(res)
    }
    getArticles();
  }, []);

  return (
    <Container>
      <Row>
        <Header/>
      </Row>
      <div className='container card-container'>
        <div className='card-grid CardDeck'>
          <Row className='newMain'>
            {news.map((data) => {
              return (
                <Col md="4" className='newCard'>
                  <CardGroup size="sm">
                    <Card>
                      <Card.Img variant="top" src={data.urlToImage} />
                      <Card.Body>
                        <Card.Title className='newMainTitle'>{data.title.split('-')[0]}</Card.Title>
                        <Card.Text className='newTitle'>
                          {data.description}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Haber Kaynağı: {data.author}</ListGroupItem>
                        <ListGroupItem>Tarih: {data.publishedAt.split('T')[0]}</ListGroupItem>
                      </ListGroup>
                      <Card.Body>
                        <Button href={data.url} variant="secondary" target='_blank'>Devamı...</Button>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </Container>
  )
}


export default News;