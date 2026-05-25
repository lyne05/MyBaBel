import React from "react";
import "./Culture.css";
import chengBeng from "../images/culture/chengBeng.jpg";
import culturebg from "../images/culture/culturebg.jpg";
import buangJung from "../images/culture/buang jung.jpg";
import baripatBaregong from "../images/culture/baripat baregong.png";
import perangKetupat from "../images/culture/perang ketupat.jpg";
import pehCun from "../images/culture/peh cun.jpeg";

const Culture = () => {
  return (
    <div className="content-content">
      <img className="background" src={culturebg} alt="Culture Background" />
      <div className="city-title">
        <h1>Budaya Bangka Belitung</h1>
      </div>

      <div className="budaya-card">
        <div className="budaya-info">
          <h1>Cheng Beng</h1>
          <img src={chengBeng} alt="Cheng Beng" />
          <p>
            Cheng Beng merupakan tradisi ziarah kubur masyarakat Tionghoa yang
            dilaksanakan setiap tanggal 5 April. Dalam tradisi ini, keluarga akan
            membersihkan makam leluhur, berdoa, serta membawa berbagai persembahan
            seperti makanan, buah-buahan, dan lilin. Selain menjadi bentuk penghormatan
            kepada leluhur, Cheng Beng juga menjadi momen berkumpul keluarga dan
            menjaga nilai budaya yang diwariskan secara turun-temurun di Bangka
            Belitung.
          </p>
        </div>

        <div className="budaya-info">
          <h1>Perang Ketupat</h1>
          <img src={perangKetupat} alt="Perang Ketupat" />
          <p>
            Perang Ketupat merupakan tradisi khas masyarakat Tempilang, Bangka Barat,
            yang dilaksanakan setiap Tahun Baru Islam atau 1 Muharram. Tradisi ini
            dilakukan sebagai bentuk rasa syukur sekaligus doa keselamatan bagi
            masyarakat pesisir. Dalam acara ini, warga saling melempar ketupat setelah
            ritual adat selesai dilaksanakan. Suasana meriah dan unik dari tradisi ini
            menjadikannya salah satu daya tarik budaya yang sering menarik perhatian
            wisatawan lokal maupun luar daerah.
          </p>
        </div>

        <div className="budaya-info">
          <h1>Baripat Baregong</h1>
          <img src={baripatBaregong} alt="Baripat Baregong" />
          <p>
            Baripat Baregong adalah tradisi adu ketangkasan masyarakat Bangka
            Belitung yang menggunakan rotan sebagai alat utama. Tradisi ini biasanya
            dimainkan oleh dua peserta yang saling berhadapan untuk menunjukkan
            keberanian, ketangkasan, dan sportivitas. Meski terlihat menegangkan,
            permainan ini tetap dilakukan dengan aturan tertentu dan menjadi bagian
            penting dari warisan budaya daerah yang masih dilestarikan hingga saat
            ini.
          </p>
        </div>

        <div className="budaya-info">
          <h1>Peh Cun</h1>
          <img src={pehCun} alt="Peh Cun" />
          <p>
            Tradisi Peh Cun merupakan perayaan budaya Tionghoa yang diperingati pada
            tanggal 5 bulan 5 kalender Tionghoa. Tradisi ini identik dengan berbagai
            kegiatan seperti mandi di laut, perlombaan perahu, serta ritual membuang
            bacang atau Nyuk Cun ke laut sebagai simbol penghormatan dan harapan akan
            keselamatan. Di Bangka Belitung, Peh Cun menjadi salah satu tradisi budaya
            yang mampu menarik wisatawan karena suasananya yang meriah dan penuh nilai
            budaya.
          </p>
        </div>

        <div className="budaya-info">
          <h1>Buang Jung</h1>
          <img src={buangJung} alt="Buang Jung" />
          <p>
            Buang Jung merupakan upacara adat masyarakat pesisir Bangka Belitung yang
            dilakukan dengan melarungkan replika perahu kecil berisi hasil bumi ke
            laut. Tradisi ini menjadi simbol rasa syukur masyarakat atas hasil laut
            dan harapan akan keselamatan para nelayan. Setelah upacara berlangsung,
            masyarakat biasanya tidak melaut selama beberapa hari sebagai bentuk
            penghormatan terhadap tradisi yang telah diwariskan secara turun-temurun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Culture;
