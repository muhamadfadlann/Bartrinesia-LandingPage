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
          <div className="content">
            <h1>About Us</h1>
            <div className="line-1"></div>
            <p>
              PT Baru Transformasi Indonesia (Bartrinesia) merupakan perusahaan
              yang bergerak di bidang IT Solutions, dengan layanan utama berupa
              pengembangan aplikasi, penyediaan perangkat lunak dan perangkat
              keras, serta jasa konsultasi manajemen umum dan teknologi informasi.
              Berlokasi di pusat bisnis Jakarta Selatan, kami hadir sebagai mitra
              strategis bagi perusahaan dan institusi yang ingin mempercepat proses
              transformasi digital secara menyeluruh.
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

      <section className="partner-section">
          <h3>Partnered With:</h3>
          <div className="slider">
            <div className="slide-track">
              {partners.concat(partners).map((logo, index) => (
                <div className="slide" key={index}>
                  <img className="partner-logo" src={logo} alt="Partner Logo" />
                </div>  
              ))}
            </div>
          </div>
      </section>
    </>
  );
}
