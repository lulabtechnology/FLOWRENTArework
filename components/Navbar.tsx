"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#quienes-somos", label: "Quiénes somos" },
  { href: "/servicios", label: "Vehículos" },
  { href: "/rutas", label: "Rutas" },
  { href: "/#faq", label: "Preguntas frecuentes" },
  { href: "/#contacto", label: "Contacto" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/80 backdrop-blur">
      <div className="main-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-soft">
            <span className="text-lg font-bold">F</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-tight">
              Flow Rental Bocas
            </span>
            <span className="text-[11px] leading-tight text-slate-500">
              Ebikes &amp; motos para explorar
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/servicios"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
          >
            Reservar vehículo
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-emerald-50 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-700 transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-700 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-700 transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-emerald-100 bg-white md:hidden">
          <div className="main-container flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/servicios"
              className="mt-1 rounded-full bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-soft hover:bg-brand-700"
              onClick={() => setOpen(false)}
            >
              Reservar vehículo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
