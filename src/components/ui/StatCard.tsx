export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[#e2e8f0] bg-[#f8f9fa] px-4 py-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
      <span className="mb-2 block text-[2.25rem] leading-[1.1] font-semibold text-rouge">
        {value}
      </span>
      <span className="block text-sm font-medium tracking-[0.5px] text-[#4a5568] uppercase">
        {label}
      </span>
    </div>
  );
}
