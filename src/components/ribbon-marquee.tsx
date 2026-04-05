import Image from "next/image";

export default function RibbonMarquee() {
  const marqueeItems = [
    {
      id: 1,
      text: "Frontend Developer",
      icon: "/assets/white.svg",
    },
    {
      id: 2,
      text: "Landing Page",
      icon: "/assets/white.svg",
    },
    {
      id: 3,
      text: "Creative",
      icon: "/assets/white.svg",
    },
    {
      id: 4,
      text: "Dashboard",
      icon: "/assets/white.svg",
    },
    {
      id: 5,
      text: "Beautiful UI",
      icon: "/assets/white.svg",
    },
    {
      id: 6,
      text: "Mobile Developer",
      icon: "/assets/white.svg",
    },
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex w-[105%] bg-kreafi-2 py-3 text-white shadow-md">
        <div className="flex w-full overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-2 px-4">
            {marqueeItems.map((item, index) => (
              <div key={`part1-${index}`} className="flex items-center gap-3">
                <div className="relative h-6 w-6">
                  <Image
                    src={item.icon}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Teks */}
                <span className="font-poppins text-lg font-bold uppercase tracking-widest">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8 px-4"
            aria-hidden="true"
          >
            {marqueeItems.map((item, index) => (
              <div key={`part2-${index}`} className="flex items-center gap-3">
                <div className="relative h-6 w-6">
                  <Image
                    src={item.icon}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-poppins text-lg font-bold uppercase tracking-widest">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
