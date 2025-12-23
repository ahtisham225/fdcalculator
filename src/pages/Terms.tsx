import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - FD Calculator</title>
        <meta 
          name="description" 
          content="Read the terms of service for using FD Calculator. Understand your rights and responsibilities when using our website." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fdcalculator.net/terms/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="hero-bg py-12 md:py-20">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Terms of Service
                </h1>
                <p className="text-lg text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 container">
            <div className="max-w-4xl mx-auto">
              <div className="calculator-card space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using FD Calculator, you accept and agree to be bound by these Terms 
                    of Service. If you do not agree to these terms, please do not use our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">2. Description of Service</h2>
                  <p className="text-muted-foreground">
                    FD Calculator provides a free online tool for calculating potential returns on fixed 
                    deposits using compound interest formulas. The service is provided "as is" without any 
                    warranties, express or implied.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">3. Use of the Service</h2>
                  <p className="text-muted-foreground mb-3">You agree to use FD Calculator only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Use the service in any way that violates applicable laws or regulations</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Use automated systems or software to extract data from the website</li>
                    <li>Reproduce, duplicate, or copy the service for commercial purposes without permission</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">4. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content on this website, including but not limited to text, graphics, logos, and 
                    software, is the property of FD Calculator and is protected by intellectual property 
                    laws. You may not reproduce, distribute, or create derivative works without our 
                    express permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">5. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground">
                    The service is provided on an "as is" and "as available" basis. We make no warranties, 
                    expressed or implied, regarding the accuracy, reliability, or availability of the 
                    service. We do not warrant that the service will be uninterrupted, secure, or error-free.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the fullest extent permitted by law, FD Calculator shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages arising out of your 
                    use of the service, including but not limited to financial losses based on calculations 
                    provided by our tool.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">7. Indemnification</h2>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold harmless FD Calculator and its operators from any 
                    claims, damages, losses, or expenses arising out of your use of the service or 
                    violation of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">8. Modifications to Service</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify, suspend, or discontinue the service at any time without 
                    notice. We may also update these Terms from time to time. Your continued use of the 
                    service after changes constitutes acceptance of the new Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">9. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and construed in accordance with applicable laws. Any 
                    disputes arising from these Terms or the use of the service shall be resolved through 
                    appropriate legal channels.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">10. Contact</h2>
                  <p className="text-muted-foreground">
                    For any questions regarding these Terms of Service, please visit our{" "}
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

export default Terms;
