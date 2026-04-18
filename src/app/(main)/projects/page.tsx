// app/projects/page.tsx
import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen px-6 py-28 md:px-12 lg:px-24 xl:px-52 bg-page flex flex-col gap-12">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3 text-4xl md:text-[60px]">
          <h1 className="font-semibold text-kreafi-2">All</h1>
          <span className="font-reenie font-normal text-kreafi-2">Projects</span>
        </div>
        <p className="font-extralight text-lg text-foreground/80 max-w-[600px]">
          Kumpulan eksplorasi desain dan pengembangan kode. Dari antarmuka pengguna hingga logika sistem yang kompleks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="group flex flex-col gap-4 cursor-pointer">
            {/* Card Image */}
            <div className="relative bg-gray rounded-xl w-full h-[300px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-kreafi-2" />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 px-1">
              <h3 className="text-2xl font-semibold text-kreafi-2 group-hover:text-kreafi-1 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-extralight text-foreground/70 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-medium px-3 py-1 bg-gray rounded-full text-kreafi-2/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}