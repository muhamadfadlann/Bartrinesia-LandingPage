import "./About.css";
import { Target, Eye } from "@phosphor-icons/react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* ================= TENTANG KAMI ================= */}
        <div className="about-detail">
          <h2>ABOUT US</h2>
          <p>
            PT Baru Transformasi Indonesia (Bartrinesia) is a company engaged in
            IT Solutions, with main services in application development,
            software and hardware provision, as well as general management and
            information technology consulting services.
          </p>

          <p>
            Located in the business center of South Jakarta, we serve as a
            strategic partner for companies and institutions seeking to
            accelerate their comprehensive digital transformation process.
          </p>

          <p>
            By bringing a spirit of innovation and efficiency, Bartrinesia
            combining the latest technology with a deep understanding of client
            needs. Our team consists of experienced experts in system
            development, IT infrastructure design, as well as consultative
            companion to improve managerial capabilities technology-based.
          </p>
        </div>

        {/* ================= VISI & MISI ================= */}
        <div className="vm-section">
          <div className="vm-left">
            <div className="image-grid">
              <img src="img/working-programmer.jpg" alt="Cable Optic 1" />
              <img src="img/cable-optic (2).jpg" alt="Cable Optic 2" />
            </div>
          </div>

          <div className="vm-right">
            <div className="vision">
              <h2 className="vm-title">
                <Eye size={26} weight="bold" className="vm-icon" />
                OUR VISION
              </h2>

              <p>
                Become a major partner in digital transformation in Indonesia
                through innovative, appropriate information technology solutions
                and sustainable.
              </p>
            </div>

            <div className="mission">
              <h2 className="vm-title">
                <Target size={26} weight="bold" className="vm-icon" />
                OUR MISSION
              </h2>

              <ul>
                <li>
                  Providing reliable, adaptive and IT services and solutions
                  according to industry needs.
                </li>
                <li>
                  Building long-term trust-based partnerships, quality, and real
                  results.
                </li>
                <li>
                  Increasing client competitiveness through the use of
                  technology the right target.
                </li>
                <li>
                  Developing internal competencies that are in line with global
                  technology developments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
