import React from "react";
import "./Profile.css";
import Airin from "../images/team/Airin.jpg";
import Aulia from "../images/team/Aulia.jpg";
import Davis from "../images/team/Davis.jpg";
import Evelyne from "../images/team/Evelyne.jpg";
import background from "../images/team/background.jpg";
import logo from "../images/logo.png";
import ins from "../images/decoration/Instagram_logo.png";

const Profile = () => {
  return (
    <div className="profile-content">
      <img className="background" src={background} />
      <div className="team-title">
        <h1>About Us</h1>
      </div>

      <div className="team-wording">
        <img className="team-wording-img" src={logo} />
        <p1>
          {""}
          Kami adalah mahasiswa Informatika semester 2 yang memilih Provinsi
          Bangka Belitung sebagai tema dari project kami. Melalui website yang
          kami buat, kami bertujuan untuk mengenalkan provinsi ini kepada
          masyarakat luas. {""}
          Bangka Belitung adalah sebuah provinsi yang kaya akan keindahan alam
          yang memukau dan budaya yang unik. Dengan berbagai informasi yang kami
          sediakan, ingin membagikan keindahan alam dan keunikan budaya yang
          dimiliki Bangka Belitung sehingga membuat masyarakat tertarik untuk
          menjelajahi pesona alam yang dimiliki. <br /> <br />
          Kami percaya bahwa dengan memperkenalkan keindahan alam Bangka
          Belitung, seperti pantai berpasir putih yang eksotis, pulau-pulau
          kecil yang menawan, dan terumbu karang yang mempesona, dapat
          mengundang wisatawan untuk lebih mengenal dan menghargai kekayaan alam
          Indonesia. Dengan demikian, proyek ini tidak hanya menjadi sarana
          edukasi, tetapi juga sebagai kontribusi kami dalam mempromosikan
          pariwisata dan budaya Bangka Belitung agar lebih dikenal di Indonesia.
          {""}
          {""}
        </p1>
      </div>
      <div className="members">
        <div className="team-member">
          <img src={Airin} alt="Airin" className="team-body" />
          <h4>Airin Frantrishia Lay</h4>
          <p>
            {" "}
            "Di antara gemerlapnya laut Bangka, temukanlah ketenangan dalam diri
            untuk menghadapi badai kehidupan."{" "}
          </p>
          <a href="https://www.instagram.com/airinnfl/">
            <img className="ins" src={ins} alt="instagram logo" />
          </a>
        </div>
        <div className="team-member">
          <img src={Aulia} alt="Aulia" className="team-body" />
          <h4>Aulia Widian Putri</h4>
          <p>
            "Jangan biarkan angin badai merobek mimpi-mimpimu, biarkan mereka
            menari di atas ombak seperti kapal di Bangka."
          </p>
          <a href="https://www.instagram.com/auliawidiaan/">
            <img className="ins" src={ins} alt="instagram logo" />
          </a>
        </div>
        <div className="team-member">
          <img src={Evelyne} alt="Evelyne" className="team-body" />
          <h4>Evelyne Natalie</h4>
          <p>
            "Ketekunan adalah kunci untuk meraih bintang-bintang, seperti yang
            dilakukan oleh para pelaut di laut Bangka."
          </p>
          <a href="https://www.instagram.com/lyne_nat/">
            <img className="ins" src={ins} alt="instagram logo" />
          </a>
        </div>
        <div className="team-member">
          <img src={Davis} alt="Davis" className="team-body" />
          <h4>Davis Ariel</h4>
          <p>
            "Hamparan laut di Bangka mengajarkan kita untuk terus mengalir,
            meskipun dihadapkan pada rintangan."
          </p>
          <a href="https://www.instagram.com/davisariel7/">
            <img className="ins" src={ins} alt="instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
