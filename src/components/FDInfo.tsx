import { Shield, TrendingUp, Clock, Landmark, CheckCircle2 } from "lucide-react";

const FDInfo = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "FDs are one of the safest investment options with guaranteed returns and DICGC insurance up to ₹5 lakhs.",
    },
    {
      icon: TrendingUp,
      title: "Guaranteed Returns",
      description: "Fixed interest rates ensure predictable returns regardless of market fluctuations.",
    },
    {
      icon: Clock,
      title: "Flexible Tenure",
      description: "Choose tenure from 7 days to 10 years based on your financial goals and liquidity needs.",
    },
    {
      icon: Landmark,
      title: "Easy Loan Facility",
      description: "Get loans up to 90% of your FD value at attractive interest rates without breaking your deposit.",
    },
  ];

  const faqs = [
    {
      question: "What is a Fixed Deposit (FD)?",
      answer: "A Fixed Deposit is a financial instrument provided by banks and NBFCs where you deposit a lump sum for a fixed tenure at a predetermined interest rate. At maturity, you receive your principal along with the accrued interest.",
    },
    {
      question: "How is FD interest calculated?",
      answer: "FD interest is calculated using compound interest formula: A = P(1 + r/n)^(nt), where P is principal, r is annual interest rate, n is compounding frequency, and t is tenure in years. Our calculator uses this formula for accurate results.",
    },
    {
      question: "What is the difference between simple and compound interest?",
      answer: "Simple interest is calculated only on the principal amount, while compound interest is calculated on principal plus accumulated interest. FDs typically use compound interest, resulting in higher returns.",
    },
    {
      question: "Can I withdraw my FD before maturity?",
      answer: "Yes, most banks allow premature withdrawal with a penalty of 0.5% to 1% on the interest rate. Some banks also offer sweep-in FDs that provide liquidity without breaking the entire deposit.",
    },
    {
      question: "Are FD returns taxable?",
      answer: "Yes, interest earned on FDs is fully taxable as per your income tax slab. TDS is deducted at 10% if interest exceeds ₹40,000 per year (₹50,000 for senior citizens). You can claim exemption under Section 80C for tax-saving FDs with 5-year lock-in.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Benefits Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Why Invest in Fixed Deposits?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="info-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="calculator-card">
        <h2 className="text-2xl font-bold text-foreground mb-6">How to Use This FD Calculator</h2>
        <div className="space-y-4">
          {[
            "Enter your principal amount (the amount you want to invest)",
            "Set the interest rate offered by your bank",
            "Choose your investment tenure in months or years",
            "Select the compounding frequency (quarterly is most common)",
            "View your maturity amount and total interest instantly",
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
              </div>
              <p className="text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="info-card animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                {faq.question}
              </h3>
              <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FDInfo;
