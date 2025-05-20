
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/components/AppLayout';
import { PhoneIcon, MapPin, Mail, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">About SwiftBank</h1>
        
        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-bank-primary to-bank-secondary text-white overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold mb-4">Empowering Financial Freedom</h2>
              <p className="mb-6">
                Founded in 2010, SwiftBank has grown from a small fintech startup to a leading digital banking solution trusted by millions of users worldwide.
                Our mission is to make banking accessible, transparent, and hassle-free for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-bank-primary hover:bg-gray-100">
                  Learn More
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 bg-white/10 flex items-center justify-center p-8">
              <div className="h-32 w-32 md:h-40 md:w-40 bg-white rounded-full flex items-center justify-center text-bank-primary">
                <span className="text-5xl md:text-6xl font-bold">SB</span>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Our Values */}
        <Card className="mb-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Our Values</CardTitle>
            <CardDescription>The principles that drive everything we do</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="font-bold">Security First</h3>
                <p className="text-sm text-gray-600">
                  We prioritize the security of your data and finances above all else, implementing industry-leading protection measures.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3 className="font-bold">Customer Satisfaction</h3>
                <p className="text-sm text-gray-600">
                  We believe in creating products and services that genuinely delight our customers and make banking enjoyable.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                    <line x1="4" y1="22" x2="4" y2="15"/>
                  </svg>
                </div>
                <h3 className="font-bold">Transparency</h3>
                <p className="text-sm text-gray-600">
                  We maintain clear communication and honest practices, ensuring you understand our services and fees.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="font-bold">Reliability</h3>
                <p className="text-sm text-gray-600">
                  Our systems are built for maximum uptime and reliability, so you can access your money whenever you need it.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
                <h3 className="font-bold">Innovation</h3>
                <p className="text-sm text-gray-600">
                  We continuously push the boundaries of what's possible in digital banking to provide you with cutting-edge features.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="font-bold">Inclusivity</h3>
                <p className="text-sm text-gray-600">
                  We design our products and services to be accessible to everyone, regardless of background or financial status.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Contact Information */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Contact Us</CardTitle>
            <CardDescription>We're here to help with any questions or concerns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-bank-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Phone Support</h4>
                    <p className="text-gray-600">+1 (800) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-bank-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email Support</h4>
                    <p className="text-gray-600">support@swiftbank.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-bank-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Headquarters</h4>
                    <p className="text-gray-600">123 Finance Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-bank-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Website</h4>
                    <p className="text-gray-600">www.swiftbank.com</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Social Media</h4>
                  <div className="flex gap-4">
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <div className="text-sm text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AboutPage;
