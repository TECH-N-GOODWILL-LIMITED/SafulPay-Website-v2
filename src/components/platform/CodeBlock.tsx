import { codeSnippet } from "@/data/platformContent";

type TokenType =
  | "keyword"
  | "string"
  | "comment"
  | "number"
  | "property"
  | "function"
  | "plain";

interface Token {
  text: string;
  type: TokenType;
}

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    if (remaining.startsWith("//")) {
      tokens.push({ text: remaining, type: "comment" });
      break;
    }

    const stringMatch = remaining.match(/^('([^'\\]|\\.)*'|"([^"\\]|\\.)*")/);
    if (stringMatch) {
      tokens.push({ text: stringMatch[0], type: "string" });
      remaining = remaining.slice(stringMatch[0].length);
      continue;
    }

    const numberMatch = remaining.match(/^[\d_,]+/);
    if (numberMatch) {
      tokens.push({ text: numberMatch[0], type: "number" });
      remaining = remaining.slice(numberMatch[0].length);
      continue;
    }

    const keywordMatch = remaining.match(
      /^(import|from|const|new|await|process)\b/,
    );
    if (keywordMatch) {
      tokens.push({ text: keywordMatch[0], type: "keyword" });
      remaining = remaining.slice(keywordMatch[0].length);
      continue;
    }

    const funcMatch = remaining.match(/^([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/);
    if (funcMatch) {
      tokens.push({ text: funcMatch[0], type: "function" });
      remaining = remaining.slice(funcMatch[0].length);
      continue;
    }

    tokens.push({ text: remaining[0], type: "plain" });
    remaining = remaining.slice(1);
  }

  return tokens;
}

const tokenColors: Record<TokenType, string> = {
  keyword: "text-[#c3f02c]",
  string: "text-[#fbbf24]",
  comment: "text-white/35",
  number: "text-[#fb923c]",
  property: "text-[#93c5fd]",
  function: "text-[#86efac]",
  plain: "text-white/80",
};

export function CodeBlock() {
  const lines = codeSnippet.split("\n");

  return (
    <div
      className="w-full rounded-3xl border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)]"
      role="region"
      aria-label="SafulPay Node.js SDK code example"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/3">
        <span className="w-3 h-3 rounded-full bg-white/20" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-white/20" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-white/20" aria-hidden="true" />
        <div className="ml-3 flex items-center gap-2">
          <span className="text-xs text-white/30 font-mono">transfer.js</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-color/15 border border-secondary-color/20">
          <span
            className="w-1.5 h-1.5 rounded-full bg-secondary-color"
            aria-hidden="true"
          />
          <span className="text-[10px] font-semibold text-secondary-color">
            Node.js
          </span>
        </div>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="px-5 py-5 text-sm font-mono leading-[1.8]">
          {lines.map((line, lineIndex) => {
            if (line === "") {
              return <div key={lineIndex} className="h-[1.8em]" />;
            }
            const tokens = tokenizeLine(line);
            return (
              <div key={lineIndex} className="flex">
                <span className="select-none w-8 text-right text-white/20 text-xs mr-5 shrink-0 leading-[1.8]">
                  {lineIndex + 1}
                </span>
                <span>
                  {tokens.map((token, tokenIndex) => (
                    <span key={tokenIndex} className={tokenColors[token.type]}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      </div>

      {/* Footer hint */}
      <div className="px-5 py-3 border-t border-white/8 bg-white/2 flex items-center justify-between">
        <span className="text-xs text-white/30 font-mono">
          @safulpay/node v1.4.2
        </span>
        <a
          href="https://docs.safulpay.com"
          className="text-xs text-secondary-color font-medium hover:text-secondary-color/80 transition-colors duration-150"
        >
          Full API reference →
        </a>
      </div>
    </div>
  );
}
