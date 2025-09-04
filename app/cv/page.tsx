"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Github, Linkedin, Youtube, Globe, X } from "lucide-react";

const cvData = {
  es: {
    title: "Currículum Vitae",
    profile: {
      title: "Perfil",
      content: "Full-Stack Developer especializado en soluciones SaaS y automatización de procesos empresariales. Experiencia desarrollando aplicaciones escalables con Node, Vue y Laravel. Enfoque en herramientas B2B para e-commerce y sector inmobiliario. Competente en despliegues cloud y arquitecturas modernas. Historial de proyectos desde MVP hasta producción con miles de usuarios."
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Fundador de Hostreach",
          period: "2024",
          description: "Herramienta de extracción y prospección a propietarios particulares para inmobiliarias."
        },
        {
          role: "Desarrollador Full Stack en Vendorati",
          period: "2022",
          description: "Desde una fase temprana desarrollé en Laravel y Nuxt la herramienta de análisis para vendedores de Amazon más reconocida en habla hispana."
        },
        {
          role: "Analista desarrollador en Isotrol",
          period: "2019",
          description: "Lideraba proyectos de consultoría con arquitectura REST API usando tecnologías como Angular y Spring Boot."
        },
        {
          role: "Desarrollador Full Stack en Clever Global",
          period: "2018",
          description: "Análisis y arquitectura de un proyecto de gestión de acceso y documental con Play (Java y Scala), MySQL y Ionic."
        },
        {
          role: "Desarrollador Android en SDOS",
          period: "2017",
          description: "Pertenecí al equipo de Android, desarrollando aplicaciones reconocidas como Séneca, Emasesa, Mossos d'escuadra, Día."
        }
      ]
    },
    education: {
      title: "Formación",
      items: [
        "IES Ciudad Jardín - CFGM Sistemas Microinformáticos y Redes, 2015",
        "Nuevas Profesiones (EUSA) - CFGS Desarrollo de Aplicaciones Multiplataforma, 2016",
        "Ingeniería Informática en Sistemas de Información en la Universidad Pablo de Olavide, Sevilla. (25% completado)"
      ]
    },
    projects: {
      title: "Proyectos personales",
      content: "Hostreach, Ecommbar, Propertock, Amzai, Supplyhost, Buscountech, Zabanta, Finite Waves."
    },
    skills: {
      title: "Conocimientos técnicos",
      content: "Play Framework, Ionic, Docker, Vagrant, Ansible, Android, Flutter, Akka, MySQL, MongoDB, NodeJS, Spring Boot, Laravel, Firebase, Amazon services, Nuxt, Next, Vue, Angular, Railway, Vercel"
    }
  },
  en: {
    title: "Curriculum Vitae",
    profile: {
      title: "Profile",
      content: "Full-Stack Developer specialized in SaaS solutions and business process automation. Experience developing scalable applications with Node, Vue and Laravel. Focus on B2B tools for e-commerce and real estate sector. Competent in cloud deployments and modern architectures. Track record of projects from MVP to production with thousands of users."
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Founder of Hostreach",
          period: "2024",
          description: "Tool for extraction and prospecting private property owners for real estate agencies."
        },
        {
          role: "Full Stack Developer at Vendorati",
          period: "2022",
          description: "From an early stage I developed in Laravel and Nuxt the most recognized Amazon seller analysis tool in Spanish-speaking countries."
        },
        {
          role: "Developer Analyst at Isotrol",
          period: "2019",
          description: "Led consulting projects with REST API architecture using technologies like Angular and Spring Boot."
        },
        {
          role: "Full Stack Developer at Clever Global",
          period: "2018",
          description: "Analysis and architecture of an access management and document project with Play (Java and Scala), MySQL and Ionic."
        },
        {
          role: "Android Developer at SDOS",
          period: "2017",
          description: "Belonged to the Android team, developing recognized applications such as Séneca, Emasesa, Mossos d'escuadra, Día."
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        "IES Ciudad Jardín - Microcomputer Systems and Networks, 2015",
        "Nuevas Profesiones (EUSA) - Multiplatform Application Development, 2016",
        "Computer Engineering in Information Systems at Universidad Pablo de Olavide, Sevilla. (25% completed)"
      ]
    },
    projects: {
      title: "Personal projects",
      content: "Hostreach, Ecommbar, Propertock, Amzai, Supplyhost, Buscountech, Zabanta, Finite Waves."
    },
    skills: {
      title: "Technical skills",
      content: "Play Framework, Ionic, Docker, Vagrant, Ansible, Android, Flutter, Akka, MySQL, MongoDB, NodeJS, Spring Boot, Laravel, Firebase, Amazon services, Nuxt, Next, Vue, Angular, Railway, Vercel"
    }
  }
};

export default function CVPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const data = cvData[language];

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navigation />
      
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-zinc-100/20 pt-14">
        <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-zinc-50 shadow-xl shadow-zinc-600/10 ring-1 ring-zinc-50 sm:-mr-80 lg:-mr-96" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div className="max-w-md lg:max-w-none">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/profile.png"
                  alt="Jesús Salas"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-zinc-200 shadow-lg"
                />
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                    Jesús Salas
                  </h1>
                  <p className="text-lg leading-8 text-zinc-600">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
              
              {/* Language Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    language === 'es'
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'
                  }`}
                >
                  🇪🇸 Español
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    language === 'en'
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex gap-4 mb-8">
                <Link
                  href="https://github.com/jsalasdev"
                  target="_blank"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/jesussalassuero"
                  target="_blank"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://youtube.com/@jesvssalas"
                  target="_blank"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/@jesvssalas"
                  target="_blank"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  <X className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        <div className="grid gap-12">
          {/* Profile */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">
              {data.profile.title}
            </h2>
            <p className="text-zinc-700 leading-7">
              {data.profile.content}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6">
              {data.experience.title}
            </h2>
            <div className="space-y-6">
              {data.experience.items.map((job, index) => (
                <div key={index} className="border-l-2 border-zinc-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {job.role}
                    </h3>
                    <span className="text-sm font-medium text-zinc-600 bg-zinc-100 px-2 py-1 rounded">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-zinc-700 leading-6">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6">
              {data.education.title}
            </h2>
            <div className="space-y-3">
              {data.education.items.map((edu, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-zinc-700 leading-6">{edu}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">
              {data.projects.title}
            </h2>
            <p className="text-zinc-700 leading-7">
              {data.projects.content}
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 mt-3 text-zinc-900 hover:text-zinc-600 font-medium"
            >
              {language === 'es' ? 'Ver proyectos' : 'View projects'}
              <Globe className="w-4 h-4" />
            </Link>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">
              {data.skills.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.content.split(', ').map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zinc-100 text-zinc-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 