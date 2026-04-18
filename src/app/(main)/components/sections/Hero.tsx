import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-stretch min-h-screen px-6 md:px-12 lg:px-24 xl:px-52 pt-10 lg:pt-0 overflow-hidden"
    >
      <div className="flex flex-col space-y-6 h-full items-start justify-center w-full lg:max-w-[750px] z-10 lg:mt-72">
        <h1 className="text-4xl md:text-[50px] text-kreafi-2 font-semibold leading-tight">
          Turning Complex Logic into
          <br className="hidden md:block" />
          <span className="font-reenie font-normal text-kreafi-2 ml-2 md:ml-0">
            Beautiful
          </span>{" "}
          Digital Experiences
        </h1>
        <p className="font-light w-full max-w-[650px] text-sm md:text-base text-foreground/80">
          Saya membantu bisnis membangun aplikasi web yang tidak hanya berfungsi
          dengan sempurna di balik layar, tapi juga memanjakan mata pengguna.
          Frontend Developer & Graphic Designer berbasis di Makassar.
        </p>
        <div className="flex space-x-4 pt-2 items-start w-full">
          <a 
        href="/assets/CV_Rafi_Ihya_Syampratama.pdf" 
        download="CV_Rafi_Ihya_Syampratama.pdf"     
      >
        <Button className="bg-kreafi-1 hover:bg-kreafi-1/90 text-kreafi-2 text-sm font-semibold shadow px-6">
          Download CV
        </Button>
      </a>
          <Button
            variant="outline"
            className="border-line text-kreafi-2 text-sm px-6"
          >
            Let's Talk
          </Button>
        </div>
      </div>

      <div className="relative lg:absolute z-0 right-0 bottom-0 mt-12 lg:mt-0 md:flex justify-end w-full hidden max-w-[300px] md:max-w-[450px] lg:max-w-[618px]">
        <Image
          src="/assets/foto-rafi-1.svg"
          alt="foto rafi 1"
          width={618}
          height={928}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
}
