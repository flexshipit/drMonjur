"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { doctor, nav } from "@/lib/profile";

export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-line/80 bg-ivory/95 backdrop-blur-md"
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <div className="shell flex h-18 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <span className="relative block size-11 overflow-hidden rounded-full ring-2 ring-teal/20 shadow-xs">
            <Image
              src="/images/portrait-head.jpg"
              alt="Dr. Monjur Shoyeb Khan"
              fill
              sizes="48px"
              className="object-cover object-[center_18%]"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-base font-semibold tracking-tight text-forest">
              {doctor.shortName}
            </span>
            <span className="block text-xs font-medium text-muted">
              Clinical Oncologist
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-sand-muted hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={doctor.mobileHref}
            className="hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-forest shadow-2xs transition-all hover:border-teal/40 hover:bg-mint/40 md:inline-flex"
          >
            <Phone className="size-3.5 text-teal" aria-hidden />
            <span>{doctor.mobile}</span>
          </a>
          <a
            href="#visit"
            className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-ivory shadow-sm transition-all hover:bg-teal hover:shadow sm:inline-flex"
          >
            <span>Book a visit</span>
            <ArrowRight className="size-3.5" aria-hidden />
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-forest hover:bg-sand-muted lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line/80 bg-ivory lg:hidden"
          >
            <div className="shell flex flex-col gap-1.5 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-xl px-4 py-2.5 text-base font-medium text-forest hover:bg-mint/50"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 pt-2 border-t border-line">
                <a
                  href={doctor.mobileHref}
                  onClick={close}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-forest shadow-2xs"
                >
                  <Phone className="size-4 text-teal" aria-hidden />
                  {doctor.mobile}
                </a>
                <a
                  href="#visit"
                  onClick={close}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest px-4 py-3 text-sm font-semibold text-ivory shadow-sm"
                >
                  Book a visit
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
