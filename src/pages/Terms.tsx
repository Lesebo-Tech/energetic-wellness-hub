import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-spa-sage/20">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardContent className="prose prose-lg max-w-none p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using EnerSpa's services, you agree to be bound by these Terms and Conditions. 
                    If you do not agree to all terms and conditions, you may not access the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    EnerSpa provides wellness and spa services including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Massage therapy and bodywork services</li>
                    <li>Aromatherapy treatments</li>
                    <li>Wellness consultations</li>
                    <li>Online booking and appointment management</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Booking and Cancellation Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong>Booking:</strong> All appointments must be booked in advance through our website or by phone.</p>
                    <p><strong>Cancellation:</strong> Appointments may be cancelled up to 24 hours in advance without penalty. 
                    Cancellations made less than 24 hours in advance will be charged 50% of the service fee.</p>
                    <p><strong>No-show:</strong> Failure to arrive for your appointment will result in a full charge of the service fee.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Health and Safety</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Clients must disclose any health conditions, allergies, or medications that may affect their treatment. 
                    EnerSpa reserves the right to refuse service if it may be harmful to the client's health.</p>
                    <p>Clients under 18 years of age must be accompanied by a parent or guardian and have written consent for services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Payment is due at the time of service unless other arrangements have been made in advance.</p>
                    <p>We accept cash, credit cards, and gift certificates. A 18% service charge will be added for parties of 6 or more.</p>
                    <p>Prices are subject to change without notice, but confirmed appointments will honor the price quoted at booking.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. All personal information collected is used solely for the purpose of 
                    providing services and will not be shared with third parties without your consent, except as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    EnerSpa's liability is limited to the cost of the service provided. We are not responsible for any 
                    indirect, incidental, or consequential damages arising from the use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
                  <div className="text-muted-foreground">
                    <p>For questions about these Terms and Conditions, please contact us:</p>
                    <div className="mt-2 space-y-1">
                      <p>Email: legal@enerspa.com</p>
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

export default Terms;