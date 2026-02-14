import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Canary Detect</title>
        <meta name="description" content="Privacy Policy for Canary Detect ECO Finish pool coating services." />
        <link rel="canonical" href="https://canary-detect-coatings.es/privacy-policy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Privacy Policy for Canary Detect ECO Finish pool coating services.",
            "url": "https://canary-detect-coatings.es/privacy-policy",
            "publisher": {
              "@type": "Organization",
              "name": "Canary Detect",
              "url": "https://canary-detect-coatings.es"
            }
          })}
        </script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-sm md:prose-base text-muted-foreground space-y-6">
            <p className="text-foreground font-medium">
              Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
            <p>
              When you contact us through our website or request a quote, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name and contact information (email, phone number)</li>
              <li>Your location within the Canary Islands</li>
              <li>Details about your pool and project requirements</li>
              <li>Any messages or enquiries you send us</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
            <p>
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Schedule consultations and pool inspections</li>
              <li>Provide our ECO Finish pool coating services</li>
              <li>Send you relevant updates about your project</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Data Protection</h2>
            <p>
              We are committed to protecting your personal data. We do not sell, trade, or share your 
              personal information with third parties except as necessary to provide our services.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Your Rights</h2>
            <p>
              Under GDPR, you have the right to access, correct, or delete your personal data. 
              Contact us at info@canary-detect.com to exercise these rights.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Contact Us</h2>
            <p>
              For any privacy-related questions, please contact us at:
            </p>
            <p>
              Email: info@canary-detect.com<br />
              Phone: +34 711 05 10 71
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
