import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      // Mengubah padding dan height agar fluid
      className="flex flex-col lg:flex-row justify-center lg:justify-between px-6 md:px-16 lg:px-24 xl:px-52 py-20 lg:py-10 min-h-screen items-center gap-12 lg:gap-8"
    >
      {/* Container Gambar Kiri */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl justify-center items-center md:items-stretch">
        
        {/* Box 1: Foto Profil */}
        {/* Menggunakan w-full dan max-w agar mengecil di mobile */}
        <div className="relative bg-kreafi-2 rounded-xl h-[450px] md:h-[551px] w-full max-w-[357px] overflow-visible">
          <div className="relative h-full w-full flex items-end justify-center md:justify-end">
            <Image
              src="/assets/foto-rafi-2.svg"
              className="absolute z-20 bottom-0"
              alt="foto rafi 2"
              height={677}
              width={322}
              style={{ objectFit: "contain" }}
            />
            {/* Memperbaiki typo 'realtive' -> relative dan 'extraligth' -> extralight */}
            <div className="flex flex-col justify-between absolute z-50 text-white h-full w-full p-4 md:p-6 bg-gradient-to-t from-black/50 to-transparent md:bg-none">
              <span className="text-3xl md:text-[40px] font-extralight leading-tight mt-4">
                I'm, <br />{" "}
                <span className="font-semibold">Rafi Ihya Syampratama</span>
              </span>
              <span className="text-xs font-extralight underline mb-2 md:mb-0 break-all">
                rafiihyasyampratama@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Box 2 & 3: Tech Stack & Journey */}
        <div className="flex flex-col gap-6 lg:gap-4 justify-between w-full lg:w-[290px]">
          <Image
            src="/assets/box-stack.svg"
            alt="box tech stack"
            width={290}
            height={310}
            className="w-full h-auto object-contain"
          />
          <div className="bg-kreafi-1 rounded-xl w-full h-[180px] lg:h-[220px] relative overflow-hidden flex items-end">
            <Image
              src="/assets/color.svg"
              alt="logo color"
              width={251}
              height={224}
              className="-rotate-45 absolute -bottom-8 -left-8 lg:static"
            />
            <div className="absolute inset-0 z-20 flex items-end justify-end p-5">
                  <div className="font-semibold text-kreafi-2 space-x-3 flex items-center bg-white/20 backdrop-blur-sm p-2 pr-4 rounded-full">
                    <span className="ml-2">My Journey</span>
                    <Button
                      size="icon"
                      className="rounded-full bg-white w-8 h-8 hover:bg-gray-100 transition"
                    >
                      <ArrowRight className="text-kreafi-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
          </div>
        </div>
      </div>

      {/* Bagian Teks Kanan */}
      <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start w-full lg:w-auto">
        <div className="gap-2 text-4xl md:text-[50px] flex justify-center lg:justify-start">
          <h1 className="font-semibold">About</h1>
          <span className="font-reenie font-normal">Me</span>
        </div>
        {/* Menggunakan w-full dan max-w-[500px] serta ukuran font responsif */}
        <p className="text-base md:text-lg lg:text-[25px] font-extralight w-full max-w-[500px] leading-relaxed">
          Lulusan Rekayasa Perangkat Lunak dengan keahlian di desain grafis dan
          pemrograman frontend. Terampil menggunakan tools seperti Figma,
          Photoshop, serta teknologi web modern untuk membangun antarmuka yang
          responsif dan menarik. Memiliki tujuan untuk mengembangkan karir di
          bidang Front-End Development, dengan fokus pada pembuatan aplikasi web
          yang inovatif dan user-friendly.
        </p>
      </div>
    </section>
  );
}