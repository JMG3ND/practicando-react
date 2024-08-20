import { useState } from "react";
import "./ButtonComponent.css";

export default function ButtonComponent({ isFollowing }) {
  const [isFollow, setIsFollow] = useState(isFollowing);
  const handleclick = () => setIsFollow(!isFollow);
  return (
    <>
      <button
        onClick={handleclick}
        className={`follow follow--${
          isFollow ? "siguiendo" : "seguir"
        }`}
      >
        <span className="follow__dejar-hover">Dejar de seguir</span>
        <span className="follow__normal">
          {isFollow ? "Siguiendo" : "Seguir"}
        </span>
      </button>
    </>
  );
}
