import "./KnowAssortment.css";
import knowAssortment_img_1 from '../../images/knowAssortment_img1.svg'
import knowAssortment_img_2 from '../../images/knowAssortment_img2.svg'
import knowAssortment_img_3 from '../../images/knowAssortment_img3.svg'

function KnowAssortment() {
  return (
    <div className="knowAssortment">
      <p className="knowAssortment-title">Browse The Range</p>
      <p className="knowAssortment-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="knowAssortment-blocks">
        <div className="knowAssortment-block">
          <img className="knowAssortment-block-img" src={knowAssortment_img_1}></img>
          <p>Dining</p>
        </div>
        <div className="knowAssortment-block" >
          <img className="knowAssortment-block-img" src={knowAssortment_img_2}></img>
          <p>Living</p>
        </div>
        <div className="knowAssortment-block">
          <img className="knowAssortment-block-img" src={knowAssortment_img_3}></img>
          <p>Bedroom</p>
        </div>
      </div>
    </div>
  );
}

export default KnowAssortment;
