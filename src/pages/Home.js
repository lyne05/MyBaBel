import React, { useEffect, useState } from "react";
import "./Home.css";
import homepage from "../images/homepage.jpg";
import babelmap from "../images/babelmap.png";

const Home = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching news...");
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=8997b0007e41474da2b9c80c75753e63"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response:", data);
        if (data.articles) {
          setNews(data.articles);
        } else {
          throw new Error("No articles found in response");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
      }
    };

    fetchNews();
  }, []);

  const handleScroll = () => {
    document.getElementById("page-info").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="Home" className="home-container">
        <div className="home-content">
          <img className="homepage" src={homepage} alt="homepage" />
          <h1>WELCOME</h1>
          <p>
            Selamat datang di Bangka Belitung <br />
            Jelajahi pesona alam serta keunikan budaya yang menakjubkan <br />
            Lanjutkan perjalananmu untuk menemukan keindahan yang memukau di
            pulau ini <br />
          </p>
          <button onClick={handleScroll}>See More</button>
        </div>
      </div>
      <div id="page-info" className="page-info">
        <div className="text-home-content">
          <p>
            Bangka Belitung, sebuah provinsi yang terletak di timur Sumatera,
            dikenal akan keindahan alamnya yang memukau. Dua pulau utamanya,
            Bangka dan Belitung, menawarkan pesona alam yang beragam, mulai dari
            pantai-pantai indah dengan pasir putih dan air laut yang jernih
            hingga bebatuan granit yang unik. <br />
          </p>
          <div className="2nd-p-home">
            <p>
              Pulau Bangka dan Pulau Belitung merupakan dua pulau yang berbeda,
              namun kedua pulau ini berada dalam satu provinsi yang sama yaitu
              Provinsi Bangka Belitung dengan ibukotanya yaitu Pangkalpinang.{" "}
              <br />
              <br /> Pulau Belitung terkenal dengan batu granitnya yang
              membentuk formasi menarik di pantainya, sementara pulau Bangka
              juga mempesona dengan pantai-pantai seperti Pantai Matras dan
              Pantai Parai Tenggiri. <br />
              <br /> Selain itu, kekayaan bawah laut Bangka Belitung juga
              menjadi daya tarik tersendiri bagi para penyelam. Di samping
              keindahan alamnya, Bangka Belitung juga kaya akan budaya dan
              kuliner, mencerminkan keragaman etnis dan agama masyarakatnya yang
              beragam.
              <br />
            </p>
          </div>
        </div>
        <img className="babelmap" src={babelmap} alt="babelmap" />
      </div>
      <div id="home-news" className="home-news">
        <h1>News</h1>
        {error ? (
          <p>{error}</p>
        ) : news.length > 0 ? (
          <div className="news-grid">
            {news.map((article, index) => (
              <div key={index} className="news-item">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="news-image"
                  />
                )}
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
