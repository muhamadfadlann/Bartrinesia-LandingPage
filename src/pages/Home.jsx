import "./Home.css";
import "./PartnerSlider.css";

export default function Home() {

  const partners = [
    "/img/Ditjenpas.png",
    "/img/kemenimipas.png",
    "/img/Kemenpan.png",
  ];

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="clip-edge" />

          <div className="content">
            <div className="logo-area">
              <img
                src="img/logo-bartrinesia.png"
                alt="Bartrinesia Logo"
                className="logo-img"
              />
            </div>

            <h1 className="title-company">COMPANY</h1>
            <h1 className="title-profile">PROFILE</h1>
            <p className="subtitle">
              PT BARU TRANSFORMASI INDONESIA
            </p>
          </div>
        </div>

        <div className="hero-right">
          <img
            className="hero-right-img"
            src="img/company.jpg"
            alt="Smart IT Infrastructure"
          />

          <div className="triangle-overlay">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <polygon points="0,0 220,0 0,300" fill="rgba(27,116,192,0.55)" />
              <polygon points="0,0 120,0 0,180" fill="rgba(10,60,120,0.45)" />
            </svg>
          </div>

          <div className="tri-blue-sm" />
          <div className="tri-orange" />

          <div className="tagline-bar">
            Transforming Business Through Smart IT Solutions
          </div>
        </div>
      </section>

      <section className="partner-section">
        <h3>Partnered With:</h3>

        <div className="slider">
          <div className="slide-track">
            {partners.concat(partners).map((logo, index) => (
              <div className="slide" key={index}>
                <img
                  className="partner-logo"
                  src={logo}
                  alt="Partner Logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
