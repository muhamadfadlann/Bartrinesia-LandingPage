import { useState } from "react";
import "./About.css";

export default function About() {
  const slides = [
    {
      title: "Let's grow your business together",
      subtitle: "Keahlian dan Pengalaman",
      description:
        "Tim kami terdiri dari profesional berpengalaman di berbagai bidang teknologi yang siap membantu Anda mencapai tujuan bisnis Anda.",
    },
    {
      title: "Your IT solution partner",
      subtitle: "Fokus pada Restorasi Teknologi dan Inovasi",
      description:
        "Rekonesia mendorong inovasi di dalam industri IT dan menciptakan solusi teknologi inovatif.",
    },
    {
      title: "Best Digital Transformation Company",
      subtitle: "Menjaga Keamanan dan Privasi",
      description:
        "Kami mengimplementasikan teknologi canggih untuk melindungi data pelanggan dari ancaman keamanan.",
    },
    {
      title: "Komitmen terhadap Pelanggan",
      subtitle: "Service Excellence",
      description:
        "Kami mengutamakan kepuasan pelanggan dengan layanan yang responsif dan profesional.",
    },
    {
      title: "Kontribusi pada Kemajuan Bangsa",
      subtitle: "Komitmen untuk Indonesia",
      description:
        "Kami berkontribusi melalui inovasi teknologi dan program sosial yang berkelanjutan.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="about" id="choose">
      <div className="about-container">
        <h2>Why Choose Us</h2>

        <div className="about-wrapper">
          {/* IMAGE */}
          <div className="about-image">
            <img src="img/company (2).jpg" alt="About Us" />
          </div>

          {/* SLIDER CARD */}
          <div className="about-slider">
            <div className="about-card">
              <h3>{slides[current].title}</h3>
              <h4>{slides[current].subtitle}</h4>
              <p>{slides[current].description}</p>

              <div className="slider-nav">
                <button onClick={prevSlide}>❮</button>
                <button onClick={nextSlide}>❯</button>
              </div>
            </div>

            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={current === index ? "dot active" : "dot"}
                  onClick={() => setCurrent(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
