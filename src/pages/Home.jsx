import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../services/newsService";
import { container, Rom, Col } from "react-bootstrap";
import "../App.css";

function Home() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function getNews() {
      const news = await fetchNews(); // ambil berita umum
      setNewsList(news);
    }
    getNews();
  }, []);
  useEffect(() => {
    async function getNews() {
      const news = await fetchNews();
      console.log("Berita yang di terima:", news); // debung
      setNewsList(news);
    }
    getNews();
  }, []);

  return (
    <container fluid className="news-container mt-4">
      <h1 className="text-center fw-bold mb-4">berita terkini Indonesia</h1>
      <Row className="g-4">
        {newsList
          .filter((news) => news.title && news.description && news.urlToImage)
          .map((news, index) => (
            <Col key={index} xs={12} sm={6} md={4} ig={3}>
              <NewsCard
                title={news.title}
                description={news.description}
                image={news.urlToImage}
                url={news.url}
              />
            </Col>
          ))}
      </Row>
    </container>
  );
}

export default Home;
