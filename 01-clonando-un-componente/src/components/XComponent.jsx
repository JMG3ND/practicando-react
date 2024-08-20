import { useState } from "react";
import "./XComponent.css";

export default function XComponent({ userName, isFollowing, nick, urlImg }) {
  const [isFollow, setIsFollow] = useState(isFollowing);
  const handleclick = () => setIsFollow(!isFollow);
  return (
    <>
      <section className="card">
        <div className="card__section-img-name">
          <img className="card__img" src={urlImg} alt={"foto de " + userName} />
          <div className="card__section-name">
            <span className="card__user-name">{userName}</span>
            <span className="card__nick">{nick}</span>
          </div>
        </div>
        <button
          onClick={handleclick}
          className={`card__follow card__follow--${
            isFollow ? "siguiendo" : "seguir"
          }`}
        >
          <span className="card__follow__dejar-hover">Dejar de seguir</span>
          <span className="card__follow__normal">
            {isFollow ? "Siguiendo" : "Seguir"}{" "}
          </span>
        </button>
      </section>
    </>
  );
}
