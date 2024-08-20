import ButtonComponent from "./ButtonComponent";
import "./XComponent.css";

export default function XComponent({ userName, isFollowing, nick, urlImg }) {
  
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
        <ButtonComponent isFollowing={isFollowing} />
      </section>
    </>
  );
}
