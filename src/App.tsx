import React from 'react';
import { motion } from "motion/react";
import {
  CheckCircle2,
  Smartphone,
  UserCheck,
  ShieldCheck,
  Zap,
  Star,
  ChevronDown,
  ArrowRight,
  Download,
  Building2,
  Store,
  Wallet
} from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const BRI_BLUE = "#0157e3";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-semibold text-lg py-2 focus:outline-none"
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="text-slate-600 mt-2 pb-2"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const testimonials = [
  {
    name: "Siti Aminah",
    role: "Perawat di HK Island",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti&baseColor=f9c9b6&clothing=blazer&clothingColor=3c4e5e&hair=longButNotTooLong&hairColor=2c1b18",
    content: "Dulu tiap bulan harus ke Causeway Bay buat antre kirim uang. Sekarang sambil istirahat kerja aja bisa kirim uang lewat Remit.go. Kursnya selalu bersaing!"
  },
  {
    name: "Budi Santoso",
    role: "Pekerja Konstruksi di Kowloon",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi&baseColor=f9c9b6&clothing=shirt&clothingColor=3c4e5e&hair=shortCombover&hairColor=2c1b18",
    content: "Paling suka fitur setor tunai di 7-Eleven. Kerja saya kan shift, jadi bisa setor kapan saja mau jam 2 pagi sekalipun. Uang langsung masuk ke rekening istri di kampung."
  },
  {
    name: "Ratna Sari",
    role: "Domestic Helper di New Territories",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ratna&baseColor=f9c9b6&clothing=collarAndSweater&clothingColor=3c4e5e&hair=bob&hairColor=2c1b18",
    content: "Awalnya ragu kirim online, tapi karena Remit.go didukung BRI saya jadi tenang. Verifikasinya cepat dan aplikasinya gampang dipakai buat yang gaptek kayak saya."
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-slate-800 p-8 rounded-3xl border border-slate-700 min-h-[220px] flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-14 h-14 rounded-full border-2 border-slate-700 bg-slate-700 p-0.5"
            />
            <div>
              <p className="font-bold text-white text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-slate-400 font-medium">{testimonials[current].role}</p>
            </div>
          </div>
          <p className="italic text-slate-200 text-lg leading-relaxed font-light">
            "{testimonials[current].content}"
          </p>
        </motion.div>
      </div>

      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-blue-400' : 'w-2 bg-slate-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* Logo diletakkan langsung di depan teks */}
              <img src="/lpbrigo/logobrigo.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight text-[#003b9c]">Remit.go</span>
            </div>
          </div>
          <button className="bg-[#003b9c] text-white px-5 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
            Download Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="mt-10 py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-bold leading-[1.1] mb-8">
              Kirim Uang ke Indonesia <span className="text-[#003b9c]">Gak Pake Ribet, Gak Pake Antre!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Capek kerja seminggu, masa waktu libur habis cuma buat antre kirim uang? Di <span className="font-semibold text-[--color-bri-blue]">Remit.go</span>, kirim uang semudah kirim pesan. Kurs Tinggi, Biaya Murah, dan Pasti Sampai!
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Gak perlu nunggu hari libur",
                "Gak perlu jauh-jauh ke toko fisik",
                "Kurs tinggi & biaya murah"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#003b9c]" />
                  </div>
                  <span className="font-medium text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#003b9c] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:-translate-y-1 transition-transform">
                <Download className="w-5 h-5" /> Mulai Sekarang
              </button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img
                      key={i}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="ml-2">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium whitespace-nowrap">4.9/5 dari 50rb+ PMI</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:-mr-24 xl:-mr-32"
          >
            <div className="absolute -inset-10 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
            <img
              src="/lpbrigo/imagehero.png"
              alt="Remit.go App Mockup"
              className="w-full h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </Section>

      {/* --- Section Banner Slider --- */}
      <div className="w-full py-16 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-slate-900 mb-10">Promo Spesial (10 Banner)</h2>

          {/* Swiper Container */}
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={24} // Jarak antar gambar
            slidesPerView={1} // Default HP: Tampil 1
            breakpoints={{
              // Layar Tablet/Laptop ke atas
              1024: { slidesPerView: 4 }, // Tampil 4
            }}
            className="w-full pb-14" // Tambah padding bawah untuk titik pagination
          >

            {/* List 10 Banner - Ganti src dengan file Anda di folder public */}
            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/1.png" className="w-full h-full object-cover" alt="Banner 1" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/2.png" className="w-full h-full object-cover" alt="Banner 2" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/3.png" className="w-full h-full object-cover" alt="Banner 3" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/4.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/5.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/6.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/7.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/8.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/9.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            {/* Lanjutkan sampai Banner 10 */}
            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpbrigo/10.png" className="w-full h-full object-cover" alt="Banner 10" />
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
      </div>
      {/* --- End Section Slider --- */}


      {/* USP Section */}
      <div className="bg-slate-50">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kenapa Ribuan PMI di Hong Kong Pindah ke Remit.go?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#003b9c]" />,
                title: "Kurs Tertinggi & Ongkir Termurah",
                desc: "Dapatkan nilai tukar terbaik setiap hari tanpa biaya siluman. Hemat lebih banyak untuk keluarga di rumah."
              },
              {
                icon: <Store className="w-8 h-8 text-[#003b9c]" />,
                title: "Setor Tunai di 7-Eleven",
                desc: "Gak perlu cari bank. Cukup ke 7-Eleven mana saja di seluruh Hong Kong, buka aplikasi, dan setor tunai 24/7."
              },
              {
                icon: <Wallet className="w-8 h-8 text-[#003b9c]" />,
                title: "Kirim ke Semua Bank & E-Wallet",
                desc: "Kirim langsung ke BRI, Mandiri, BCA, atau E-Wallet favorit seperti Dana, OVO, dan GoPay secara instan."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[--color-bri-blue]">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Steps Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl -z-10" />
            <img
              src="gambar3brigo.png"
              alt="Steps Illustration"
              className="w-full max-w-lg mx-auto drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="relative">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cuma 3 Menit, Uang Langsung Sampai</h2>
              <p className="text-slate-600">Lupakan cara lama yang bikin pusing. Ikuti langkah mudah ini:</p>
            </div>

            <div className="space-y-12">
              {[
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "Download Aplikasi",
                  desc: "Tersedia di Google Play Store dan Apple App Store secara gratis."
                },
                {
                  icon: <UserCheck className="w-6 h-6" />,
                  title: "Daftar & Masukkan Data",
                  desc: "Cukup gunakan nomor telepon aktif dan masukkan data rekening tujuan."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Verifikasi ID / Paspor",
                  desc: "Lakukan verifikasi identitas satu kali untuk keamanan transaksi maksimal."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#003b9c] text-white flex items-center justify-center font-bold text-lg relative">
                    {i + 1}
                    {i < 2 && <div className="absolute top-full w-0.5 h-16 bg-blue-100" />}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold mb-2 text-[--color-bri-blue]">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Section */}
      <div className="bg-slate-900 text-white overflow-hidden">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Aman & Terpercaya di Bawah Naungan BRI</h2>
              <p className="text-slate-400 text-lg mb-8">
                Remit.go merupakan partner resmi Bank Rakyat Indonesia (BRI) di Hong Kong. Kami menjamin setiap transaksi diawasi oleh otoritas keuangan kedua negara.
              </p>

              <div className="space-y-6 mb-10">
                <TestimonialSlider />
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-400">4.9/5</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Play Store Rating</p>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-400">50K+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">PMI Aktif</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/src/assets/images/remit_hk_office_1778655934868.png"
                alt="Remit.go HK Branch"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-8">
                <p className="flex items-center gap-2 text-white font-medium">
                  <Building2 className="w-4 h-4 text-blue-400" /> Kantor Cabang Hong Kong
                </p>
                <p className="text-sm text-slate-300">Siap melayani keluhan dan bantuan tatap muka 7 hari seminggu.</p>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Commitment Section */}
      <div className="bg-white">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Bukan Aplikasi Biasa, Ini Persembahan BRI untuk PMI.</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#003b9c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Resmi & Aman</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Diawasi oleh otoritas keuangan dan memiliki kantor cabang fisik di Hong Kong (bukan aplikasi fiktif).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#003b9c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rating Tinggi</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Dipercaya oleh lebih dari 200.000 pengguna dengan rating 4.9 di Play Store.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-2xl -z-10" />
                <img
                  src="gambar4brigo.png"
                  alt="BRI Commitment"
                  className="w-full h-auto rounded-4xl shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Promo Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-12">
        <div className="bg-[#003b9c] rounded-[3rem] p-10 md:p-[50px] text-white relative overflow-hidden h-auto md:h-[430px] flex items-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 h-auto md:h-[42px]">Promo Khusus Buat Kamu!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Gratis Ongkir", subtitle: "Transaksi Pertama" },
                { title: "Flat 10 HKD", subtitle: "Biaya 7-Eleven" },
                { title: "Bonus Kurs", subtitle: "s/d +55 Poin" }
              ].map((promo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl"
                >
                  <p className="text-2xl font-bold mb-1">{promo.title}</p>
                  <p className="text-blue-100 text-sm">{promo.subtitle}</p>
                </motion.div>
              ))}
            </div>
            <button className="mt-12 bg-white text-[#060202] px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Ambil Promonya Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Paling Sering Ditanyakan (FAQ)</h2>
          <div className="space-y-2">
            {[
              {
                q: "Apakah Remit.go aman digunakan?",
                a: "Sangat aman. Remit.go beroperasi di bawah lisensi resmi MSO Hong Kong dan diawasi oleh otoritas perbankan di Indonesia melalui kemitraan dengan BRI."
              },
              {
                q: "Berapa lama uang sampai ke Indonesia?",
                a: "Untuk transaksi ke bank besar seperti BRI, Mandiri, dan E-wallet, uang akan masuk secara instan dalam hitungan menit (real-time)."
              },
              {
                q: "Bagaimana cara setor tunai di 7-Eleven?",
                a: "Pilih menu 'Setor Tunai' di aplikasi, masukkan jumlah uang. Tunjukkan kode barcode yang muncul di aplikasi ke kasir 7-Eleven. Bayar uang tunai ke kasir, dan saldo akan langsung terapdate."
              },
              {
                q: "Apakah ada batas maksimal kiriman?",
                a: "Batas pengiriman disesuaikan dengan aturan regulasi. Untuk akun terverifikasi, Anda dapat mengirim hingga 8,000 HKD per hari."
              },
              {
                q: "Apa yang harus dilakukan jika uang belum sampai?",
                a: "Tim CS kami tersedia 24/7 di aplikasi atau bisa kunjungi kantor cabang kami di Hong Kong untuk bantuan langsung."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <div className="bg-[#0a0f18] py-24 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5 select-none">
          <span className="text-[20rem] font-black text-white whitespace-nowrap">remit.go!</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-blue-400 text-xs font-bold uppercase tracking-wider mb-10">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Tersedia di iOS & Android
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Kirim Lebih Banyak. <br />
              <span className="text-blue-400">Bayar Lebih Sedikit.</span>
            </h2>

            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              50.000+ PMI sudah membuktikan. Download sekarang, gratis.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="flex items-center gap-3 bg-[#003b9c] text-white px-8 py-3.5 rounded-2xl font-bold hover:scale-105 transition-transform">
                <div className="bg-white/20 p-1 rounded-lg">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-70 leading-none mb-1">Download di</p>
                  <p className="text-lg leading-none">Google Play</p>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-slate-800 border border-slate-700 text-white px-8 py-3.5 rounded-2xl font-bold hover:scale-105 transition-transform">
                <div className="bg-white/10 p-1 rounded-lg">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-70 leading-none mb-1">Download di</p>
                  <p className="text-lg leading-none">App Store</p>
                </div>
              </button>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-medium">Ada pertanyaan? Chat via WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* Logo diletakkan langsung di depan teks */}
              <img src="/lpbrigo/logobrigo.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight text-[#003b9c]">Remit.go</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Remit.go by BRI. Licensed MSO 19-03-02451.</p>
          <div className="flex gap-6">
            <button className="text-slate-400 hover:text-[#003b9c] transition-colors"><Smartphone className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-[#003b9c] transition-colors"><ShieldCheck className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-[#003b9c] transition-colors"><Building2 className="w-5 h-5" /></button>
          </div>
        </div>
      </footer>
    </div>
  );
}
