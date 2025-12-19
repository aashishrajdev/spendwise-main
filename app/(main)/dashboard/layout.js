import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-28 pb-6">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="text-sm text-white/70">
          Track your spending and manage your finances
        </p>
      </div>
      <Suspense
        fallback={
          <div className="mt-10">
            <BarLoader width="100%" color="#a855f7" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}