import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-between px-52 py-10 h-screen items-center"
    >
      <div className="flex space-x-4">
        <div className="realtive bg-kreafi-2 rounded-xl h-[551px] w-[357px]">
          <div className="relative h-full w-full flex items-end justify-end">
            <Image
              src="/assets/foto-rafi-2.svg"
              className="absolute z-20"
              alt="foto rafi 2"
              height={677}
              width={322}
            />
            <div className="flex flex-col justify-between absolute z-50 text-white h-full w-full p-4">
              <span className="text-[40px] font-extralight">
                Im, <br />{" "}
                <span className="font-semibold">Rafi Ihya Syampratama</span>
              </span>
              <span className="text-xs font-extraligth underline">
                rafiihyasyampratama@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 justify-between">
          <Image
            src="/assets/box-stack.svg"
            alt="box tech stack"
            width={290}
            height={310}
          />
          <div className="bg-kreafi-1 rounded-xl w-[290px] h-[220px] relative overflow-hidden flex items-end">
            <Image
              src="/assets/color.svg"
              alt="logo color"
              width={251}
              height={224}
              className="-rotate-45"
            />
            <div className="flex absolute space-x-2 z-20 w-full h-full items-end justify-end p-4">
              <div className="font-semibold text-kreafi-2 space-x-2 flex items-center">
                <span>My Journey </span>
                <Button className="rounded-full bg-white w-8 h-8">
                  <ArrowRight className="text-kreafi-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="space-x-2 text-[50px] flex">
          <h1 className="font-semibold">About</h1>
          <span className="font-reenie font-normal">Me</span>
        </div>
        <p className="text-[25px] font-extralight w-[500px]">
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
