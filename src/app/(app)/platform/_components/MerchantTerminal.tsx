export function MerchantTerminal() {
  return (
    <div
      className="w-full max-w-xs mx-auto rounded-4xl border-4 border-zinc-900 bg-zinc-900 overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)]"
      role="img"
      aria-label="Merchant payment terminal preview"
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-[10px] font-semibold text-white/60">9:41</span>
        <div className="flex items-center gap-1">
          <span className="w-3 h-1.5 rounded-sm bg-white/60" />
          <span className="w-3 h-1.5 rounded-sm bg-white/60" />
          <span className="w-3 h-1.5 rounded-sm bg-white/40" />
        </div>
      </div>

      {/* Screen */}
      <div className="bg-white mx-2 mb-2 rounded-[1.25rem] overflow-hidden">
        {/* App header */}
        <div className="bg-primary-color px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/60 font-medium">Merchant Portal</p>
            <p className="text-sm font-bold text-white">Collect Payment</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary-color flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="2"
                width="5"
                height="5"
                rx="0.5"
                stroke="#3a5646"
                strokeWidth="1.5"
              />
              <rect
                x="9"
                y="2"
                width="5"
                height="5"
                rx="0.5"
                stroke="#3a5646"
                strokeWidth="1.5"
              />
              <rect
                x="2"
                y="9"
                width="5"
                height="5"
                rx="0.5"
                stroke="#3a5646"
                strokeWidth="1.5"
              />
              <rect x="10" y="10" width="1" height="1" fill="#3a5646" />
              <rect x="12" y="10" width="1" height="1" fill="#3a5646" />
              <rect x="10" y="12" width="1" height="1" fill="#3a5646" />
              <rect x="12" y="12" width="1" height="1" fill="#3a5646" />
            </svg>
          </div>
        </div>

        {/* Amount */}
        <div className="px-5 pt-5 pb-3 text-center">
          <p className="text-xs text-zinc-400 font-medium mb-1">Amount Due</p>
          <p className="text-3xl font-bold text-text-color tracking-tight font-mono">
            SLL 125,000
          </p>
          <p className="text-xs text-zinc-400 mt-1">Order #SP-2847</p>
        </div>

        {/* QR Code (simulated) */}
        <div className="mx-5 mb-4 rounded-xl border-2 border-zinc-100 p-4 bg-zinc-50">
          <div className="grid grid-cols-9 gap-[2px]" aria-hidden="true">
            {Array.from({ length: 81 }).map((_, i) => {
              const corners = [
                0, 1, 2, 3, 4, 5, 6, 9, 15, 18, 24, 27, 28, 29, 30, 31, 32, 33,
                36, 42, 45, 46, 47, 48, 49, 50, 51, 54, 60, 63, 69, 72, 73, 74,
                75, 76, 77, 78,
              ];
              const fills = [10, 20, 37, 40, 41, 55, 58, 65, 70, 71];
              const isFilled =
                corners.includes(i) ||
                fills.includes(i) ||
                (i % 7 === 3 && i > 27 && i < 54);
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-[1px] ${isFilled ? "bg-zinc-900" : "bg-transparent"}`}
                />
              );
            })}
          </div>
          <p className="text-[10px] text-zinc-400 text-center mt-3 font-medium">
            Scan to pay
          </p>
        </div>

        {/* Last payment */}
        <div className="mx-5 mb-5 p-3 rounded-xl bg-green-50 border border-green-100 flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6L5 9L10 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold text-green-800 leading-none">
              Last payment confirmed
            </p>
            <p className="text-[10px] text-green-600 mt-0.5 font-mono">
              Ibrahim K. — SLL 75,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
