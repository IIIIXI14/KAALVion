import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { technicalTerms, searchTerms } from "@/lib/technicalTerms";

interface GlossaryProps {
  trigger?: React.ReactNode;
}

const Glossary = ({ trigger }: GlossaryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = searchQuery
    ? searchTerms(searchQuery)
    : Object.entries(technicalTerms).map(([term, definition]) => ({ term, definition }));

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className="text-sm text-white/70 hover:text-white transition-smooth">
            Help & Glossary
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] w-[90vw] sm:w-full overflow-hidden flex flex-col p-4 sm:p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-white">Technical Terms Glossary</DialogTitle>
          <p className="text-sm text-white/70 mt-2">
            Search for technical terms to understand them in plain language
          </p>
        </DialogHeader>
        
        <div className="relative mb-4 flex-shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 z-10" />
          <Input
            type="text"
            placeholder="Search terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 w-full bg-white/5 border-white/20 text-white placeholder:text-white/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2 min-h-0">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-8 text-white/60">
              No terms found matching &quot;{searchQuery}&quot;
            </div>
          ) : (
            filteredTerms.map(({ term, definition }) => (
              <div
                key={term}
                className="border border-white/10 rounded-lg p-4 bg-white/5 hover:bg-white/10 transition-colors break-words"
              >
                <h3 className="font-semibold text-lg mb-2 text-white break-words">{term}</h3>
                <p className="text-sm text-white/80 mb-2 break-words leading-relaxed">{definition.simple}</p>
                {definition.example && (
                  <p className="text-xs text-white/60 italic mb-2 break-words leading-relaxed">
                    <strong className="text-white/80">Example:</strong> {definition.example}
                  </p>
                )}
                {definition.full && (
                  <details className="mt-2">
                    <summary className="text-xs text-[var(--primary)] cursor-pointer hover:underline select-none">
                      Show full definition
                    </summary>
                    <p className="text-xs text-white/70 mt-2 break-words leading-relaxed">{definition.full}</p>
                  </details>
                )}
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Glossary;

