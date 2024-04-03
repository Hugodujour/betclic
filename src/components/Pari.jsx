import "../assets/styles/Pari.css";

function Pari() {
  return (
    <div className="card-pari h-100">
      <div className="d-flex flex-column justify-content-between">
        <div className="top-pari">0 selection</div>
        <div className="mid-pari flex-grow-1 d-flex align-items-center justify-content-center">
          <div>Ajoute ton premier pari !</div>
        </div>

        <div className="bot-pari">
          <div className="d-flex justify-content-between">
            <p>Gains possibles</p>
            <p>0,00 €</p>
          </div>
          <button className="btn btn-secondary w-100">Parier</button>
        </div>
      </div>
    </div>
  );
}

export default Pari;
