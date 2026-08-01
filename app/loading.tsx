export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="mt-6 text-lg text-slate-600">Loading...</p>
      </div>
    </main>
  );
}
