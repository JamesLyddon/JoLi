import React from "react";
import { StyledPhotoGrid } from "./styles/PhotoGrid.styled";

export default function PhotGrid() {
  return (
    <StyledPhotoGrid>
      <div className="card stacked">
        <img
          class="card__image"
          src={require("../assets/images/headshots/headshot1.webp")}
          alt="Portrait 1"
        />
        <div className="card__content">
          <h3 className="card__title">Andy Palmer</h3>
          <p className="card__description">Actor</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          class="card__image"
          src={require("../assets/images/headshots/headshot2.webp")}
          alt="Portrait 2"
        />
        <div className="card__content">
          <h3 className="card__title">Dr Matt Taylor </h3>
          <p className="card__description">Scientist</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot3.webp")}
          alt="Portrait 3"
        />
        <div className="card__content">
          <h3 className="card__title">Scroobius Pip</h3>
          <p className="card__description">Musician</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot4.webp")}
          alt="Portrait 4"
        />
        <div className="card__content">
          <h3 className="card__title">Jay</h3>
          <p className="card__description">Musician</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot5.webp")}
          alt="Portrait 5"
        />
        <div className="card__content">
          <h3 className="card__title">Sam Wale</h3>
          <p className="card__description">Musician</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot6.webp")}
          alt="Portrait 6"
        />
        <div className="card__content">
          <h3 className="card__title">Carlie Norris</h3>
          <p className="card__description">Actor</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot7.webp")}
          alt="Portrait 7"
        />
        <div className="card__content">
          <h3 className="card__title">Andrew Palmer</h3>
          <p className="card__description">Actor</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot8.webp")}
          alt="Portrait 8"
        />
        <div className="card__content">
          <h3 className="card__title">Forest Morgan</h3>
          <p className="card__description">Actor</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot9.webp")}
          alt="Portrait 9"
        />
        <div className="card__content">
          <h3 className="card__title">Joe Boyd</h3>
          <p className="card__description"></p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot10.webp")}
          alt="Portrait 10"
        />
        <div className="card__content">
          <h3 className="card__title">Sarah</h3>
          <p className="card__description">Model</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot11.webp")}
          alt="Portrait 11"
        />
        <div className="card__content">
          <h3 className="card__title">Ben Scott</h3>
          <p className="card__description"></p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot12.webp")}
          alt="Portrait 12"
        />
        <div className="card__content">
          <h3 className="card__title">Jazz</h3>
          <p className="card__description">Actor</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot13.webp")}
          alt="Portrait 13"
        />
        <div className="card__content">
          <h3 className="card__title">Andy</h3>
          <p className="card__description"></p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot14.webp")}
          alt="Portrait 14"
        />
        <div className="card__content">
          <h3 className="card__title">Charlie</h3>
          <p className="card__description">Musician</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot15.webp")}
          alt="Portrait 15"
        />
        <div className="card__content">
          <h3 className="card__title">Rob</h3>
          <p className="card__description"></p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot16.webp")}
          alt="Portrait 16"
        />
        <div className="card__content">
          <h3 className="card__title">Gary Turner</h3>
          <p className="card__description">Actor</p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot17.webp")}
          alt="Portrait 17"
        />
        <div className="card__content">
          <h3 className="card__title">Marc</h3>
          <p className="card__description"></p>
        </div>
      </div>
      <div className="card stacked">
        <img
          src={require("../assets/images/headshots/headshot18.webp")}
          alt="Portrait 18"
        />
        <div className="card__content">
          <h3 className="card__title">Ant Vip</h3>
          <p className="card__description">Model</p>
        </div>
      </div>
    </StyledPhotoGrid>
  );
}
