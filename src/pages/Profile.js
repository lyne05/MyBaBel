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
          Website ini dibuat dengan tujuan untuk memperkenalkan 
          Provinsi Bangka Belitung sebagai salah satu daerah di Indonesia 
          yang memiliki keindahan alam dan kekayaan budaya yang luar biasa. 
          Melalui berbagai informasi yang disajikan, website ini menampilkan 
          pesona pantai berpasir putih, pulau-pulau eksotis, serta budaya lokal 
          yang unik dan menarik untuk dijelajahi. Selain menjadi sarana 
          informasi dan edukasi, website ini juga diharapkan dapat membantu 
          mempromosikan pariwisata Bangka Belitung agar semakin dikenal dan 
          menarik minat masyarakat untuk mengenal serta mengunjungi keindahan alam 
          dan budayanya secara lebih dekat.
        </p1>
      </div>

      <div className="profile-title">
        <h1>Our Profile</h1>
      </div>

      <div className="members">
        <div className="team-member">
          <img src={Airin} alt="Airin" className="team-body" />
          <h4>Airin Frantrishia Lay</h4>

          <p className="member-quote">
            "Budaya lokal Bangka Belitung memiliki keunikan yang
            menarik untuk dipelajari dan dilestarikan."
          </p>

          <a href="https://www.instagram.com/airinnfl/">
            <img className="ins" src={ins} alt="instagram logo" />
          </a>
        </div>

        <div className="team-member">
          <img src={Aulia} alt="Aulia" className="team-body" />
          <h4>Aulia Widian Putri</h4>

          <p className="member-quote">
            "Informasi yang sederhana dapat membantu memperkenalkan
            wisata dan budaya Indonesia."
          </p>

          <a href="https://www.instagram.com/auliawidiaan/">
            <img className="ins" src={ins} alt="instagram logo" />
          </a>
        </div>

        <div className="team-member">
          <img src={Evelyne} alt="Evelyne" className="team-body" />
          <h4>Evelyne Natalie</h4>

          <p className="member-quote">
            "Keindahan alam Bangka Belitung layak dikenal 
            lebih luas oleh masyarakat Indonesia."
          </p>

          <a href="https://www.instagram.com/lyne_nat/">
            <img className="ins" src={ins} alt="instagram logo" />
          </a>
        </div>

        <div className="team-member">
          <img src={Davis} alt="Davis" className="team-body" />
          <h4>Davis Ariel</h4>

          <p className="member-quote">
            "Media digital membuat informasi budaya dan daerah lebih 
            menarik dan mudah dipahami."
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