import { CheckCircle2, Calculator, TrendingUp, Clock, Shield, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FDInfo = () => {
  const advantages = [
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "Get precise maturity amounts with compound interest calculations for various compounding frequencies.",
    },
    {
      icon: TrendingUp,
      title: "Compare Returns",
      description: "Easily compare different investment scenarios by adjusting principal, rate, and tenure.",
    },
    {
      icon: Clock,
      title: "Time-Saving",
      description: "Instantly calculate complex FD returns without manual calculations or visiting bank branches.",
    },
    {
      icon: Shield,
      title: "Plan Better",
      description: "Make informed investment decisions by understanding your potential returns beforehand.",
    },
  ];

  const faqs = [
    {
      question: "Is the FD interest calculator free to use?",
      answer: "Yes, our FD calculator is completely free to use. There are no hidden charges or subscription fees. You can calculate your fixed deposit returns as many times as you want without any cost.",
    },
    {
      question: "How much time does it take to use the FD calculator?",
      answer: "Using our FD calculator takes less than a minute. Simply enter your principal amount, interest rate, tenure, and compounding frequency. The results are displayed instantly, saving you time compared to manual calculations.",
    },
    {
      question: "How does the FD calculator help in future financial planning?",
      answer: "The FD calculator helps you plan your finances by showing exact maturity amounts for different scenarios. You can experiment with various principal amounts, tenures, and interest rates to find the best investment strategy that aligns with your financial goals, whether it's for retirement, education, or building an emergency fund.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* How can an FD calculator help you? */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          How can an FD calculator help you?
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="mb-4">
            An FD calculator is an essential tool for anyone planning to invest in fixed deposits. It helps you understand 
            exactly how much your investment will grow over time, allowing you to make informed financial decisions.
          </p>
          <p className="mb-4">
            With our calculator, you can compare different investment scenarios by adjusting the principal amount, 
            interest rate, and tenure. This helps you find the optimal combination that meets your financial goals, 
            whether you're saving for a major purchase, building an emergency fund, or planning for retirement.
          </p>
          <p>
            The calculator also accounts for different compounding frequencies (monthly, quarterly, half-yearly, and yearly), 
            which can significantly impact your final returns. Understanding these nuances helps you choose the right FD 
            scheme from various financial institutions.
          </p>
        </div>
      </section>

      {/* The formula to determine FD maturity amount */}
      <section className="calculator-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          The formula to determine FD maturity amount
        </h2>
        <div className="space-y-6">
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <p className="text-lg font-mono font-semibold text-foreground mb-2">
              A = P × (1 + r/n)<sup>n×t</sup>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground w-8">A</span>
                <span className="text-muted-foreground">= Maturity Amount</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground w-8">P</span>
                <span className="text-muted-foreground">= Principal Amount (Initial Deposit)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground w-8">r</span>
                <span className="text-muted-foreground">= Annual Interest Rate (in decimal)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground w-8">n</span>
                <span className="text-muted-foreground">= Compounding Frequency per Year</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground w-8">t</span>
                <span className="text-muted-foreground">= Time Period in Years</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>Example:</strong> For a ₹1,00,000 deposit at 7% interest for 2 years with quarterly compounding: 
            A = 1,00,000 × (1 + 0.07/4)<sup>4×2</sup> = ₹1,14,888
          </p>
        </div>
      </section>

      {/* How to use the FD calculator */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          How to use the FD calculator?
        </h2>
        <div className="space-y-4">
          {[
            "Enter your principal amount - the amount you want to invest in the fixed deposit",
            "Set the interest rate offered by your bank (typically ranges from 5% to 8%)",
            "Choose your investment tenure using the slider or input field (in months)",
            "Select the compounding frequency - quarterly is most common in banks",
            "View your maturity amount, total interest earned, and effective annual rate instantly",
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
              </div>
              <p className="text-muted-foreground pt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages of using the FD calculator */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Advantages of using FD calculator
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <article
              key={advantage.title}
              className="info-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground">{advantage.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="info-card border-none"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-foreground text-left flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-7 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FDInfo;
