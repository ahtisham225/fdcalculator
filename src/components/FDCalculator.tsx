import { useState, useMemo } from "react";
import { Calculator, IndianRupee, Percent, Calendar, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface CalculationResult {
  maturityAmount: number;
  totalInterest: number;
  effectiveRate: number;
}

const FDCalculator = () => {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(7);
  const [tenure, setTenure] = useState<number>(12);
  const [tenureType, setTenureType] = useState<"months" | "years">("months");
  const [compounding, setCompounding] = useState<string>("quarterly");

  const compoundingFrequency: Record<string, number> = {
    monthly: 12,
    quarterly: 4,
    "half-yearly": 2,
    yearly: 1,
  };

  const result = useMemo<CalculationResult>(() => {
    const tenureInYears = tenureType === "years" ? tenure : tenure / 12;
    const n = compoundingFrequency[compounding];
    const r = rate / 100;

    // Compound Interest Formula: A = P(1 + r/n)^(nt)
    const maturityAmount = principal * Math.pow(1 + r / n, n * tenureInYears);
    const totalInterest = maturityAmount - principal;
    const effectiveRate = (Math.pow(1 + r / n, n) - 1) * 100;

    return {
      maturityAmount,
      totalInterest,
      effectiveRate,
    };
  }, [principal, rate, tenure, tenureType, compounding]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calculator Inputs */}
      <div className="calculator-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Calculate Your FD Returns</h2>
        </div>

        <div className="space-y-6">
          {/* Principal Amount */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="principal" className="text-sm font-medium text-foreground">
                Principal Amount
              </Label>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                <IndianRupee className="w-4 h-4" />
                {principal.toLocaleString("en-IN")}
              </div>
            </div>
            <Slider
              value={[principal]}
              onValueChange={(value) => setPrincipal(value[0])}
              min={1000}
              max={10000000}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>₹1,000</span>
              <span>₹1,00,00,000</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="rate" className="text-sm font-medium text-foreground">
                Interest Rate (% p.a.)
              </Label>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                <Percent className="w-4 h-4" />
                {rate}%
              </div>
            </div>
            <Slider
              value={[rate]}
              onValueChange={(value) => setRate(value[0])}
              min={1}
              max={15}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="tenure" className="text-sm font-medium text-foreground">
                Investment Tenure
              </Label>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                <Calendar className="w-4 h-4" />
                {tenure} {tenureType}
              </div>
            </div>
            <div className="flex gap-3">
              <Slider
                value={[tenure]}
                onValueChange={(value) => setTenure(value[0])}
                min={1}
                max={tenureType === "years" ? 10 : 120}
                step={1}
                className="flex-1"
              />
              <Select value={tenureType} onValueChange={(value: "months" | "years") => setTenureType(value)}>
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months">Months</SelectItem>
                  <SelectItem value="years">Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Compounding Frequency */}
          <div className="space-y-3">
            <Label htmlFor="compounding" className="text-sm font-medium text-foreground">
              Compounding Frequency
            </Label>
            <Select value={compounding} onValueChange={setCompounding}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="half-yearly">Half-Yearly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <div className="result-card animate-scale-in">
          <div className="flex items-center gap-2 mb-4 opacity-90">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Maturity Amount</span>
          </div>
          <p className="text-4xl md:text-5xl font-bold animate-count-up">
            {formatCurrency(result.maturityAmount)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="info-card">
            <p className="text-sm text-muted-foreground mb-1">Principal Amount</p>
            <p className="text-xl font-semibold text-foreground">{formatCurrency(principal)}</p>
          </div>
          <div className="info-card">
            <p className="text-sm text-muted-foreground mb-1">Total Interest Earned</p>
            <p className="text-xl font-semibold text-accent">{formatCurrency(result.totalInterest)}</p>
          </div>
        </div>

        <div className="info-card">
          <p className="text-sm text-muted-foreground mb-1">Effective Annual Rate</p>
          <p className="text-xl font-semibold text-foreground">{result.effectiveRate.toFixed(2)}%</p>
          <p className="text-xs text-muted-foreground mt-1">
            Due to {compounding} compounding, your effective rate is higher than the nominal rate.
          </p>
        </div>

        {/* Visual Breakdown */}
        <div className="info-card">
          <p className="text-sm font-medium text-foreground mb-3">Investment Breakdown</p>
          <div className="h-4 rounded-full overflow-hidden bg-secondary flex">
            <div
              className="h-full gradient-bg transition-all duration-500"
              style={{ width: `${(principal / result.maturityAmount) * 100}%` }}
            />
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${(result.totalInterest / result.maturityAmount) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full gradient-bg" />
              <span className="text-muted-foreground">Principal ({((principal / result.maturityAmount) * 100).toFixed(1)}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground">Interest ({((result.totalInterest / result.maturityAmount) * 100).toFixed(1)}%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDCalculator;
