import React from "react";
import "./Place.css";

import laskarpelangi from "../images/places/laskarpelangi.jpg";
import background from "../images/places/background.jpg";
import danaukaolin from "../images/places/danaukaolin.jpeg";
import pulauketawai from "../images/places/pulauketawai.jpg";
import tanjungpendam from "../images/places/tanjungpendam.jpg";
import leebong from "../images/places/pulauleebong.jpg";
import menumbing from "../images/places/menumbing.png";
import peramun from "../images/places/peramun.jpg";
import batuberlayar from "../images/places/batuberlayar.jpg";
import tanjungkelayang from "../images/places/tanjungkelayang.jpg";
import lengkuas from "../images/places/lengkuas.jpg";
import wismaranggam from "../images/places/wismaranggam.jpg";
import mercusuarkalian from "../images/places/mercusuarkalian.jpg";

const Place = ({ animatePlace }) => {
  return (
    <div className="place-content">
      <img className="background" src={background} alt="background" />
      <div className={animatePlace ? "page-transition" : ""}>

        <div className="place-title">
          <h1>Tempat Wisata Bangka Belitung</h1>
        </div>

        <div className="places-babel">

          <div className="beachesIslands">

            <div className="place-info">
              <h1>Pulau Ketawai</h1>
              <img src={pulauketawai} alt="Pulau Ketawai" />
              <p>
                Pulau Ketawai merupakan pulau kecil di Bangka Tengah yang memiliki
                suasana pantai alami. Laut biru dan pasir putihnya menjadikan tempat 
                ini nyaman untuk bersantai sambil menikmati suasana alam yang indah 
                dengan orang terdekat.
              </p>
            </div>

            <div className="place-info">
              <h1>Pulau Leebong</h1>
              <img src={leebong} alt="Pulau Leebong" />
              <p>
                Pulau Leebong adalah pulau kecil di pantai barat Belitung yang
                dipersiapkan khusus untuk wisata dan petualangan. Pulau ini
                menyediakan berbagai sarana olahraga air seperti kayak,
                standing kayak, jet ski, dan banana boat.
              </p>
            </div>

            <div className="place-info">
              <h1>Pulau Batu Berlayar</h1>
              <img src={batuberlayar} alt="Pulau Batu Berlayar" />
              <p>
                Pulau Batu Berlayar terkenal dengan batu granit raksasa yang
                menyerupai layar kapal. Tempat ini menjadi salah satu lokasi
                favorit wisatawan untuk island hopping maupun snorkeling.
              </p>
            </div>

            <div className="place-info">
              <h1>Pulau Lengkuas</h1>
              <img src={lengkuas} alt="Pulau Lengkuas" />
              <p>
                Pulau Lengkuas memiliki air laut yang jernih dan dangkal,
                sehingga cocok untuk snorkeling maupun belajar scuba diving.
                Pengunjung juga dapat menikmati pemandangan bawah laut yang
                indah.
              </p>
            </div>

            <div className="place-info">
              <h1>Pantai Tanjung Pendam</h1>
              <img src={tanjungpendam} alt="Pantai Tanjung Pendam" />
              <p>
                Pantai Tanjung Pendam terkenal sebagai tempat terbaik untuk
                menikmati sunset. Wisatawan dapat bersantai di tepi pantai
                sambil menikmati kuliner seafood khas Belitung.
              </p>
            </div>

            <div className="place-info">
              <h1>Pantai Tanjung Kelayang</h1>
              <img src={tanjungkelayang} alt="Pantai Tanjung Kelayang" />
              <p>
                Pantai Tanjung Kelayang memiliki garis pantai yang panjang dan
                ombak yang tenang. Tempat ini cocok untuk berenang,
                snorkeling, maupun menikmati suasana pantai tropis.
              </p>
            </div>

          </div>

          <div className="other-places">

            <div className="place-info">
              <h1>Mercusuar Kalian</h1>
              <img src={mercusuarkalian} alt="Mercusuar Kalian" />
              <p>
                Mercusuar Kalian merupakan bangunan peninggalan Belanda yang
                dibangun pada tahun 1862. Mercusuar ini berada di kawasan Pantai
                Tanjung Kalian, Muntok, Bangka Barat. Dari atas mercusuar,
                pengunjung dapat menikmati pemandangan laut lepas, pantai, dan
                pepohonan kelapa yang indah. Tempat ini juga memiliki nilai sejarah
                karena menjadi salah satu penanda jalur pelayaran penting pada masa
                kolonial.
              </p>
            </div>

            <div className="place-info">
              <h1>Replika SD Laskar Pelangi</h1>
              <img src={laskarpelangi} alt="Replika SD Laskar Pelangi" />
              <p>
                Replika SD Laskar Pelangi terinspirasi dari novel karya Andrea
                Hirata yang terkenal hingga mancanegara. Tempat ini menjadi simbol
                semangat pendidikan anak-anak Belitung dan sering dikunjungi wisatawan
                yang ingin mengenang cerita dalam film maupun novel Laskar Pelangi.
                Pengunjung dapat melihat replika sekolah tradisional serta menikmati
                suasana khas Belitung Timur yang sederhana dan penuh nilai budaya.
              </p>
            </div>

            <div className="place-info">
              <h1>Wisma Ranggam</h1>
              <img src={wismaranggam} alt="Wisma Ranggam" />
              <p>
                Wisma Ranggam merupakan bangunan bersejarah yang berada di Kota
                Muntok, Bangka Barat. Tempat ini pernah digunakan sebagai lokasi
                pengasingan para tokoh penting Indonesia seperti Bung Karno dan Bung
                Hatta pada tahun 1949. Hingga kini, Wisma Ranggam menjadi saksi
                perjuangan kemerdekaan Indonesia dan sering dikunjungi wisatawan untuk
                mempelajari sejarah bangsa.
              </p>
            </div>

            <div className="place-info">
              <h1>Bukit Peramun</h1>
              <img src={peramun} alt="Bukit Peramun" />
              <p>
                Bukit Peramun merupakan kawasan wisata alam yang terkenal dengan hutan
                hijau dan udara yang sejuk. Tempat ini memiliki jalur trekking yang
                menarik serta berbagai flora dan fauna khas Belitung. Dari puncak
                bukit, wisatawan dapat menikmati panorama alam yang indah dan suasana
                yang tenang, cocok untuk melepas penat dan menikmati keindahan alam.
              </p>
            </div>

            <div className="place-info">
              <h1>Danau Kaolin</h1>
              <img src={danaukaolin} alt="Danau Kaolin" />
              <p>
                Danau Kaolin terbentuk dari bekas area pertambangan kaolin yang
                kemudian terisi air hingga membentuk danau berwarna biru toska.
                Perpaduan warna air yang cerah dengan tanah putih di sekitarnya
                menciptakan pemandangan yang unik dan instagrammable. Tempat ini
                menjadi salah satu destinasi favorit wisatawan untuk berfoto dan
                menikmati panorama alam yang berbeda dari pantai pada umumnya.
              </p>
            </div>

            <div className="place-info">
              <h1>Persanggahan Menumbing</h1>
              <img src={menumbing} alt="Menumbing" />
              <p>
                Persanggrahan Menumbing merupakan bangunan bersejarah yang berada di
                Bukit Menumbing, Bangka Barat. Tempat ini pernah digunakan sebagai
                lokasi pengasingan Presiden Soekarno dan Mohammad Hatta pada masa
                penjajahan Belanda. Selain memiliki nilai sejarah yang tinggi,
                Persanggrahan Menumbing juga menawarkan udara yang sejuk serta
                pemandangan alam perbukitan yang indah, sehingga menjadi salah satu
                destinasi wisata sejarah yang menarik di Bangka Belitung.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Place;