export default function Journey() {
  const journeys = [
  {
    year: "Mei 2025 - Sekarang",
    role: "Fullstack Web Developer",
    company: "Pemerintah Provinsi Sulawesi Selatan (Kontrak)",
    description: "Merancang aplikasi Fullstack (Laravel) untuk digitalisasi dokumen konstruksi pemerintah. Selain itu, memimpin pengembangan antarmuka (UI/UX) menggunakan Next.js & Tailwind CSS untuk aplikasi SIGAP (Pengawasan Alur Rujukan) dan SmartOffice Pemprov Sulsel.",
  },
  {
    year: "Des 2024 - Mei 2025",
    role: "Front-end Web Developer",
    company: "CV. Code Sign Indo Tech",
    description: "Mengubah prototipe menjadi aplikasi web fungsional menggunakan Vue.js, Nuxt.js, dan Tailwind CSS. Terlibat dalam pengembangan aplikasi pajak daerah, klinik gigi, database alumni, ujian CBT/OSCE, dan aplikasi mobile klinik berbasis Flutter.",
  },
  {
    year: "Nov 2023 - Sekarang",
    role: "Front-end Developer",
    company: "Freelance",
    description: "Membangun sistem informasi dan manajemen kompleks untuk berbagai klien. Beberapa proyek utama meliputi ERP Produksi Ajaba Industri, Manajemen Operasional Lundra Catering, PWA Manajemen Gym, dan Aplikasi Informasi Desa terpadu.",
  },
  {
    year: "Agu 2024 - Nov 2024",
    role: "Front-end Web Developer (Magang)",
    company: "PT. Visdat Teknik Utama",
    description: "Mengembangkan antarmuka aplikasi billing TV kabel menggunakan Laravel. Membangun dashboard responsif untuk berbagai *role* pengguna seperti admin, operator, teknisi, kolektor, dan pelanggan.",
  },
  {
    year: "Jul 2022 - Des 2024",
    role: "Desain Grafis",
    company: "Cafe Fifteen Coffee & Eatery",
    description: "Membuat materi promosi visual cetak dan digital (poster, feed/story Instagram) untuk mendukung kampanye pemasaran kafe.",
  },
  {
    year: "2021 - 2025",
    role: "S1 Rekayasa Perangkat Lunak",
    company: "Universitas Dipa Makassar",
    description: "Lulus dengan IPK 3.84. Memperdalam ilmu tentang arsitektur sistem, algoritma, dan pengembangan perangkat lunak modern.",
  },
];

  return (
    <section className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-24 xl:px-52 gap-12 bg-page">
      <div className="flex items-center space-x-3 text-4xl md:text-[50px]">
        <h1 className="font-semibold text-foreground">My</h1>
        <span className="font-reenie font-normal text-kreafi-2">Journey</span>
      </div>

      <div className="relative border-l border-gray/50 ml-4 md:ml-6 space-y-12">
        {journeys.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Dot Timeline */}
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-kreafi-1 border-4 border-page"></div>
            
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-kreafi-2/60">{item.year}</span>
              <h3 className="text-2xl font-semibold text-kreafi-2">{item.role}</h3>
              <h4 className="text-lg font-medium text-kreafi-2/80">{item.company}</h4>
              <p className="text-base font-extralight text-foreground/80 max-w-[600px] leading-relaxed pt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}