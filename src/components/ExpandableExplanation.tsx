import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableExplanationProps {
  term: string;
  explanation: string;
  example?: string;
  className?: string;
  variant?: "default" | "inline";
}

const ExpandableExplanation = ({
  term,
  explanation,
  example,
  className,
  variant = "default"
}: ExpandableExplanationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (variant === "inline") {
    return (
      <span className={cn("inline-flex items-center gap-1", className)}>
        <span>{term}</span>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors"
          aria-label={`Explain ${term}`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
        {isExpanded && (
          <span className="ml-2 text-xs text-white/70 italic">
            {explanation}
            {example && ` (e.g., ${example})`}
          </span>
        )}
      </span>
    );
  }

  return (
    <div className={cn("border border-white/10 rounded-lg bg-white/5 p-3 sm:p-4", className)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-2 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
          <span className="text-sm font-semibold text-white">What does &quot;{term}&quot; mean?</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-white/60 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white/60 flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-3 space-y-2 text-sm text-white/80">
          <p>{explanation}</p>
          {example && (
            <p className="text-xs text-white/60 italic">
              <strong>Example:</strong> {example}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpandableExplanation;

