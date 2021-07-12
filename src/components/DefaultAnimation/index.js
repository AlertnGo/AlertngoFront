import "./style.scss";

function DefaultAnimation(props) {
  return (
    <section className="defaultAnimation">
      {/* <img className="animatedcar" src="https://i.pinimg.com/originals/d1/2a/6e/d12a6e88e902ffabd87c63791522cfd8.gif" alt="animatedcar" /> */}
      <svg className="frame">
       
        <polyline
          className="car"
          points="50,260  200,256 180,230 150,230 140,200 100,200 90,230 30,239"
        />
        <circle className="car" cx="70" cy="260" r="10" />
        <circle className="car" cx="160" cy="260" r="10" />

        <polyline className="path" points="10,280 100,270 400,280 500,270" />
        <polyline
          className="path"
          points="400,260 500,250 600,240 700,230 800,250"
        />
      </svg>
    </section>
  );
}
export default DefaultAnimation;
