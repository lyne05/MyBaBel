import React, { useEffect, useState } from "react";
import "./Home.css";
import homepage from "../images/homepage.jpg";
import babelmap from "../images/babelmap.png";

const Home = ({ handleNavigation }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching news...");
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=Indonesia&language=id&sortBy=publishedAt&pageSize=12&apiKey=8997b0007e41474da2b9c80c75753e63"
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
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleScroll = () => {
    const pageInfo = document.getElementById("page-info");
    const pageInfoTop = pageInfo.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: pageInfoTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div id="Home" className="home-container">
        <div className="home-content">
          <img className="homepage" src={homepage} alt="homepage" />

          <h1>WELCOME</h1>

          <p>
            Temukan keindahan Bangka Belitung
            <br />
            Pesona pantai tropis, budaya khas Melayu,
            <br />
            dan pengalaman wisata terbaik.
          </p>

          <button onClick={handleScroll}>See More</button>
        </div>
      </div>

      <div id="page-info" className="page-info-section">
        <h1 className="info-title">Explore Bangka Belitung</h1>

        <div className="page-info">
          <div className="text-home-content">
              <p>
                Provinsi Bangka Belitung merupakan salah satu daerah di Indonesia
                yang terkenal dengan keindahan alam dan kekayaan budayanya.
                Terletak di bagian timur Pulau Sumatera, provinsi ini terdiri dari
                dua pulau utama, yaitu Pulau Bangka dan Pulau Belitung, dengan
                ibu kotanya yaitu Pangkalpinang. 
              </p>
            <div className="2nd-p-home">
              <p>
                Masing-masing pulaunya memiliki pesona tersendiri, mulai dari 
                hamparan pantai berpasir putih, air laut yang jernih, hingga 
                formasi batu granit yang khas. Keindahan alam tersebut menjadikan 
                Bangka Belitung dikenal sebagai destinasi wisata yang indah dan 
                menenangkan. <br></br>
              </p>
              <p>
                Selain keindahan alamnya, Bangka Belitung juga dikenal dengan
                budaya dan tradisi lokal yang beragam. Keramahan masyarakat serta
                nilai budaya yang masih terjaga menjadikan provinsi ini memiliki
                daya tarik tersendiri dan mampu memberikan suasana yang hangat
                dan menarik untuk dinikmati.
              </p>
            </div>
          </div>

          <div className="map-section">
            <img className="babelmap" src={babelmap} alt="babelmap" />

            <button
              className="continue-btn"
              onClick={() => handleNavigation("Place", true)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <div id="home-news" className="home-news">
        <h1>News</h1>

        {error && <p className="news-message">{error}</p>}

        {loading ? (
          <p>Loading news...</p>
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
                  Baca selengkapnya
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>No news found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
