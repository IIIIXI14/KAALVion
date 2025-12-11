import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getTermDefinition } from "@/lib/technicalTerms";

interface TechnicalTermTooltipProps {
  term: string;
  children: ReactNode;
  customExplanation?: string;
  className?: string;
}

const TechnicalTermTooltip = ({
  term,
  children,
  customExplanation,
  className
}: TechnicalTermTooltipProps) => {
  const definition = customExplanation ? { simple: customExplanation } : getTermDefinition(term);
  
  if (!definition) {
    return <span className={className}>{children}</span>;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={className ? className : "underline decoration-dotted decoration-[var(--primary)]/50 cursor-help"}>
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="font-semibold mb-1">{term}</p>
          <p className="text-sm">{definition.simple}</p>
          {definition.example && (
            <p className="text-xs text-muted-foreground mt-1 italic">
              Example: {definition.example}
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechnicalTermTooltip;

