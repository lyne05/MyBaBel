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
            Tradisi ini juga dikenal dengan istilah sembahyang kubur, tradisi
            ini diselenggarakan setiap 5 April. Biasanya, peziarah datang ke
            makam tersebut dengan membawa sesaji seperti Sam-sang, sam kuo, dan
            chai coi. Pada makam leluhur masing-masing akan diterangi oleh lilin
            dan diletakkan uang kertas palsu yang biasa disebut kim chin.
          </p>
        </div>
        <div className="budaya-info">
          <h1>Perang Ketupat</h1>
          <img src={perangKetupat} alt="Perang Ketupat" />
          <p>
            Salah satu tradisi dari Kepulauan Bangka Belitung yang tak kalah
            menarik ialah perang ketupat atau ruah tempilang. Tradisi ini
            diselenggarakan setiap masuk Tahun Baru Islam atau 1 Muharram. Para
            penduduk setempat akan berbondong-bondong menuju ke pantai. Saat
            meriam dinyalakan, para penduduk dapat saling melempar ketupat ke
            setiap orang yang mereka temui. Kamu dapat melihat tradisi ini di
            desa-desa sekitar Pantai Tempilang, Bangka Barat. Tak sedikit banyak
            perantau yang pulang dan wisatawan yang berdatangan untuk menonton
            tradisi ini.
          </p>
        </div>

        <div className="budaya-info">
          <h1>Baripat Baregong</h1>
          <img src={baripatBaregong} alt="Baripat Baregong" />
          <p>
            Tradisi ini merupakan permainan adu ketangkasan dengan menggunakan
            rotan sebagai senjata. Pemenang pertandingan ini ialah peserta yang
            terkena pukulan rotan paling sedikit. Ini adalah salah satu dari
            banyak tradisi menarik yang menjadi daya tarik tersendiri bagi para
            wisatawan di Kepulauan Bangka Belitung.
          </p>
        </div>

        <div className="budaya-info">
          <h1>Peh Cun</h1>
          <img src={pehCun} alt="Peh Cun" />
          <p>
            Tradisi Peh Cun ini diadakan untuk memperingati Dinasti Couw 340
            sebelum masehi. Tradisi ini biasanya diselenggarakan di sepanjang
            pantai di Kepulauan Bangka Belitung. Terdapat dua ritual dalam
            tradisi ini, yaitu membuang Nyuk Cun secara simbolis ke laut dan
            mandi air laut di terik matahari. Tradisi ini mampu menjadi salah
            satu andalan pemerintah setempat untuk menarik para wisatawan, baik
            dari dalam negeri maupun luar negeri. Tradisi Peh Cun ini
            diperingati pada tanggal 5 bulan 5 pada kalender Tionghoa.
          </p>
        </div>
        <div className="budaya-info">
          <h1>Buang Jung</h1>
          <img src={buangJung} alt="Buang Jung" />
          <p>
            Upacara Buang Jung merupakan upacara adat yang mana hasil bumi akan
            dilarungkan ke laut. Tradisi ini dilakukan sebagai bentuk rasa
            syukur para masyarakat di sana. Kamu dapat menyaksikan tradisi ini
            di daerah seperti Desa Kumbung, Kecamatan Pongok di Kabupaten Bangka
            Selatan. Hasil bumi yang akan dilarungkan akan ditaruh di atas
            perahu kecil. Masyarakat setempat dilarang untuk melakukan kegiatan
            di laut selama tujuh hari setelah tradisi ini berlangsung. Bagi
            masyarakat setempat, tradisi ini merupakan daya tarik tersendiri
            bagi wisatawan lokal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Culture;
