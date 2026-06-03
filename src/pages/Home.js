import React, { useEffect, useState } from "react";
import "./Home.css";
import homepage from "../images/homepage.jpg";
import babelmap from "../images/babelmap.png";

const NEWS_API_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://www.cnnindonesia.com/nasional/rss";

const cleanDescription = (description) => {
  return description.replace(/<[^>]*>/g, "").trim();
};

const Home = ({ handleNavigation }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);

        const data = await response.json();

        if (!response.ok) {
          setNews([]);
          return;
        }

        setNews(data.items || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
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
            <div className="map-section">
              <img className="babelmap" src={babelmap} alt="babelmap" />
            </div>
            <p>
              Provinsi Bangka Belitung merupakan salah satu daerah di Indonesia
              yang terkenal dengan keindahan alam dan kekayaan budayanya.
              Terletak di bagian timur Pulau Sumatera, provinsi ini terdiri dari
              dua pulau utama, yaitu Pulau Bangka dan Pulau Belitung, dengan ibu
              kotanya yaitu Pangkalpinang.
            </p>
            <div className="second-p-home">
              <p>
                Masing-masing pulaunya memiliki pesona tersendiri, mulai dari
                hamparan pantai berpasir putih, air laut yang jernih, hingga
                formasi batu granit yang khas. Keindahan alam tersebut
                menjadikan Bangka Belitung dikenal sebagai destinasi wisata yang
                indah dan menenangkan.
              </p>
              <p>
                Selain keindahan alamnya, Bangka Belitung juga dikenal dengan
                budaya dan tradisi lokal yang beragam. Keramahan masyarakat
                serta nilai budaya yang masih terjaga menjadikan provinsi ini
                memiliki daya tarik tersendiri dan mampu memberikan suasana yang
                hangat dan menarik untuk dinikmati.
              </p>
              <button
                className="continue-btn"
                onClick={() => handleNavigation("Place", true)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="home-news" className="home-news">
        <h1>News</h1>

        {loading ? (
          <p>Loading news...</p>
        ) : news.length > 0 ? (
          <div className="news-grid">
            {news.map((article, index) => (
              <div key={index} className="news-item">
                {article.enclosure?.link && (
                  <img
                    src={article.enclosure.link}
                    alt={article.title}
                    className="news-image"
                  />
                )}
                <h2>{article.title}</h2>
                <p>{cleanDescription(article.description)}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  Baca selengkapnya
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="news-empty">Berita sedang tidak tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
