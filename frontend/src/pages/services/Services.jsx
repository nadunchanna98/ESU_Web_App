import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MegaMenu from '../../components/megaMenu/MegaMenu';
import './services.css';
import Bicycle from '../../images/Bicycle.png';
import DrawingIcon from '../../images/drawing.png';
import LaptopIcon from '../../images/laptop.png';
import CanteenIcon from '../../images/canteen.png';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div>
        <MegaMenu />
      </div>
      <div className="services custom__container">
        <ServiceItem
          icon={<img src={Bicycle} alt="Bicycle" />}
          title="BICYCLES"
          description="Explore the convenience of our bicycle rental service, tailored for engineering students to commute around campus swiftly and sustainably"
        />
        <ServiceItem
          icon={<img src={DrawingIcon} alt="Drawing Icon" />}
          title="DRAWING TOOL BOXES"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra ac nulla sed facilisis."
        />
        <ServiceItem
          icon={<img src={LaptopIcon} alt="Laptop Icon" />}
          title="LAPTOPS"
          description="Phasellus tincidunt eu turpis nec semper. Vestibulum consequat turpis justo, quis laoreet purus interdum ac."
        />
        <ServiceItem
          icon={<img src={CanteenIcon} alt="Canteen Icon" />}
          title="CANTEEN"
          description="Explore the delicious food options available at our campus canteen, serving a variety of meals and snacks to keep you energized throughout the day."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title, description }) => (
  <div className="service-item">
    <div className="circle2">{icon}</div>
    <h1 className="h1">{title}</h1>
    <p>{description}</p>
    <div className="button">
      <button>Read More</button>
    </div>
  </div>
);

export default Services;