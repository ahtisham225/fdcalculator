import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FDCalculator from "@/components/FDCalculator";
import FDInfo from "@/components/FDInfo";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FD Calculator - Fixed Deposit Calculator",
    "description": "Free online FD calculator to calculate fixed deposit maturity amount and interest earned. Supports quarterly, monthly, half-yearly and yearly compounding.",
    "url": window.location.href,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Helmet>
        <title>FD Calculator - Calculate Your Fixed Deposit Maturity Instantly</title>
        <meta 
          name="description" 
          content="Free FD Calculator to calculate fixed deposit maturity amount & interest. Supports monthly, quarterly compounding. Calculate your FD returns instantly." 
        />
        <meta name="keywords" content="FD calculator, fixed deposit calculator, FD interest calculator, maturity calculator, compound interest calculator, bank FD calculator" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="FD Calculator - Calculate Fixed Deposit Returns Online" />
        <meta property="og:description" content="Free online FD calculator to calculate fixed deposit maturity amount and interest earned instantly." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="hero-bg py-12 md:py-20">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Fixed Deposit Calculator
                  <span className="gradient-text block mt-2">Calculate Your FD Returns Instantly</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Plan your investments wisely with our free FD calculator. Get accurate maturity amounts 
                  with compound interest calculations.
                </p>
              </div>

              <div id="calculator">
                <FDCalculator />
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="py-16 container" id="faq">
            <FDInfo />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
