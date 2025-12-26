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
import { Percent, TrendingUp, Building, Globe, Calendar, Shield, BookOpen, ArrowLeftRight, Calculator } from "lucide-react";

const FDInterestRates = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FD Interest Rates: How Banks Determine Your Returns",
    "description": "Learn how banks determine Fixed Deposit interest rates, factors that influence FD rates, and strategies to maximize your FD returns.",
    "author": {
      "@type": "Organization",
      "name": "FD Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FD Calculator",
      "url": "https://fdcalculator.net"
    },
    "datePublished": "2024-01-25",
    "dateModified": "2024-12-26",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fdcalculator.net/fd-interest-rates/"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do banks decide FD interest rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banks determine FD interest rates based on multiple factors including central bank policies, inflation rates, liquidity needs, competition, economic conditions, and the tenure of the deposit. Longer tenures typically offer higher rates."
        }
      },
      {
        "@type": "Question",
        "name": "Why do FD rates differ between banks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FD rates vary between banks due to differences in their funding requirements, deposit base, lending activities, operational costs, and competitive positioning. Smaller banks often offer higher rates to attract deposits."
        }
      },
      {
        "@type": "Question",
        "name": "Do senior citizens get higher FD rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most banks offer 0.25% to 0.75% higher interest rates on Fixed Deposits for senior citizens (typically those aged 60 and above) as a special benefit."
        }
      },
      {
        "@type": "Question",
        "name": "How often do FD interest rates change?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banks can change FD rates at any time based on market conditions. However, once you lock in an FD, your rate remains fixed for the entire tenure regardless of future rate changes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the relationship between inflation and FD rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FD rates are generally set above the inflation rate to provide positive real returns. When inflation rises, central banks often increase rates, leading to higher FD rates. Ideally, your FD rate should exceed inflation for wealth preservation."
        }
      }
    ]
  };

  const factors = [
    {
      icon: Building,
      title: "Central Bank Policy",
      description: "When central banks raise or lower benchmark rates, commercial banks adjust their FD rates accordingly. Higher policy rates usually mean better FD returns."
    },
    {
      icon: TrendingUp,
      title: "Inflation Rate",
      description: "Banks set FD rates considering inflation to ensure depositors earn positive real returns. Higher inflation typically leads to higher FD rates."
    },
    {
      icon: Globe,
      title: "Economic Conditions",
      description: "During economic slowdowns, banks may lower rates due to reduced lending demand. In growth periods, rates often increase to attract more deposits."
    },
    {
      icon: Calendar,
      title: "Deposit Tenure",
      description: "Longer-term deposits typically earn higher interest as banks can use funds for extended periods. Short-term FDs usually offer lower rates."
    },
    {
      icon: Shield,
      title: "Bank's Liquidity Needs",
      description: "Banks needing more deposits may offer competitive rates. Well-funded banks with excess liquidity might offer lower rates."
    },
    {
      icon: Percent,
      title: "Competition",
      description: "Banks compete for deposits by offering attractive rates. Online banks often provide higher rates due to lower operational costs."
    }
  ];

  const tenureRates = [
    { tenure: "7-14 days", rateRange: "3.0% - 4.0%", notes: "Lowest rates, ultra-short term" },
    { tenure: "15-45 days", rateRange: "3.5% - 4.5%", notes: "Short-term parking of funds" },
    { tenure: "46-90 days", rateRange: "4.0% - 5.0%", notes: "Quarter-based investments" },
    { tenure: "91-180 days", rateRange: "4.5% - 5.5%", notes: "Half-yearly deposits" },
    { tenure: "181 days - 1 year", rateRange: "5.0% - 6.5%", notes: "Popular tenure choice" },
    { tenure: "1-2 years", rateRange: "5.5% - 7.0%", notes: "Often the sweet spot for rates" },
    { tenure: "2-3 years", rateRange: "5.5% - 7.0%", notes: "Medium-term commitment" },
    { tenure: "3-5 years", rateRange: "5.0% - 6.5%", notes: "Long-term savings" },
    { tenure: "5-10 years", rateRange: "5.0% - 6.5%", notes: "Very long-term, rates may plateau" }
  ];

  return (
    <>
      <Helmet>
        <title>FD Interest Rates Explained: How Banks Determine Your Returns | FD Calculator</title>
        <meta 
          name="description" 
          content="Understand how banks determine Fixed Deposit interest rates. Learn about factors affecting FD rates, rate comparison by tenure, and tips to maximize your returns." 
        />
        <meta 
          name="keywords" 
          content="FD interest rates, how are FD rates determined, fixed deposit rates explained, bank FD rates, FD rate factors, best FD rates, FD rates by tenure" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fdcalculator.net/fd-interest-rates/" />
        {/* Open Graph */}
        <meta property="og:title" content="FD Interest Rates: How Banks Determine Your Returns" />
        <meta property="og:description" content="Learn how banks set Fixed Deposit rates and what factors influence your FD returns." />
        <meta property="og:url" content="https://fdcalculator.net/fd-interest-rates/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FD Calculator" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://fdcalculator.net/og-image.png" />
        <meta property="article:published_time" content="2024-01-25" />
        <meta property="article:modified_time" content="2024-12-26" />
        <meta property="article:section" content="Finance" />
        <meta property="article:tag" content="Fixed Deposit" />
        <meta property="article:tag" content="Interest Rates" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FD Interest Rates: How Banks Determine Your Returns" />
        <meta name="twitter:description" content="Learn how banks set FD rates and maximize your returns." />
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
                <span className="text-foreground">FD Interest Rates</span>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Percent className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  FD Interest Rates Explained
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Understand how banks determine Fixed Deposit interest rates and learn strategies 
                to maximize your returns.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <article className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  How Do Banks Set FD Interest Rates?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Fixed Deposit interest rates are not arbitrary numbers—they are carefully calculated 
                  based on various economic factors and bank-specific considerations. Understanding 
                  these factors can help you make smarter investment decisions and time your FD 
                  investments for maximum returns.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you're new to Fixed Deposits, we recommend first reading our{" "}
                  <Link to="/what-is-fixed-deposit/" className="text-primary hover:underline font-medium">
                    complete guide to Fixed Deposits
                  </Link>{" "}
                  to understand the basics before diving into rate mechanics.
                </p>
              </section>

              {/* Key Factors */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  6 Key Factors That Determine FD Rates
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {factors.map((factor, index) => (
                    <div 
                      key={index}
                      className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <factor.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{factor.title}</h3>
                          <p className="text-sm text-muted-foreground">{factor.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Rate by Tenure */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Typical FD Rates by Tenure
                </h2>
                <p className="text-muted-foreground mb-6">
                  Interest rates vary significantly based on the deposit tenure. Here's a general 
                  guide to help you understand the rate structure:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-semibold text-foreground border border-border">Tenure</th>
                        <th className="text-left p-4 font-semibold text-foreground border border-border">Rate Range</th>
                        <th className="text-left p-4 font-semibold text-foreground border border-border">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tenureRates.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                          <td className="p-4 border border-border font-medium text-foreground">{row.tenure}</td>
                          <td className="p-4 border border-border text-primary font-semibold">{row.rateRange}</td>
                          <td className="p-4 border border-border text-muted-foreground text-sm">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  * Rates are indicative and vary by bank and economic conditions. Use our{" "}
                  <Link to="/" className="text-primary hover:underline">FD Calculator</Link>{" "}
                  to compute exact returns for your deposit.
                </p>
              </section>

              {/* Why Rates Differ */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Why Do FD Rates Differ Between Banks?
                </h2>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">1. Funding Requirements</h3>
                      <p className="text-muted-foreground text-sm">
                        Banks with aggressive lending targets need more deposits and may offer 
                        higher rates. Well-capitalized banks might offer slightly lower rates.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">2. Operational Costs</h3>
                      <p className="text-muted-foreground text-sm">
                        Online-only banks have lower overhead costs (no physical branches) and 
                        can pass these savings to customers as higher FD rates.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">3. Market Position</h3>
                      <p className="text-muted-foreground text-sm">
                        Smaller banks often offer higher rates to compete with established players 
                        and attract new customers. Large banks may rely on brand trust instead.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">4. Deposit Base</h3>
                      <p className="text-muted-foreground text-sm">
                        Banks with a strong current/savings account base have access to low-cost 
                        funds and may not need to offer high FD rates.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Special Rates */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Special FD Rates You Should Know About
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Senior Citizen Rates</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Most banks offer <strong>0.25% to 0.75% extra</strong> interest to senior 
                      citizens (60+ years). This can significantly boost returns over time.
                    </p>
                    <p className="text-xs text-primary">Always inquire about senior citizen benefits!</p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Tax-Saving FD Rates</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Tax-saving FDs with 5-year lock-in periods may offer slightly different 
                      rates than regular FDs. Compare both before investing.
                    </p>
                    <p className="text-xs text-muted-foreground">Check tax benefits in your country</p>
                  </div>
                </div>
              </section>

              {/* Tips Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Tips to Get the Best FD Rates
                </h2>
                <div className="bg-card border border-border rounded-xl p-6">
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                      <div>
                        <h3 className="font-medium text-foreground">Compare Multiple Banks</h3>
                        <p className="text-muted-foreground text-sm">Don't just go with your existing bank. Compare rates across 5-6 banks including online banks.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                      <div>
                        <h3 className="font-medium text-foreground">Consider FD Laddering</h3>
                        <p className="text-muted-foreground text-sm">Split your investment across multiple FDs with different maturities to balance liquidity and returns.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                      <div>
                        <h3 className="font-medium text-foreground">Watch Rate Cycles</h3>
                        <p className="text-muted-foreground text-sm">Lock in longer tenures when rates are high; keep shorter tenures when rates are expected to rise.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">4</span>
                      <div>
                        <h3 className="font-medium text-foreground">Look for Special Offers</h3>
                        <p className="text-muted-foreground text-sm">Banks often run limited-time offers with bonus rates, especially during festivals or quarter-ends.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">5</span>
                      <div>
                        <h3 className="font-medium text-foreground">Choose Optimal Tenure</h3>
                        <p className="text-muted-foreground text-sm">The 1-2 year tenure often offers the best rates. Very long tenures may not always give proportionally higher returns.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Real Returns */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Understanding Real Returns
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The nominal FD rate isn't your actual return. To calculate real returns, 
                  you need to account for:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Inflation</div>
                    <p className="text-sm text-muted-foreground">Real return = FD rate - Inflation rate</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">Taxes</div>
                    <p className="text-sm text-muted-foreground">Interest income may be taxable</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">Compounding</div>
                    <p className="text-sm text-muted-foreground">Quarterly compounding beats annual</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Learn how FD compares with other options in our{" "}
                  <Link to="/fd-vs-savings-account/" className="text-primary hover:underline font-medium">
                    FD vs Savings Account comparison
                  </Link>.
                </p>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="item-1" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      How do banks decide FD interest rates?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Banks determine FD interest rates based on multiple factors including central 
                      bank policies, inflation rates, liquidity needs, competition, economic conditions, 
                      and the tenure of the deposit. The central bank's benchmark rate is the primary 
                      influencer—when it goes up, FD rates typically follow.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      Why do FD rates differ between banks?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      FD rates vary between banks due to differences in their funding requirements, 
                      deposit base, lending activities, operational costs, and competitive positioning. 
                      Smaller banks and online banks often offer higher rates to attract deposits, while 
                      large established banks may offer lower rates relying on brand trust.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      Do senior citizens get higher FD rates?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, most banks offer 0.25% to 0.75% higher interest rates on Fixed Deposits 
                      for senior citizens (typically those aged 60 and above) as a special benefit. 
                      This extra rate can make a significant difference over long tenures.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      How often do FD interest rates change?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Banks can change FD rates at any time based on market conditions and monetary 
                      policy changes. However, once you lock in an FD, your rate remains fixed for 
                      the entire tenure regardless of future rate changes—this is one of the key 
                      advantages of Fixed Deposits.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      What is FD laddering and how does it help?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      FD laddering is a strategy where you split your investment across multiple FDs 
                      with different maturity dates (e.g., 1 year, 2 years, 3 years). This provides 
                      regular liquidity, reduces interest rate risk, and allows you to reinvest at 
                      potentially better rates as each FD matures.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      What is the relationship between inflation and FD rates?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      FD rates are generally set considering inflation to provide positive real returns. 
                      When inflation rises, central banks often increase benchmark rates, leading to 
                      higher FD rates. Ideally, your FD rate should exceed inflation—otherwise, your 
                      money loses purchasing power despite earning interest.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Related Articles Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <Link 
                    to="/what-is-fixed-deposit/"
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Beginner's Guide</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      What is Fixed Deposit?
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Learn the basics of Fixed Deposits—how they work, types, and benefits.
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium mt-3">
                      Read more →
                    </span>
                  </Link>
                  <Link 
                    to="/fd-vs-savings-account/"
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                      <ArrowLeftRight className="w-4 h-4" />
                      <span>Comparison</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      FD vs Savings Account
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Compare FD and Savings Account to find the best option for your money.
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium mt-3">
                      Read more →
                    </span>
                  </Link>
                  <Link 
                    to="/"
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                      <Calculator className="w-4 h-4" />
                      <span>Tool</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      FD Calculator
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Calculate your FD maturity amount and interest earnings instantly.
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium mt-3">
                      Calculate now →
                    </span>
                  </Link>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Calculate Your FD Returns
                </h2>
                <p className="text-muted-foreground mb-6">
                  Now that you understand FD rates, use our calculator to see exactly 
                  how much your deposit will grow.
                </p>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Try FD Calculator →
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

export default FDInterestRates;
