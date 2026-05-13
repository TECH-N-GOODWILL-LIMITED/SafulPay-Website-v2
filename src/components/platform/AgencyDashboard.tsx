const transactions = [
  {
    name: "Ibrahim Koroma",
    amount: "+SLL 45,000",
    type: "credit",
    time: "2m ago",
  },
  {
    name: "Fatou Diallo",
    amount: "-SLL 12,000",
    type: "debit",
    time: "8m ago",
  },
  {
    name: "Adama Jalloh",
    amount: "+SLL 78,500",
    type: "credit",
    time: "14m ago",
  },
  {
    name: "Mariama Bah",
    amount: "+SLL 22,000",
    type: "credit",
    time: "31m ago",
  },
];

export function AgencyDashboard() {
  return (
    <div
      className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-[0_20px_60px_-15px_rgba(58,86,70,0.15)]"
      role="img"
      aria-label="Agency dashboard preview"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-zinc-100 bg-zinc-50">
        <span className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
        <span
          className="w-3 h-3 rounded-full bg-amber-400"
          aria-hidden="true"
        />
        <span
          className="w-3 h-3 rounded-full bg-green-400"
          aria-hidden="true"
        />
        <span className="ml-auto text-xs text-zinc-400 font-medium">
          Agency Dashboard
        </span>
      </div>

      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-zinc-400 font-medium">Welcome back,</p>
          <p className="text-sm font-bold text-text-color tracking-tight">
            Mariama Sesay
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100">
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-xs font-semibold text-green-700">Live</span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="px-5 py-2 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-primary-color p-4">
          <p className="text-xs text-white/60 font-medium mb-1">
            Total Balance
          </p>
          <p className="text-base font-bold text-white font-mono leading-none">
            SLL 2,847,500
          </p>
        </div>
        <div className="rounded-xl bg-secondary-color/15 border border-secondary-color/20 p-4">
          <p className="text-xs text-primary-color/60 font-medium mb-1">
            Commission
          </p>
          <p className="text-base font-bold text-primary-color font-mono leading-none">
            SLL 124,830
          </p>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-5 pt-3 pb-5">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
          Recent Transactions
        </p>
        <div className="flex flex-col divide-y divide-zinc-50">
          {transactions.map((tx) => (
            <div
              key={tx.name}
              className="flex items-center justify-between py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary-shade-5 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary-color">
                    {tx.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-color leading-none">
                    {tx.name}
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">{tx.time}</p>
                </div>
              </div>
              <span
                className={`text-xs font-bold font-mono ${
                  tx.type === "credit" ? "text-green-600" : "text-red-500"
                }`}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
