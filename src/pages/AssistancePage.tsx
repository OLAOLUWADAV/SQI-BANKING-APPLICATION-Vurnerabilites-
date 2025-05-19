
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { Search, Send, HelpCircle, PhoneIcon, MessageCircle, Mail } from 'lucide-react';
import AppLayout from '@/components/AppLayout';

const AssistancePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !subject || !message) {
      toast({
        title: "Required fields",
        description: "Please fill in all the required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
    }, 1500);
  };

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login screen. Enter your registered email address, and we'll send you a link to create a new password. Follow the instructions in the email to complete the process."
    },
    {
      question: "How long does a transfer take?",
      answer: "The time it takes for a transfer to complete depends on several factors. Internal transfers between SwiftBank accounts are usually instant. Transfers to other banks typically take 1-3 business days, depending on the recipient's bank."
    },
    {
      question: "Are there any fees for transfers?",
      answer: "Internal transfers between SwiftBank accounts are free. For external transfers, fees may apply depending on your account type and the destination. Please refer to our fee schedule for detailed information about transfer fees."
    },
    {
      question: "How do I report a suspicious transaction?",
      answer: "If you notice a suspicious transaction on your account, contact our customer support immediately at +1 (800) 123-4567. Our fraud prevention team is available 24/7 to assist you with any security concerns."
    },
    {
      question: "What is the daily transaction limit?",
      answer: "Daily transaction limits vary based on your account type. Standard accounts typically have a limit of $3,000 for transfers and $1,000 for ATM withdrawals. You can view your specific limits in the app under Settings > Account Information > Transaction Limits."
    },
    {
      question: "How can I upgrade my account?",
      answer: "To upgrade your account, go to your Profile page and select the 'Request Account Upgrade' option. Fill out the required information, and our team will review your request. You'll receive a notification when your upgrade is approved."
    },
    {
      question: "Is my money insured?",
      answer: "Yes, deposits at SwiftBank are insured up to $250,000 per depositor through the Federal Deposit Insurance Corporation (FDIC). This insurance covers your funds in case of bank failure."
    },
    {
      question: "How do I activate a new card?",
      answer: "To activate a new card, you can either call the number on the sticker attached to your card, or log in to your online banking account and navigate to Card Management > Activate Card. You'll need to verify your identity during this process."
    }
  ];

  const filteredFaqs = searchQuery 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems;

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
        
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              <span>Support Channels</span>
            </TabsTrigger>
          </TabsList>
          
          {/* FAQ Tab */}
          <TabsContent value="faq">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions about our services</CardDescription>
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    className="pl-10"
                    placeholder="Search FAQs..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                {filteredFaqs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Contact Us Tab */}
          <TabsContent value="contact">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll respond as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitMessage} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your query"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your query or issue..."
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Support Channels Tab */}
          <TabsContent value="support">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-bank-primary" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Customer Service</h3>
                    <p className="text-lg font-bold">+1 (800) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 24/7 for general inquiries</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Technical Support</h3>
                    <p className="text-lg font-bold">+1 (800) 765-4321</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 8am-10pm ET</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Card Services</h3>
                    <p className="text-lg font-bold">+1 (800) 999-8888</p>
                    <p className="text-sm text-gray-500">For lost or stolen cards (24/7)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Mail className="w-5 h-5 text-bank-primary" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">General Inquiries</h3>
                    <p className="text-lg font-bold">support@swiftbank.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Technical Issues</h3>
                    <p className="text-lg font-bold">tech@swiftbank.com</p>
                    <p className="text-sm text-gray-500">For app and website problems</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Account Security</h3>
                    <p className="text-lg font-bold">security@swiftbank.com</p>
                    <p className="text-sm text-gray-500">For urgent security concerns</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Visit a Branch</CardTitle>
                  <CardDescription>Find your nearest SwiftBank branch</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium">Main Branch - New York</h3>
                      <p className="text-sm text-gray-600">123 Finance Street, New York, NY 10001</p>
                      <p className="text-sm text-gray-600">Hours: Mon-Fri 9am-5pm, Sat 9am-1pm</p>
                      <p className="text-sm text-gray-600">Phone: +1 (212) 555-1234</p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium">Downtown Branch - Chicago</h3>
                      <p className="text-sm text-gray-600">456 Banking Ave, Chicago, IL 60601</p>
                      <p className="text-sm text-gray-600">Hours: Mon-Fri 9am-5pm, Sat 9am-1pm</p>
                      <p className="text-sm text-gray-600">Phone: +1 (312) 555-6789</p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium">West Coast Branch - San Francisco</h3>
                      <p className="text-sm text-gray-600">789 Financial Blvd, San Francisco, CA 94105</p>
                      <p className="text-sm text-gray-600">Hours: Mon-Fri 9am-5pm, Sat 9am-1pm</p>
                      <p className="text-sm text-gray-600">Phone: +1 (415) 555-9012</p>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Find More Branches
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default AssistancePage;
