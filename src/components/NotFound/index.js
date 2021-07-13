import "./style.scss";

function NotFound(props) {
  return (
    <section className="NotFound">
      <p className="redflag">
        Malheureusement, le numéro de plaque d'immatriculation que vous avez
        recherché n'est pas enregistré sur AlernGo. Nous sommes vraiment désolés
        pour ce dérangement.
      </p>
      <p className="redflag">
        Vous pouvez chercher un notre ndp quand vous voulez.  
      </p>

     
    </section>
  );
}
export default NotFound;
