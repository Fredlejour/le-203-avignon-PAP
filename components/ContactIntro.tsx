"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export default function ContactIntro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section
      ref={ref}
      id="proposition"
      className="pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-28 lg:pb-12 bg-navy-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div
          className={`grid lg:grid-cols-[180px,1fr] gap-8 lg:gap-12 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Photo */}
          <div className="hidden lg:flex justify-start">
            <div className="w-28 h-36 md:w-36 md:h-44 lg:w-40 lg:h-52 rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl flex-shrink-0">
              <img
                src="/images/Jean-charles-orozco.webp"
                alt="Jean-Charles Orozco — Propriétaire du 203"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="text-center lg:text-left">
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3 hidden lg:block">
              Votre contact
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              <span className="text-gold-400">Jean-Charles Orozco</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base mb-4">
              Propriétaire — Le 203
            </p>
            <div className="max-w-2xl mx-auto lg:mx-0 space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
              <p>
                Vous souhaitez obtenir davantage d&apos;informations, recevoir
                le dossier complet ou organiser une visite ?
              </p>
              <p>
                Je reste directement disponible pour échanger avec vous au sujet
                du 203 et répondre à vos questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
