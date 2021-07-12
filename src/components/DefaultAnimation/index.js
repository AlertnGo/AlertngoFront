import "./style.scss";

function DefaultAnimation(props) {
  return (
    <section className="defaultAnimation">
      {/* <img className="animatedcar" src="https://i.pinimg.com/originals/d1/2a/6e/d12a6e88e902ffabd87c63791522cfd8.gif" alt="animatedcar" /> */}
      <svg className="frame" >
        <polyline
          className="path"
          points="0,280 100,270 400,280 500,270" 
        />
         <polyline
          className="path"
          points="400,230 500,220 600,210 700,220 1000,200" 
        />
      </svg>
    </section>
  );
}
export default DefaultAnimation;
