import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center min-h-screen px-6 py-20 md:px-12 lg:px-24 xl:px-52 gap-8"
    >
      <div className="flex items-center space-x-3 text-4xl md:text-[50px]">
        <h1 className="font-semibold text-foreground">Selected</h1>
        <span className="font-reenie font-normal text-kreafi-2">Project</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[700px]">
        <div className="flex flex-col gap-4 w-full lg:w-2/3 h-full">
          <div className="relative overflow-hidden rounded-xl bg-gray w-full h-[250px] md:h-[300px] lg:h-1/3">
            <Image
              src="/assets/mockup-so.svg"
              alt="mockup so"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full h-auto lg:h-2/3">
            <div className="relative overflow-hidden rounded-xl bg-gray w-full md:w-1/2 h-[300px] md:h-auto lg:h-full">
              <Image
                src="/assets/mockup-lundra.svg"
                alt="mockup lundra"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2 h-[500px] md:h-auto lg:h-full">
              <div className="relative flex items-end justify-end overflow-hidden rounded-xl bg-gray w-full h-1/2">
                <div className="relative w-[85%] h-[85%]">
                  <Image
                    src="/assets/mockup-sigap.svg"
                    alt="mockup sigap"
                    fill
                    className="object-contain object-bottom object-right"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-kreafi-1 w-full h-1/2 flex items-end">
                <Image
                  src="/assets/box-projects.svg"
                  alt="background box"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-end justify-end p-5">
                  <div className="font-semibold text-kreafi-2 space-x-3 flex items-center bg-white/20 backdrop-blur-sm p-2 pr-4 rounded-full">
                    <span className="ml-2">My Projects</span>
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
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gray w-full lg:w-1/3 h-[400px] lg:h-full">
          <Image
            src="/assets/mockup-sipajak.svg"
            alt="mockup sipajak"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
