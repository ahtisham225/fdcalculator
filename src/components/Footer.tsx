import { PiggyBank, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 mt-16">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <PiggyBank className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">FD Calculator</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Free online Fixed Deposit calculator for accurate maturity calculations.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for better financial planning
          </p>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FD Calculator. All calculations are for informational purposes only. 
            Please verify with your bank for exact rates and terms.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
