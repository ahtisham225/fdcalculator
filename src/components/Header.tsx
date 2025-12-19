import { Calculator, PiggyBank } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
            <PiggyBank className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline">FD Calculator</span>
        </a>
        <nav className="flex items-center gap-6">
          <a 
            href="#calculator" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Calculator
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
