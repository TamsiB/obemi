import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

export const BANK_DETAILS = [
  { label: "Bank", value: "STANBIC BANK" },
  { label: "Branch", value: "Two Rivers Mall Branch" },
  { label: "Account Name", value: "OBEMI INVESTMENTS" },
  { label: "Pay Bill", value: "600100" },
  { label: "Account Number", value: "0100007176443" },
];

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    toast.success(`${label} copied to clipboard`);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-[0.6875rem] font-bold tracking-[0.12em] text-muted-foreground uppercase transition-colors duration-300 hover:border-primary hover:text-primary"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function BankDetailsList() {
  return (
    <dl className="divide-y divide-border">
      {BANK_DETAILS.map((detail) => (
        <div
          key={detail.label}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-6 py-4 lg:px-8"
        >
          <div className="min-w-0">
            <dt className="text-[0.6875rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">
              {detail.label}
            </dt>
            <dd className="mt-1 truncate font-display text-lg text-foreground md:text-xl">
              {detail.value}
            </dd>
          </div>
          <CopyButton value={detail.value} label={detail.label} />
        </div>
      ))}
    </dl>
  );
}
