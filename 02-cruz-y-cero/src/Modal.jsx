import "./Modal.css";
export default function Modal({ onOkClick, winer }) {
  return (
    <>
      <div className="modal-container">
        <section className="modal">
          <h2 className="modal__title">El ganador es</h2>
          <span className="modal__winner">{winer}</span>
          <button className="modal__button_ok" onClick={onOkClick}>
            Cerrar
          </button>
        </section>
      </div>
    </>
  );
}
