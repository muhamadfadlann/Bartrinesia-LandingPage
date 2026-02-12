import "./Service.css";

export default function Service() {
  return (
    <section className="service" id="service">
      <div className="service-wrapper">
        <h2>Our Services</h2>
        <div className="line"></div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon orange">🏙️</div>
            <div>
              <h3>Smart City Solutions</h3>
              <p>
                Solusi kota pintar menyediakan teknologi pintar yang komprehensif.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon green">🖥️</div>
            <div>
              <h3>Infrastructure Solutions</h3>
              <p>
                Infrastruktur TI yang kuat dan andal untuk mendorong bisnis.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon pink">📊</div>
            <div>
              <h3>Smart Office Solutions</h3>
              <p>
                Solusi ruang kerja cerdas untuk meningkatkan produktivitas.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon cyan">🧭</div>
            <div>
              <h3>IT Strategic</h3>
              <p>Master Plan, Road Map</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon yellow">☀️</div>
            <div>
              <h3>IT Governance</h3>
              <p>Planning, Design, Development & Support</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon blue">📅</div>
            <div>
              <h3>IT Analytical</h3>
              <p>Data Scientist</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
