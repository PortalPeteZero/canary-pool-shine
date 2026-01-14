import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | Canary Detect</title>
        <meta name="description" content="Terms of Service for Canary Detect ECO Finish pool coating services." />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-sm md:prose-base text-muted-foreground space-y-6">
            <p className="text-foreground font-medium">
              Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Services</h2>
            <p>
              Canary Detect provides professional ECO Finish pool coating installation services 
              across all seven Canary Islands. Our services include pool assessment, surface 
              preparation, ECO Finish application, and aftercare guidance.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Quotes and Pricing</h2>
            <p>
              All quotes provided are based on the information available at the time of assessment. 
              Final pricing may vary based on actual pool conditions discovered during preparation. 
              Any changes will be communicated before proceeding.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Warranty</h2>
            <p>
              ECO Finish products come with manufacturer warranties. Specific warranty terms 
              will be provided with your quote and service agreement. Warranty coverage requires 
              proper pool maintenance as per our aftercare guidelines.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Scheduling</h2>
            <p>
              Project scheduling is subject to weather conditions and material availability. 
              We will work with you to find suitable dates and will communicate any necessary 
              changes promptly.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Payment Terms</h2>
            <p>
              Payment terms will be specified in your service agreement. Typically, a deposit 
              is required to confirm your booking, with the balance due upon completion.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Limitation of Liability</h2>
            <p>
              While we take every care in our work, our liability is limited to the value of 
              services provided. We are not responsible for pre-existing pool structural issues 
              or damage caused by improper maintenance after our work is completed.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact</h2>
            <p>
              For questions about these terms, please contact us at:
            </p>
            <p>
              Email: info@canary-detect.com<br />
              Phone: +34 646 02 26 95
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
