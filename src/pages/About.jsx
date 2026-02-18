import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* ================= TENTANG KAMI ================= */}
        <div className="about-detail">
          <h2>TENTANG KAMI</h2>
          <p>
            PT Baru Transformasi Indonesia (Bartrinesia) merupakan perusahaan
            yang bergerak di bidang IT Solutions, dengan layanan utama berupa
            pengembangan aplikasi, penyediaan perangkat lunak dan perangkat
            keras, serta jasa konsultasi manajemen umum dan teknologi informasi.
          </p>

          <p>
            Berlokasi di pusat bisnis Jakarta Selatan, kami hadir sebagai mitra
            strategis bagi perusahaan dan institusi yang ingin mempercepat
            proses transformasi digital secara menyeluruh.
          </p>

          <p>
            Dengan membawa semangat inovasi dan efisiensi, Bartrinesia
            menggabungkan teknologi terkini dengan pemahaman mendalam terhadap
            kebutuhan klien. Tim kami terdiri dari tenaga ahli berpengalaman
            dalam pengembangan sistem, perancangan infrastruktur TI, serta
            pendampingan konsultatif untuk meningkatkan kapabilitas manajerial
            berbasis teknologi.
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
              <h2>VISI KAMI</h2>
              <p>
                Menjadi mitra utama transformasi digital di Indonesia melalui
                solusi teknologi informasi yang inovatif, tepat guna, dan
                berkelanjutan.
              </p>
            </div>

            <div className="mission">
              <h2>MISI KAMI</h2>
              <ul>
                <li>
                  Menyediakan layanan dan solusi TI yang handal, adaptif, dan
                  sesuai kebutuhan industri.
                </li>
                <li>
                  Membangun kemitraan jangka panjang berbasis kepercayaan,
                  kualitas, dan hasil nyata.
                </li>
                <li>
                  Meningkatkan daya saing klien melalui pemanfaatan teknologi
                  yang tepat sasaran.
                </li>
                <li>
                  Mengembangkan kompetensi internal yang selaras dengan
                  perkembangan teknologi global.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
