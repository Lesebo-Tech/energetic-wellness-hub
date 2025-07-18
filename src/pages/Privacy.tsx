import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-spa-sage/20">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardContent className="prose prose-lg max-w-none p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong>Personal Information:</strong> Name, email address, phone number, address, and payment information.</p>
                    <p><strong>Health Information:</strong> Medical history, allergies, and health conditions relevant to our services.</p>
                    <p><strong>Usage Data:</strong> Information about how you use our website and services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To process bookings and payments</li>
                    <li>To communicate with you about appointments and services</li>
                    <li>To improve our services and customer experience</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With your explicit consent</li>
                      <li>To trusted service providers who assist in operating our business</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or acquisition</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. This includes encryption of sensitive data and regular security assessments.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
                    unless a longer retention period is required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies to enhance your experience. You can control cookie settings through your browser, 
                    though this may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for children under 13. We do not knowingly collect personal information 
                    from children under 13 without parental consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                  <div className="text-muted-foreground">
                    <p>For questions about this Privacy Policy or your personal information:</p>
                    <div className="mt-2 space-y-1">
                      <p>Email: privacy@enerspa.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Address: 123 Wellness Avenue, Serenity District, NY 10001</p>
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;