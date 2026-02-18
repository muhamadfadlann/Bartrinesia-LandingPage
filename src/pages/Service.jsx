import "./Service.css";
import {
  Code,
  Strategy,
  HardDrives,
  ShieldCheck,
  Medal,
  Sliders,
  Timer,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Code,
    color: "orange",
    // number: "01",
    title: "Pengembangan Aplikasi & Software Kustom",
    desc: "Pembuatan sistem dan aplikasi yang disesuaikan secara penuh dengan kebutuhan serta proses bisnis klien—dari tahap konsep hingga peluncuran.",
  },
  {
    icon: Strategy,
    color: "blue",
    // number: "02",
    title: "Konsultasi Manajemen & Teknologi Informasi",
    desc: "Pendampingan strategis berbasis data dalam pengambilan keputusan teknologi yang tepat sasaran dan terukur untuk pertumbuhan bisnis.",
  },
  {
    icon: HardDrives,
    color: "orange",
    // number: "03",
    title: "Penyediaan Perangkat IT & Infrastruktur",
    desc: "Pengadaan komputer, server, jaringan, dan perlengkapan teknologi terpadu yang mendukung operasional bisnis yang andal.",
  },
  {
    icon: ShieldCheck,
    color: "blue",
    // number: "04",
    title: "Distribusi & Penerbitan Perangkat Lunak",
    desc: "Legalisasi dan penyediaan piranti lunak komersial serta profesional dengan lisensi resmi yang terjamin keabsahannya.",
  },
];

const whyItems = [
  {
    icon: Medal,
    color: "orange",
    title: "Berpengalaman & Profesional",
    desc: "Tim kami terdiri dari para ahli bersertifikat dengan rekam jejak yang telah teruji di berbagai industri.",
  },
  {
    icon: Sliders,
    color: "blue",
    title: "Solusi yang Terpersonalisasi",
    desc: "Setiap solusi kami rancang khusus sesuai kebutuhan dan karakteristik unik bisnis Anda.",
  },
  {
    icon: Timer,
    color: "orange",
    title: "Fokus Kualitas & Ketepatan Waktu",
    desc: "Kami berkomitmen menghadirkan hasil berkualitas tinggi dengan tenggat waktu yang selalu terpenuhi.",
  },
];

export default function Service() {
  return (
    <>
      <section className="service" id="services">
        <div className="service-wrapper">
          <h2>Layanan Kami</h2>
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
          <div className="section-label">Keunggulan Kami</div>
          <h2>Kenapa Memilih Kami?</h2>
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
