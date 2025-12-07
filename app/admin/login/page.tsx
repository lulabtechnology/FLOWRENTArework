"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        router.push("/admin");
      } else {
        const data = await response.json();
        setError(
          data?.message || "No se pudo iniciar sesión. Intenta nuevamente."
        );
      }
    } catch (err) {
      setError("Error de conexión. Revisa tu red e intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-emerald-50/40">
      <div className="card w-full max-w-md p-6 sm:p-8">
        <h1 className="text-xl font-bold text-slate-900">
          Acceso al panel administrativo
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Esta pantalla es solo para el dueño o personal autorizado de Flow
          Rental Bocas. Usa la contraseña configurada en las variables de
          entorno.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="text-xs font-semibold text-slate-700"
            >
              Contraseña de administrador
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 w-full rounded-xl border border-emerald-100 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              placeholder="Escribe tu contraseña"
            />
          </div>
          {error && (
            <p className="text-xs font-medium text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-700 disabled:opacity-70"
          >
            {submitting ? "Accediendo..." : "Entrar al panel"}
          </button>
          <p className="mt-2 text-[11px] text-slate-500">
            Más adelante podremos cambiar este acceso simple por un sistema de
            autenticación más avanzado si lo necesitas.
          </p>
        </form>
      </div>
    </div>
  );
}
