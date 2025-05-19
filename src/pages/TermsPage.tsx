
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/components/AppLayout';

const TermsPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              Welcome to SwiftBank. These Terms of Service ("Terms") govern your use of our website, mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
            </p>
            <p>
              SwiftBank may revise these Terms at any time. Your continued usage of the Services after changes means you accept those changes. We will provide notice of material changes as appropriate, such as through email or in-app notifications.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">2. Account Registration and Security</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              To use certain features of our Services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security. SwiftBank will not be liable for any loss or damage arising from your failure to comply with this security obligation.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. To the extent permitted by applicable law, you agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">3. Use of Services</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
            </p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate SwiftBank, a SwiftBank employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm SwiftBank or users of the Services.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">4. Financial Services and Transactions</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              Our Services may allow you to conduct financial transactions. You acknowledge that:
            </p>
            <ul>
              <li>Any transaction you make is between you and the financial institution, and SwiftBank acts only as a facilitator.</li>
              <li>You are fully responsible for all transactions made through your account.</li>
              <li>SwiftBank is not responsible for any loss or damage that may result from your transactions, including but not limited to loss due to delays, incorrect details, or technical failures.</li>
              <li>Transactions may be subject to verification and processing delays.</li>
              <li>Fees may apply to certain transactions as disclosed in our fee schedule.</li>
              <li>All transactions are subject to applicable laws and regulations, including anti-money laundering requirements.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">5. Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by SwiftBank, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">6. Privacy and Data Protection</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              Your privacy is important to us. Our Privacy Policy describes how we collect, use, store, and share your information. By using our Services, you agree to our collection, use, and sharing of your information as described in our Privacy Policy.
            </p>
            <p>
              We implement security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl">7. Termination</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">8. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm">
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic">
              SwiftBank<br />
              123 Finance Street<br />
              New York, NY 10001<br />
              Email: legal@swiftbank.com<br />
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

export default TermsPage;
