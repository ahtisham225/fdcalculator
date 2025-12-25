import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - FD Calculator</title>
        <meta 
          name="description" 
          content="Read our privacy policy to understand how FD Calculator collects, uses, and protects your information." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fdcalculator.net/privacy/" />
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - FD Calculator" />
        <meta property="og:description" content="Read our privacy policy to understand how FD Calculator handles your information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fdcalculator.net/privacy/" />
        <meta property="og:site_name" content="FD Calculator" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - FD Calculator" />
        <meta name="twitter:description" content="Read our privacy policy to understand how FD Calculator handles your information." />
        <meta name="twitter:site" content="@fdcalculator" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="hero-bg py-12 md:py-20">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Privacy Policy
                </h1>
                <p className="text-lg text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="calculator-card space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    Welcome to FD Calculator. We respect your privacy and are committed to protecting any 
                    information you may provide while using our website. This Privacy Policy explains our 
                    practices regarding data collection and usage.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-3">
                    Our FD Calculator is designed to work entirely in your browser. We do not collect, 
                    store, or transmit any of the financial information you enter into the calculator.
                  </p>
                  <p className="text-muted-foreground">
                    We may collect anonymous usage data through standard web analytics to improve our 
                    service, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>General geographic location (country/region)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Information</h2>
                  <p className="text-muted-foreground">
                    Any anonymous data collected is used solely to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Improve the functionality and user experience of our calculator</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Fix bugs and technical issues</li>
                    <li>Develop new features based on user needs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies</h2>
                  <p className="text-muted-foreground">
                    We may use cookies and similar technologies to enhance your experience on our website. 
                    These cookies do not contain personal information and are used for analytics purposes 
                    only. You can disable cookies in your browser settings if you prefer.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">5. Third-Party Services</h2>
                  <p className="text-muted-foreground">
                    We may use third-party analytics services (such as{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google Analytics
                    </a>) to help us 
                    understand how visitors use our website. These services may collect information about 
                    your visits to our site in accordance with their own privacy policies. Learn more about{" "}
                    <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      how Google uses data
                    </a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">6. Data Security</h2>
                  <p className="text-muted-foreground">
                    Since we do not collect personal financial data, there is no risk of such data being 
                    compromised. All calculations are performed locally in your browser, ensuring your 
                    financial information remains private.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">7. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our website is not intended for children under 13 years of age. We do not knowingly 
                    collect information from children under 13.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">8. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. Any changes will be posted on 
                    this page with an updated revision date.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">9. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us through our{" "}
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

export default Privacy;
