import "./Service.css";
import {
  Code,
  Strategy,
  HardDrives,
  ShieldCheck,
  Medal,
  DevicesIcon,
  Sliders,
  Timer,
} from "@phosphor-icons/react";

const services = [
  {
    icon: DevicesIcon,
    color: "orange",
    title: "Custom Application & Software Development",
    desc: "Development of systems and applications fully tailored to client needs and business processes—from initial concept to final deployment.",
  },
  {
    icon: Strategy,
    color: "blue",
    title: "IT & Management Consulting",
    desc: "Strategic, data-driven consulting to support informed technology decisions and sustainable business growth.",
  },
  {
    icon: HardDrives,
    color: "orange",
    title: "IT Hardware & Infrastructure Provision",
    desc: "Supply of computers, servers, networking systems, and integrated technology infrastructure to ensure reliable business operations.",
  },
  {
    icon: ShieldCheck,
    color: "blue",
    title: "Software Distribution & Licensing",
    desc: "Authorized distribution and licensing of commercial and professional software with guaranteed legal compliance.",
  },
];


const whyItems = [
  {
    icon: Medal,
    color: "orange",
    title: "Experienced & Professional",
    desc: "Our team consists of certified experts with a proven track record across various industries.",
  },
  {
    icon: Sliders,
    color: "blue",
    title: "Tailored Solutions",
    desc: "Every solution we deliver is carefully designed to meet the unique needs and characteristics of your business.",
  },
  {
    icon: Timer,
    color: "orange",
    title: "Quality & Timely Delivery",
    desc: "We are committed to delivering high-quality results while consistently meeting agreed deadlines.",
  },
];


export default function Service() {
  return (
    <>
      <section className="service" id="services">
        <div className="service-wrapper">
          <h2>Our Services</h2>
          <div className="line"></div>

          <div className="service-list">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div className="service-box" key={item.number}>
                  <div className="service-number-bg">{item.number}</div>
                  <div className={`service-accent ${item.color}`}></div>

                  <div className="service-left">
                    <div className={`icon-wrap ${item.color}`}>
                      <Icon size={26} weight="bold" />
                    </div>

                    <div className="service-content">
                      {/* <span className="service-tag">{`Layanan ${item.number}`}</span> */}
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="why">
        <div className="why-wrapper">
          <div className="section-label">Our advantages</div>
          <h2>Why Choose Us?</h2>
          <div className="line"></div>

          <div className="why-grid">
            {whyItems.map((item) => {
              const Icon = item.icon;

              return (
                <div className="why-card" key={item.title}>
                  <div className={`why-icon-wrap ${item.color}`}>
                    <Icon size={28} weight="bold" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
