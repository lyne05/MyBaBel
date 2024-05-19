import React, { useEffect } from "react";
import "./Place.css";
import laskarpelangi from "../images/places/laskarpelangi.jpg";
import background from "../images/places/background.jpg";
import danaukaolin from "../images/places/danaukaolin.jpeg";
import pulauketawai from "../images/places/pulauketawai.jpg";
import tanjungpendam from "../images/places/tanjungpendam.jpg";
import leebong from "../images/places/pulauleebong.jpg";
import babelbhay from "../images/places/babelbhay.png";
import peramun from "../images/places/peramun.jpg";
import batuberlayar from "../images/places/batuberlayar.jpg";
import tanjungkelayang from "../images/places/tanjungkelayang.jpg";
import lengkuas from "../images/places/lengkuas.jpg";
import wismaranggam from "../images/places/wismaranggam.jpg";
import mercusuarkalian from "../images/places/mercusuarkalian.jpg";

const Place = () => {
  return (
    <div className="place-content">
      <img className="background" src={background} />
      <div className="place-title">
        <h1>Tempat Wisata Bangka Belitung</h1>
      </div>

      <div className="places-babel">
        <div className="beachesIslands">
          <div className="place-info">
            <h1>Pulau Ketawai</h1>
            <img src={pulauketawai} alt="Pulau Ketawai" />
            <p>
              Pulau Ketawai merupakan pulau tak berpenghuni yang ada di
              Kabupaten Bangka Tengah, Bangka Belitung. Suasana pantainya yang
              masih sepi dan alami menjadikan Pulau Ketawai sebagai destinasi
              yang nyaman untuk didatangi bersama keluarga maupun teman.
            </p>
          </div>
          <div className="place-info">
            <h1>Pulau Leebong</h1>
            <img src={leebong} alt="Pulau Leebong" />
            <p>
              Pulau Leebong (Lelebong) adalah pulau kecil yang terletak di
              pantai Barat pulau Belitung. Sebuah pulau yang dipersiapkan khusus
              untuk tujuan wisata dan petualangan dengan lokasi yang tidak
              biasa. Pulau Leebong ini berada di pantai Barat kurang lebih 70km
              di Selatan pulau Lengkuas. Pulau ini dilengkapi dengan berbagai
              sarana olahraga air seperti kayak, standing kayak, jet skil,
              banana boat, dll.
            </p>
          </div>
          <div className="place-info">
            <h1>Pulau Batu Berlayar</h1>
            <img src={batuberlayar} alt="Pulau Batu Berlayar" />
            <p>
              Pulau Batu Berlayar adalah susunan batu-batu granit raksasa dimana
              terdapat 2 batu besar yang berdiri vertikal sehingga berbentuk
              seperti layar dengan pulau pasir putih sebagai kapalnya. Susunan
              batu seperti itulah yang membuat penduduk Belitung menamakan
              tempat ini Batu Berlayar. Pulau kecil seukuran lapangan tenis ini
              anda salah satu lokasi yang bagus untuk wisatawan melakukan tour
              island atau menyelam.
            </p>
          </div>
          <div className="place-info">
            <h1>Pulau Lengkuas</h1>
            <img src={lengkuas} alt="Pulau Lengkuas" />
            <p>
              Pulau Lengkuas memiliki hamparan laut yang bening dengan kedalaman
              laut sekitar dua hingga tiga meter. Pengunjung dengan mudah dapat
              melihat karang dan ikan hias yang tengah berenang. Laut Pulau
              Lengkuas merupakan perairan dangkal sehingga sesuai untuk penyelam
              pemula yang ingin menyelam atau belajar scuba diving.
            </p>
          </div>
          <div className="place-info">
            <h1>Pantai Tanjung Pendam </h1>
            <img src={tanjungpendam} alt="Pantai Tanjung Pendam" />
            <p>
              Pantai Tanjung Pendam cocok untuk didatangi bagi kamu pecinta
              sunset. Selain itu, pada pagi harinya wisatawan dapat
              berjalan-jalan santai menyusuri pinggiran pantai yang biasanya
              lebih luas karena air laut yang surut. Wisatawan dapat
              berjalan-jalan dan bersantai di restoran yang berderet di pantai.
              Terdapat restoran yang menjual seafood dan makanan khas Belitung.
            </p>
          </div>
          <div className="place-info">
            <h1> Pantai Tanjung Kelayang</h1>
            <img src={tanjungkelayang} alt="Pantai Tanjung Kelayang" />
            <p>
              Pantai Tanjung Kelayang ini sangat terkenal dengan garis pantainya
              yang panjang serta perairan yang tenang. Wisatawan dapat berenang,
              snorkeling, kayak dan olahraga lainnya. Selain itu, wisatawan juga
              dapat menikmati hidangan berupa masakan lokal dan minuman dingin
              di tepi pantai.
            </p>
          </div>
        </div>
        <div className="other-places">
          <div className="place-info">
            <h1>Mercusuar Kalian</h1>
            <img src={mercusuarkalian} alt="Mercusuar Kalian" />
            <p>
              Mercusuar Pantai Tanjung Kalian Mercusuar yang berdiri tegar dan
              kokoh di Tanjung Kalian adalah sebuah sarana penyelamat lalu
              lintas kapal yang di bangun oleh Belanda pada tahun 1862. Pantai
              ini terletak kurang lebih sekitar 9 km dari Kota Muntok, dari kota
              Mentok ke ibukota Pangkalpinang bandara 138 KM. Setiap kali
              dinyalakan membutuhkan 20 liter solar, yang membuatnya bisa
              bertahan 12 jam, dari dalam kita bisa melihat ketinggian kita,
              dengan menyaksikan pohon-pohon kelapa yang jauh dibawah. Di pantai
              Tanjung Kalian juga terlihat sisa bangkai kapal bekas Perang Dunia
              II.
            </p>
          </div>
          <div className="place-info">
            <h1>Replika SD Laskar Pelangi</h1>
            <img src={laskarpelangi} alt="Replika SD Laskar Pelangi" />
            <p>
              Bangunan replika SD Laskar Pelangi diangkat dari novel Laskar
              Pelangi karya Andrea Hirata. Untuk masuk ke lokasi sekolah Laskar
              Pelangi pengunjung dikenakan jasa parkir Rp 5.000 per orang. Di
              sana, Anda bisa berswafoto serta menyelami kehidupan masyarakat
              Belitung Timur tempo dulu.
            </p>
          </div>
          <div className="place-info">
            <h1>Wisma Ranggam</h1>
            <img src={wismaranggam} alt="Wisma Ranggam" />
            <p>
              Wisma Ranggam di Muntok adalah sebuah bangunan bersejarah penting
              yang digunakan sebagai tempat pengasingan para pemimpin Indonesia,
              termasuk Bung Karno dan Bung Hatta, oleh pemerintah kolonial
              Belanda pada tahun 1949. Wisma Ranggam menawarkan wawasan berharga
              tentang perjuangan kemerdekaan Indonesia dan sebagai pengingat
              akan semangat juang dan pengorbanan para pahlawan bangsa.
            </p>
          </div>
          <div className="place-info">
            <h1>Bukit Peramun</h1>
            <img src={peramun} alt="Bukit Peramun" />
            <p>
              Letak Bukit Peramun yang strategis, berada di tengah - tengah
              kawasan segitiga emas pengembangan wisata Kabupaten Belitung yaitu
              Tanjung Pandan, Bandara Hanandjoedin, Tanjung Kelayang, menjadikan
              Bukit Peramun sebagai kawasan strategis pengembangan wisata alam.
              Variasi wisata yang disuguhkan di Bukit Peramun, serta keunikan
              lokasinya memiliki ciri khas tersendiri sehingga tidak
              membosankan.
            </p>
          </div>
          <div className="place-info">
            <h1>Danau Kaolin </h1>
            <img src={danaukaolin} alt="Danau Kaolin" />
            <p>
              Danau Kaolin seringkali disebut dengan istilah Camoi Aik Biru
              (kolam biru). Danau ini terbentuk dari hasil galian tamban yang
              berbentuk cekungan, lalu lambat laun terisi air. Danau ini
              terlihat cantik dengan airnya yang berwarna biru toska. Warna
              birunya ditimbulkan dari sisa mineral pertambangan dan kaolin.
              Pada bagian pinggir danau terlihat seperti bukit, tanah berwarna
              putih.
            </p>
          </div>
          <div className="place-info">
            <h1>Babel Bhay Park</h1>
            <img src={babelbhay} alt="Babel Bhay Park" />
            <p>
              Babel Bhay Park merupakan tempat wisata yang instagrammable. Babel
              Bhay Park ini terdapat trek foto danau untuk jalan santai atau
              joging. Trek disepanjang juga terdapat tempat berburu foto yang
              hanya untuk sekedar swafoto atau bersantai dengan keluarga dan
              bermain dan belajar anak. Selain itu, juga terdapat kafe yang
              tersedia didekat lintasan joging, jika lelah atau hanya sekedar
              kumpul dengan keluarga dan kerabat bisa beristirahat dicafe ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
