import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token");

  if (!token) {
    redirect("/admin/login");
  }

  return (
    <div className="bg-emerald-50/20 py-10 sm:py-16">
      <div className="main-container">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Panel administrativo
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          Aquí verás todas las reservas, pagos y datos de clientes cuando
          conectemos la base de datos (Firebase) y la pasarela de pago
          PagueloFacil en las siguientes fases.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Reservas
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Listado de reservas con nombre del cliente, vehículo y fecha de
              alquiler.
            </p>
          </div>
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Pagos
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Estado de los pagos (completado, pendiente, fallido) y montos
              cobrados por PagueloFacil.
            </p>
          </div>
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Documentación
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Enlaces a los archivos subidos (licencias, pasaportes, etc.)
              almacenados en Firebase Storage.
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          En la siguiente fase conectaremos este panel con Firestore (reservas y
          pagos), Firebase Storage (archivos) y filtros por fecha, estado y tipo
          de vehículo.
        </p>
      </div>
    </div>
  );
}
