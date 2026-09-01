"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { trackEvent } from "@/lib/analytics";
import {
  Phone,
  Mail,
  FileText,
  CalendarDays,
  Building2,
} from "lucide-react";

const contactRows = [
  {
    icon: Phone,
    content: (
      <a
        href="tel:+33615872796"
        onClick={() =>
          trackEvent("phone_click", { link_location: "contact_proprietaire" })
        }
        className="hover:text-gold-600 transition-colors"
      >
        +33 6 15 87 27 96
      </a>
    ),
  },
  {
    icon: Mail,
    content: (
      <a
        href="mailto:jeancharles.orozco@gmail.com"
        onClick={() =>
          trackEvent("email_click", { link_location: "contact_proprietaire" })
        }
        className="hover:text-gold-600 transition-colors break-all"
      >
        jeancharles.orozco@gmail.com
      </a>
    ),
  },
];

export default function ContactInfo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="contact-proprietaire" className="section-padding bg-warm-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-5">
            Votre <span className="text-gold-500">contact</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Vous souhaitez obtenir davantage d&apos;informations, recevoir
            le dossier complet ou organiser une visite ?{" "}
            <br className="hidden md:block" />
            Jean-Charles reste directement disponible pour échanger avec vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Colonne gauche — Photo + présentation */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/Jean-charles-orozco.webp"
                  alt="Jean-Charles Orozco — Propriétaire du 203"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl font-semibold text-navy-800">
                  Jean-Charles Orozco
                </h3>
                <p className="text-navy-600 text-sm mt-1.5">
                  Propriétaire — Le 203
                </p>
              </div>

              <div className="mt-6 text-navy-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Contactez-moi directement par téléphone ou par email pour
                  recevoir le dossier ou organiser une visite du 203.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne droite — Coordonnées + actions + confiance */}
          <div
            className={`transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-2xl border border-warm-300 shadow-sm p-7 md:p-9">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 mb-1">
                Coordonnées
              </h3>
              <p className="text-navy-800 font-medium text-sm">
                Jean-Charles Orozco · Propriétaire du 203
              </p>

              <div className="mt-6 space-y-3.5">
                {contactRows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <row.icon size={17} className="text-gold-600" />
                    </div>
                    <div className="text-navy-600 text-sm md:text-[15px] leading-relaxed pt-1.5">
                      {row.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Boutons d'action */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#contact-form"
                  onClick={() =>
                    trackEvent("cta_dossier_click", {
                      cta_location: "contact",
                      cta_label: "Recevoir le dossier complet",
                    })
                  }
                  className="btn-primary w-full"
                >
                  <FileText size={18} />
                  Recevoir le dossier complet
                </a>
                <a
                  href="mailto:jeancharles.orozco@gmail.com?subject=Planifier%20un%20%C3%A9change%20-%20Le%20203%20Avignon"
                  onClick={() =>
                    trackEvent("email_click", {
                      link_location: "contact_planifier_echange",
                    })
                  }
                  className="btn-secondary w-full"
                >
                  <CalendarDays size={18} />
                  Planifier un échange
                </a>
                <a
                  href="mailto:jeancharles.orozco@gmail.com?subject=Organiser%20une%20visite%20-%20Le%20203%20Avignon"
                  onClick={() =>
                    trackEvent("cta_visite_click", {
                      cta_location: "contact",
                      cta_label: "Organiser une visite",
                    })
                  }
                  className="btn-secondary w-full"
                >
                  <Building2 size={18} />
                  Organiser une visite
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-navy-300 text-sm">
          Informations non contractuelles, sous réserve de l&apos;inventaire final.
        </div>
      </div>
    </section>
  );
}
