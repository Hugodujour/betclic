import "../assets/styles/Pari.css";
import doigts from "../assets/images/doigts.png";

function Pari() {
  return (
    <div className="card-pari h-100">
      <div className="d-flex flex-column justify-content-between whitee">
        <div className="top-pari">0 selection</div>
        <div className="mid-pari flex-grow-1 d-flex align-items-center justify-content-center flex-column">
          <img src={doigts} className="mb-3" />
          <div className="title">Ajoute ton premier pari !</div>
          <p className="text-center pee">
            Tu n'as pas de sélection dans ton panier,
            <br />
            clique sur une cotre pour en ajouter.
          </p>
        </div>

        <div className="bot-pari">
          <div className="d-flex justify-content-between">
            <p>Gains possibles</p>
            <p>0,00 €</p>
          </div>
          <button className="btn btn-secondary w-100 grow">Parier</button>
        </div>
      </div>
    </div>
  );
}

export default Pari;
