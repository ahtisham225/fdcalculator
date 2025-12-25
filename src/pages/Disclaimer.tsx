import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - FD Calculator</title>
        <meta 
          name="description" 
          content="Read our disclaimer to understand the limitations and intended use of the FD Calculator tool." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fdcalculator.net/disclaimer/" />
        {/* Open Graph */}
        <meta property="og:title" content="Disclaimer - FD Calculator" />
        <meta property="og:description" content="Read our disclaimer to understand the limitations and intended use of the FD Calculator." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fdcalculator.net/disclaimer/" />
        <meta property="og:site_name" content="FD Calculator" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://fdcalculator.net/og-image.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Disclaimer - FD Calculator" />
        <meta name="twitter:description" content="Read our disclaimer to understand the limitations and intended use of the FD Calculator." />
        <meta name="twitter:site" content="@fdcalculator" />
        <meta name="twitter:image" content="https://fdcalculator.net/og-image.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="hero-bg py-12 md:py-20">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Disclaimer
                </h1>
                <p className="text-lg text-muted-foreground">
                  Important information about using our FD Calculator
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 container">
            <div className="max-w-4xl mx-auto">
              <div className="info-card border-l-4 border-l-yellow-500 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    The information provided by FD Calculator is for general informational and educational 
                    purposes only. It should not be considered as financial advice.
                  </p>
                </div>
              </div>

              <div className="calculator-card space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">1. No Financial Advice</h2>
                  <p className="text-muted-foreground">
                    FD Calculator provides tools for calculating potential returns on fixed deposits. 
                    The results are based on the inputs you provide and standard compound interest formulas. 
                    This information is not intended to be, and should not be construed as, financial, 
                    investment, or legal advice.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">2. Accuracy of Calculations</h2>
                  <p className="text-muted-foreground">
                    While we strive to provide accurate calculations, we cannot guarantee that the results 
                    will match exactly with what any specific financial institution offers. Actual returns 
                    may vary due to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Different calculation methods used by banks</li>
                    <li>Rounding differences</li>
                    <li>Special terms and conditions</li>
                    <li>Fees and charges that may apply</li>
                    <li>Tax implications</li>
                    <li>Changes in interest rates</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">3. Verify with Financial Institutions</h2>
                  <p className="text-muted-foreground">
                    Before making any investment decisions, we strongly recommend that you verify all 
                    calculations and terms with your chosen bank or financial institution. Interest rates, 
                    terms, and conditions can vary significantly between institutions and may change over time. 
                    You can check current rates from resources like{" "}
                    <a href="https://www.bankrate.com/banking/cds/cd-rates/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Bankrate
                    </a>{" "}
                    or consult with a{" "}
                    <a href="https://www.cfp.net/why-get-certified/the-standard-of-excellence" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      certified financial planner
                    </a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">4. No Liability</h2>
                  <p className="text-muted-foreground">
                    We shall not be held responsible for any losses, damages, or financial decisions made 
                    based on the calculations provided by this tool. Users are solely responsible for their 
                    investment decisions and should conduct their own research and consult with qualified 
                    financial advisors when necessary.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">5. Educational Purpose</h2>
                  <p className="text-muted-foreground">
                    This calculator is designed as an educational tool to help users understand how 
                    compound interest works and to estimate potential returns on fixed deposits. It is 
                    meant to be a starting point for your research, not a definitive guide for investment 
                    decisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">6. External Links</h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to external websites. We are not responsible for the 
                    content, accuracy, or availability of these external sites. Inclusion of any links 
                    does not imply endorsement.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">7. Changes to Disclaimer</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify this disclaimer at any time. Changes will be effective 
                    immediately upon posting to this page. Your continued use of the website constitutes 
                    acceptance of any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this disclaimer, please visit our{" "}
                    <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
