import RibbonMarquee from "@/components/ribbon-marquee";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col pt-20 bg-page h-screen justify-between">
      <RibbonMarquee />

      <div className="flex flex-col space-y-6 px-6 md:px-12 lg:px-24 xl:px-52 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <h1 className="font-bold text-kreafi-2 text-4xl md:text-[50px]">
            Let's{" "}
            <span className="font-reenie font-normal text-kreafi-2">
              Connect
            </span>{" "}
            There
          </h1>
          <Button className="bg-kreafi-1 hover:bg-kreafi-1/90 text-kreafi-2 font-semibold shadow px-8 py-4 w-full md:w-auto text-sm">
            Hire Me Now
          </Button>
        </div>
        <Separator className="bg-gray" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-12 px-6 md:px-12 lg:px-24 xl:px-52 py-12">
        <div className="flex flex-col space-y-6 w-full lg:max-w-[400px]">
          <div className="flex space-x-4 items-center">
            <Image
              src="/assets/foto-rafi-kecil.svg"
              alt="foto rafi kecil"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="text-kreafi-2 font-semibold text-lg">
              Rafi Ihya Syampratama
            </span>
          </div>
          <p className="font-extralight text-sm text-foreground/70 leading-relaxed">
            Feel free to connect with me and explore more of my work on LinkedIn
            - let's create something amazing together!
          </p>
          <div className="flex space-x-3 items-center">
            <Button
              size="icon"
              className="bg-kreafi-2 hover:bg-kreafi-2/80 rounded-full w-10 h-10"
            >
              <Image
                src="/assets/icon-linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </Button>
            <Button
              size="icon"
              className="bg-kreafi-2 hover:bg-kreafi-2/80 rounded-full w-10 h-10"
            >
              <Image
                src="/assets/icon-ig.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
            </Button>
            <Button
              size="icon"
              className="bg-kreafi-2 hover:bg-kreafi-2/80 rounded-full w-10 h-10"
            >
              <Image
                src="/assets/icon-wa.svg"
                alt="WhatsApp"
                width={16}
                height={16}
              />
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 items-start">
          <div className="flex flex-col space-y-4">
            <span className="text-base font-semibold text-kreafi-2 mb-2">
              Navigations
            </span>
            <span className="text-sm text-kreafi-2/80 hover:text-kreafi-2 cursor-pointer transition">
              Home
            </span>
            <span className="text-sm text-kreafi-2/80 hover:text-kreafi-2 cursor-pointer transition">
              About Me
            </span>
            <span className="text-sm text-kreafi-2/80 hover:text-kreafi-2 cursor-pointer transition">
              Projects
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-base font-semibold text-kreafi-2 mb-2">
              Contact
            </span>
            <span className="text-sm text-kreafi-2/80">+62 851 74110485</span>
            <span className="text-sm text-kreafi-2/80 break-all">
              rafiihyasyampratama@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Baris Bawah Copyright */}
      <div className="bg-kreafi-2 py-4 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-52 gap-4 text-center md:text-left">
        <span className="text-white/80 text-xs font-light">
          copyright © 2026 Rafi Ihya Syampratama. All Rights Reserved.
        </span>
        <span className="text-white/80 text-xs font-light">
          Term and Conditions | Privacy Policy
        </span>
      </div>
    </footer>
  );
}
