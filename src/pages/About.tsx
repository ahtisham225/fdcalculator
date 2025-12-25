import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We provide precise calculations using standard compound interest formulas trusted by financial institutions worldwide.",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Our calculator is designed with simplicity in mind, making complex financial calculations accessible to everyone.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "We believe in clear, straightforward tools that help you understand exactly how your investments grow.",
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description: "We aim to empower individuals to make informed financial decisions through accessible tools and information.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - FD Calculator | Your Trusted Fixed Deposit Calculator</title>
        <meta 
          name="description" 
          content="Learn about FD Calculator - your free, reliable tool for calculating fixed deposit returns. Helping investors make informed financial decisions." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fdcalculator.net/about/" />
        {/* Open Graph */}
        <meta property="og:title" content="About Us - FD Calculator" />
        <meta property="og:description" content="Learn about FD Calculator - your free, reliable tool for calculating fixed deposit returns." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fdcalculator.net/about/" />
        <meta property="og:site_name" content="FD Calculator" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us - FD Calculator" />
        <meta name="twitter:description" content="Learn about FD Calculator - your free, reliable tool for calculating fixed deposit returns." />
        <meta name="twitter:site" content="@fdcalculator" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="hero-bg py-12 md:py-20">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  About Us
                </h1>
                <p className="text-lg text-muted-foreground">
                  Helping you make smarter investment decisions with accurate fixed deposit calculations.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="calculator-card">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  FD Calculator was created with a simple mission: to provide a free, accurate, and easy-to-use 
                  tool for calculating fixed deposit returns. We understand that financial planning can be 
                  complex, and we believe everyone deserves access to reliable tools that simplify the process.
                </p>
                <p className="text-muted-foreground mb-4">
                  Whether you're a first-time investor or an experienced saver, our calculator helps you 
                  understand exactly how your money will grow over time, accounting for different compounding 
                  frequencies and interest rates.
                </p>
                <p className="text-muted-foreground">
                  Our calculations are based on standard{" "}
                  <a href="https://www.investopedia.com/terms/c/compoundinterest.asp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    compound interest formulas
                  </a>{" "}
                  used by financial institutions worldwide. For more information on fixed deposits, you can also refer to{" "}
                  <a href="https://en.wikipedia.org/wiki/Time_deposit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Wikipedia's guide on time deposits
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div
                      key={value.title}
                      className="info-card animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="calculator-card">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Calculator?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>100% free to use with no registration required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Accurate compound interest calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Support for multiple compounding frequencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Instant results with visual breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Mobile-friendly design for calculations on the go</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
