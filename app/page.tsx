import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Imagen de perfil */}
      <div className="relative mb-8 animate-fade-in">
        <div className="relative">
          <Image
            src="/images/profile.png"
            alt="Jesús Salas"
            width={120}
            height={120}
            className="rounded-full border-4 border-zinc-700 shadow-2xl bg-zinc-900"
          />
          {/* Indicador de disponibilidad */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-zinc-900 animate-pulse"></div>
        </div>
      </div>

      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        jesús salas
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <span className="text-sm text-zinc-500">
          A curious 🇪🇸 spanish developer in UTC-5 building applications that solve real and boring problems.
        </span>
        <h2 className="text-sm text-zinc-500 ">
          I'm building{" "}
          <Link
            target="_blank"
            href="https://hostreach.io"
            className="underline duration-500 hover:text-zinc-300"
          >
            hostreach.io
          </Link> to help realtors find and contact property owners.
        </h2>
      </div>
    </div>
  );
}
