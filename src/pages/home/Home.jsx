import React from "react";
import "./Home.css";
import AppBar from "../../components/appbar/AppBar";
import ImgCardGame from "../../components/imgcard/ImgCardGames";
import ImgCardHistories from "../../components/imgcard/ImgCardHistories";
import ImgUrl from '../../assets/img/bombillo.jpeg';
import CardMedia from "@mui/material/CardMedia";

function Home() {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div id="section">
        <div id="sectionLeft">
          <div style={{ margin: "10px" }}>
            <ImgCardGame />
          </div>
          <div style={{ margin: "10px" }}>
            <ImgCardHistories />
          </div>
        </div>
        <div id="sectionCenter">
          <CardMedia
            component="img"
            height="100%"
            image={ImgUrl}
            title="control games"
          />
        </div>
        <div id="sectionRigth">derecha</div>
      </div>
      <div id="footer">pie de pagina</div>
    </div>
  );
}

export default Home;
