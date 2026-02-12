import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="content">
          <h1>About Us</h1>
          <div className="line-1"></div>
          <p>
            Bartrinesia hadir bertujuan meningkatkan pemanfaatan teknologi untuk
            indonesia yang lebih maju. Fokus kami pada Inisiatif TI, Inovasi,
            keamanan, dan aksesibilitas yang berkelanjutan.
          </p>
        </div>
      </div>
      <div
        className="hero-right"
        style={{
          backgroundImage: "url(img/company.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </section>
  );
}
