import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

export const revalidate = 60;

const formatDate = (date: string | Date | null | undefined) => {
	if (!date) return 'Fecha no disponible';
	
	try {
		let dateObj;
		if (typeof date === 'string') {
			// Si es string, añadir hora del mediodía para evitar problemas de zona horaria
			dateObj = new Date(date + 'T12:00:00');
		} else {
			dateObj = new Date(date);
		}
		
		// Verificar si la fecha es válida
		if (isNaN(dateObj.getTime())) {
			console.error('Invalid date:', date);
			return 'Fecha inválida';
		}
		
		return Intl.DateTimeFormat('es-ES', { dateStyle: "medium" }).format(dateObj);
	} catch (error) {
		console.error('Error formatting date:', date, error);
		return 'Error en fecha';
	}
};

const getDateISO = (date: string | Date | null | undefined) => {
	if (!date) return '';
	
	try {
		let dateObj;
		if (typeof date === 'string') {
			dateObj = new Date(date + 'T12:00:00');
		} else {
			dateObj = new Date(date);
		}
		
		// Verificar si la fecha es válida
		if (isNaN(dateObj.getTime())) {
			console.error('Invalid date for ISO:', date);
			return '';
		}
		
		return dateObj.toISOString().split('T')[0];
	} catch (error) {
		console.error('Error getting ISO date:', date, error);
		return '';
	}
};

export default async function ProjectsPage() {
  const views = allProjects.reduce((acc, project) => {
    acc[project.slug] = 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "hostreach.io")!;
  const top2 = allProjects.find((project) => project.slug === "vendorati")!;
  const top3 = allProjects.find((project) => project.slug === "supplyhost")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) => {
        // Manejar fechas nulas/undefined en el sort también
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      }
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center gap-2">
                <div
                      className={`w-2 h-2 rounded-full ${
                        featured.live 
                          ? 'bg-green-500' 
                          : 'bg-gray-500'
                      }`}
                      title={featured.live ? 'En producción' : 'No publicado'}
                    />
                  <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                </div>

                
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
