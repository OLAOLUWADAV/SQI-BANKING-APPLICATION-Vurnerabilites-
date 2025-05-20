
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/components/AppLayout';

const PrivacyPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              At SwiftBank, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and banking services (collectively, the "Services").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <h3 className="text-lg font-medium">2.1 Personal Information</h3>
            <p>
              We may collect several types of personal information from and about users of our Services, including:
            </p>
            <ul>
              <li>Identity Information: Name, address, date of birth, social security number, and government-issued identification.</li>
              <li>Contact Information: Email address, mailing address, and phone numbers.</li>
              <li>Financial Information: Account numbers, transaction history, credit information, and payment details.</li>
              <li>Technical Information: IP address, browser type and version, device identifiers, location data, operating system, and other technology identifiers on the devices you use to access our Services.</li>
              <li>Usage Information: Information about how you use our Services, including browsing patterns, feature usage, and interactions.</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">2.2 How We Collect Information</h3>
            <p>
              We collect this information:
            </p>
            <ul>
              <li>Directly from you when you provide it to us (e.g., when you register, apply for products, or contact customer support).</li>
              <li>Automatically as you navigate through our Services (using cookies, web beacons, and other tracking technologies).</li>
              <li>From third parties, such as credit bureaus, identity verification services, and other financial institutions.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              We may use the information we collect about you for various purposes, including to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our Services.</li>
              <li>Process transactions and send related information.</li>
              <li>Create and maintain your account.</li>
              <li>Verify your identity and prevent fraud.</li>
              <li>Communicate with you about products, services, and events.</li>
              <li>Respond to your comments, questions, and customer service requests.</li>
              <li>Send you technical notices, security alerts, and administrative messages.</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
              <li>Personalize your experience and deliver content and product features relevant to your interests.</li>
              <li>Comply with legal obligations and regulatory requirements.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">4. Sharing Your Information</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              We may disclose your personal information to the following categories of recipients:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Companies that perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</li>
              <li><strong>Financial Partners:</strong> Banks, payment networks, and other financial institutions to facilitate transactions.</li>
              <li><strong>Legal and Regulatory:</strong> Law enforcement, government authorities, or other third parties when required by law, to protect our rights, or in response to a legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>With Your Consent:</strong> To any other third party with your prior consent to do so.</li>
            </ul>
            <p>
              We do not sell your personal information to third parties for their marketing purposes.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">5. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. These measures include:
            </p>
            <ul>
              <li>Encryption of sensitive information in transit and at rest.</li>
              <li>Regular security assessments and penetration testing.</li>
              <li>Access controls and authentication procedures.</li>
              <li>Regular monitoring of our systems for possible vulnerabilities and attacks.</li>
              <li>Employee training on security and privacy practices.</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">6. Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>Access to the personal information we have about you.</li>
              <li>Correction of inaccurate personal information.</li>
              <li>Deletion of your personal information.</li>
              <li>Restriction or objection to certain processing of your personal information.</li>
              <li>Portability of your personal information.</li>
              <li>Withdrawal of consent where processing is based on consent.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">7. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              Our Services are not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information without your consent, please contact us, and we will take steps to remove that information.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">8. Changes to Our Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              We may update our Privacy Policy from time to time. If we make material changes to how we treat your personal information, we will notify you through a notice on our website homepage, through the mobile app, or by email.
            </p>
            <p>
              The date the Privacy Policy was last revised is identified at the bottom of this page. You are responsible for periodically visiting our Services and this Privacy Policy to check for any changes.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">9. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <address className="not-italic">
              SwiftBank Privacy Office<br />
              123 Finance Street<br />
              New York, NY 10001<br />
              Email: privacy@swiftbank.com<br />
              Phone: +1 (800) 123-4567
            </address>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Last Updated: May 19, 2023</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPage;
