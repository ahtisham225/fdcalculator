import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, TrendingUp, Shield, Clock, Percent, Building, ArrowLeftRight, Calculator } from "lucide-react";
import fdHeroImage from "@/assets/fd-hero-savings.jpg";
import fdSecurityImage from "@/assets/fd-security.jpg";

const WhatIsFixedDeposit = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Fixed Deposit? A Complete Beginner's Guide",
    "description": "Learn what a Fixed Deposit (FD) is, how it works, its benefits, types, and how to calculate returns. Complete beginner's guide to FD investments.",
    "author": {
      "@type": "Organization",
      "name": "FD Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FD Calculator",
      "url": "https://fdcalculator.net"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-25",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fdcalculator.net/what-is-fixed-deposit/"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Fixed Deposit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Fixed Deposit (FD) is a financial instrument offered by banks and financial institutions where you deposit a lump sum amount for a fixed tenure at a predetermined interest rate. The money remains locked for the chosen period, and you earn guaranteed returns."
        }
      },
      {
        "@type": "Question",
        "name": "Is Fixed Deposit safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Fixed Deposits are considered one of the safest investment options. Bank deposits are typically insured by government deposit insurance schemes, protecting your principal up to a certain limit. The returns are guaranteed and not subject to market fluctuations."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum amount for Fixed Deposit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum amount for opening a Fixed Deposit varies by bank and country. Generally, it ranges from $100 to $1,000 for most banks. Some digital banks offer FDs with even lower minimum deposits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I withdraw my Fixed Deposit before maturity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most banks allow premature withdrawal of Fixed Deposits, but it usually comes with a penalty. The penalty is typically a reduction in the interest rate, often 0.5% to 1% lower than the originally agreed rate."
        }
      },
      {
        "@type": "Question",
        "name": "How is Fixed Deposit interest calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixed Deposit interest is calculated using compound interest formula: A = P(1 + r/n)^(nt), where P is principal, r is annual interest rate, n is compounding frequency, and t is time in years. Use our free FD calculator to compute your exact returns."
        }
      }
    ]
  };

  const benefits = [
    {
      icon: Shield,
      title: "Capital Protection",
      description: "Your principal amount is safe and protected by deposit insurance in most countries."
    },
    {
      icon: Percent,
      title: "Guaranteed Returns",
      description: "Fixed interest rates ensure predictable returns regardless of market conditions."
    },
    {
      icon: Clock,
      title: "Flexible Tenure",
      description: "Choose deposit periods ranging from 7 days to 10 years based on your goals."
    },
    {
      icon: TrendingUp,
      title: "Higher Than Savings",
      description: "FD interest rates are typically 1-3% higher than regular savings accounts."
    },
    {
      icon: Building,
      title: "Loan Facility",
      description: "Many banks offer loans against FDs at lower interest rates than personal loans."
    },
    {
      icon: CheckCircle,
      title: "Easy to Open",
      description: "Simple documentation and quick online account opening with most banks."
    }
  ];

  const fdTypes = [
    {
      type: "Regular Fixed Deposit",
      description: "Standard FD with fixed tenure and interest rate. Interest can be paid monthly, quarterly, or at maturity."
    },
    {
      type: "Tax-Saving Fixed Deposit",
      description: "Special FDs with tax benefits under specific government schemes. Usually has a lock-in period of 5 years."
    },
    {
      type: "Senior Citizen Fixed Deposit",
      description: "FDs offering 0.25% to 0.75% higher interest rates for customers above 60 years of age."
    },
    {
      type: "Cumulative Fixed Deposit",
      description: "Interest is compounded and paid at maturity along with the principal, maximizing returns."
    },
    {
      type: "Non-Cumulative Fixed Deposit",
      description: "Interest is paid out periodically (monthly, quarterly, annually) rather than at maturity."
    },
    {
      type: "Flexi Fixed Deposit",
      description: "Linked to savings account, allowing partial withdrawals while earning FD interest rates."
    }
  ];

  return (
    <>
      <Helmet>
        <title>What is Fixed Deposit? Complete Beginner's Guide 2024 | FD Calculator</title>
        <meta 
          name="description" 
          content="Learn what a Fixed Deposit (FD) is, how it works, types of FDs, benefits, and how to calculate returns. Complete beginner's guide to FD investments with examples." 
        />
        <meta 
          name="keywords" 
          content="what is fixed deposit, FD meaning, fixed deposit definition, how FD works, types of fixed deposit, FD benefits, fixed deposit guide, FD for beginners" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fdcalculator.net/what-is-fixed-deposit/" />
        {/* Open Graph */}
        <meta property="og:title" content="What is Fixed Deposit? Complete Beginner's Guide 2024" />
        <meta property="og:description" content="Learn what a Fixed Deposit is, how it works, its benefits, and calculate your FD returns with our free calculator." />
        <meta property="og:url" content="https://fdcalculator.net/what-is-fixed-deposit/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FD Calculator" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://fdcalculator.net/og-image.png" />
        <meta property="article:published_time" content="2024-01-15" />
        <meta property="article:modified_time" content="2024-12-25" />
        <meta property="article:section" content="Finance" />
        <meta property="article:tag" content="Fixed Deposit" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What is Fixed Deposit? Complete Beginner's Guide" />
        <meta name="twitter:description" content="Learn what a Fixed Deposit is, how it works, and calculate your FD returns." />
        <meta name="twitter:site" content="@fdcalculator" />
        <meta name="twitter:image" content="https://fdcalculator.net/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <nav className="text-sm mb-6 text-muted-foreground">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/articles/" className="hover:text-primary">Articles</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">What is Fixed Deposit</span>
              </nav>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    What is Fixed Deposit?
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    A complete beginner's guide to understanding Fixed Deposits, how they work, 
                    their benefits, and how to maximize your returns.
                  </p>
                </div>
                <div className="mt-6 lg:mt-0">
                  <img 
                    src={fdHeroImage} 
                    alt="Fixed Deposit savings and investment growth concept showing piggy bank with money plant" 
                    className="rounded-xl shadow-lg w-full h-auto max-w-md mx-auto lg:max-w-none"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <article className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              
              {/* Definition Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Understanding Fixed Deposits
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A <strong>Fixed Deposit (FD)</strong>, also known as a Term Deposit or Time Deposit, 
                  is a financial instrument offered by banks and non-banking financial institutions. 
                  When you open an FD, you deposit a lump sum amount for a predetermined period at a 
                  fixed interest rate.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Unlike a regular savings account where you can withdraw money anytime, an FD locks 
                  your money for the chosen tenure. In return, you receive a higher interest rate than 
                  savings accounts, making it an attractive option for risk-averse investors seeking 
                  guaranteed returns. Learn more about the{" "}
                  <Link to="/fd-vs-savings-account/" className="text-primary hover:underline font-medium">
                    key differences between FD and Savings Account
                  </Link>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  According to the{" "}
                  <a 
                    href="https://www.investopedia.com/terms/t/timedeposit.asp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Investopedia definition
                  </a>, time deposits are among the safest investment vehicles, backed by 
                  government deposit insurance in most countries.
                </p>
              </section>

              {/* How FD Works */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  How Does a Fixed Deposit Work?
                </h2>
                <div className="bg-card border border-border rounded-lg p-6 mb-6">
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">1</span>
                      <div>
                        <h3 className="font-medium text-foreground">Choose Amount & Tenure</h3>
                        <p className="text-muted-foreground text-sm">Select how much you want to deposit and for how long (7 days to 10 years).</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">2</span>
                      <div>
                        <h3 className="font-medium text-foreground">Lock-in Your Deposit</h3>
                        <p className="text-muted-foreground text-sm">The bank locks your money at an agreed interest rate for the chosen period.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">3</span>
                      <div>
                        <h3 className="font-medium text-foreground">Interest Accrues</h3>
                        <p className="text-muted-foreground text-sm">Interest compounds quarterly or monthly, growing your investment over time.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">4</span>
                      <div>
                        <h3 className="font-medium text-foreground">Maturity Payout</h3>
                        <p className="text-muted-foreground text-sm">At maturity, receive your principal plus all accumulated interest.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <p className="text-muted-foreground">
                  Want to see how much your FD will grow? Use our{" "}
                  <Link to="/" className="text-primary hover:underline font-medium">
                    free FD Calculator
                  </Link>{" "}
                  to calculate your exact maturity amount instantly.
                </p>
              </section>

              {/* Benefits Section */}
              <section className="mb-12">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                      Benefits of Fixed Deposits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div 
                          key={index}
                          className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <benefit.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                              <p className="text-sm text-muted-foreground">{benefit.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <img 
                      src={fdSecurityImage} 
                      alt="Secure bank vault representing fixed deposit safety and guaranteed returns" 
                      className="rounded-xl shadow-lg w-full h-auto max-w-xs mx-auto lg:max-w-none lg:sticky lg:top-24"
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>

              {/* Types of FD */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Types of Fixed Deposits
                </h2>
                <div className="space-y-4">
                  {fdTypes.map((fd, index) => (
                    <div 
                      key={index}
                      className="bg-card border border-border rounded-lg p-5"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{fd.type}</h3>
                      <p className="text-muted-foreground text-sm">{fd.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FD Interest Calculation */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  How is FD Interest Calculated?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Fixed Deposit interest is calculated using the compound interest formula:
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-4">
                  <p className="text-center text-lg font-mono font-semibold text-foreground">
                    A = P × (1 + r/n)<sup>n×t</sup>
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li><strong>A</strong> = Maturity Amount</li>
                  <li><strong>P</strong> = Principal (initial deposit)</li>
                  <li><strong>r</strong> = Annual interest rate (in decimal)</li>
                  <li><strong>n</strong> = Compounding frequency per year</li>
                  <li><strong>t</strong> = Time period in years</li>
                </ul>
                <p className="text-muted-foreground">
                  For example, if you deposit $10,000 at 6% annual interest for 3 years with quarterly 
                  compounding, your maturity amount would be approximately $11,956. Calculate your 
                  specific returns with our{" "}
                  <Link to="/" className="text-primary hover:underline font-medium">
                    FD Calculator
                  </Link>.
                </p>
              </section>

              {/* Things to Consider */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Things to Consider Before Opening an FD
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Interest Rates:</strong> Compare rates across different banks to get the best returns.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Tenure:</strong> Longer tenures often offer better rates but reduce liquidity.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Premature Withdrawal:</strong> Check penalty charges if you might need early access.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Tax Implications:</strong> FD interest is taxable income in most jurisdictions.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Deposit Insurance:</strong> Verify the coverage limit for bank deposits in your country.</span>
                  </li>
                </ul>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      What is a Fixed Deposit?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      A Fixed Deposit (FD) is a financial instrument offered by banks where you deposit 
                      a lump sum amount for a fixed tenure at a predetermined interest rate. The money 
                      remains locked for the chosen period, and you earn guaranteed returns that are 
                      typically higher than regular savings accounts.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Is Fixed Deposit safe?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, Fixed Deposits are considered one of the safest investment options. Bank 
                      deposits are typically insured by government deposit insurance schemes, protecting 
                      your principal up to a certain limit. The returns are guaranteed and not subject 
                      to market fluctuations, making FDs ideal for risk-averse investors.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      What is the minimum amount for Fixed Deposit?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      The minimum amount varies by bank and country. Generally, it ranges from $100 to 
                      $1,000 for most traditional banks. Some digital banks and fintech platforms offer 
                      FDs with even lower minimum deposits, sometimes as low as $1.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Can I withdraw my Fixed Deposit before maturity?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, most banks allow premature withdrawal of Fixed Deposits, but it usually comes 
                      with a penalty. The penalty is typically a reduction in the interest rate, often 
                      0.5% to 1% lower than the originally agreed rate. Some banks may also charge a 
                      fixed fee for early withdrawal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      How is Fixed Deposit interest calculated?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Fixed Deposit interest is calculated using the compound interest formula: 
                      A = P(1 + r/n)^(nt), where P is the principal, r is the annual interest rate, 
                      n is the compounding frequency, and t is time in years. Use our{" "}
                      <Link to="/" className="text-primary hover:underline">free FD calculator</Link>{" "}
                      to compute your exact returns instantly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">
                      What happens when my FD matures?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      When your FD matures, you have several options: withdraw the entire amount 
                      (principal + interest), renew the FD for another term at current interest rates, 
                      or set up auto-renewal before maturity. If you don't provide instructions, most 
                      banks automatically renew the FD at prevailing rates.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Related Articles Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link 
                    to="/fd-vs-savings-account/"
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                      <ArrowLeftRight className="w-4 h-4" />
                      <span>Comparison Guide</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      FD vs Savings Account: Which is Better?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Compare Fixed Deposits with Savings Accounts to understand which option offers better returns and liquidity for your goals.
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      Read more <span className="ml-1">→</span>
                    </span>
                  </Link>
                  <Link 
                    to="/"
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                      <Calculator className="w-4 h-4" />
                      <span>Tool</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      FD Calculator - Calculate Your Returns
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Use our free calculator to instantly compute your FD maturity amount and interest earnings.
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      Calculate now <span className="ml-1">→</span>
                    </span>
                  </Link>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Ready to Calculate Your FD Returns?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Use our free FD Calculator to instantly compute your maturity amount and interest earnings.
                </p>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Calculate Now →
                </Link>
              </section>

            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WhatIsFixedDeposit;
