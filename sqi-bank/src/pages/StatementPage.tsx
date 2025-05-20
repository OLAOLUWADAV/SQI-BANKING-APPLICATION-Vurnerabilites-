
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import AppLayout from '@/components/AppLayout';
import { toast } from '@/hooks/use-toast';
import { FileText, Download, Mail, Printer } from 'lucide-react';

const StatementPage = () => {
  const [statementType, setStatementType] = useState('monthly');
  const [statementPeriod, setStatementPeriod] = useState('');
  const [generatingStatement, setGeneratingStatement] = useState(false);
  
  const handleGenerateStatement = () => {
    if (!statementPeriod) {
      toast({
        title: "Required field",
        description: "Please select a statement period",
        variant: "destructive"
      });
      return;
    }
    
    setGeneratingStatement(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratingStatement(false);
      
      toast({
        title: "Statement Generated",
        description: "Your statement has been generated successfully",
      });
    }, 1500);
  };
  
  const handleDownloadStatement = (id: string) => {
    toast({
      title: "Statement Downloaded",
      description: "Your statement download has started",
    });
  };
  
  const handleEmailStatement = (id: string) => {
    toast({
      title: "Statement Emailed",
      description: "Your statement has been sent to your registered email address",
    });
  };
  
  const handlePrintStatement = (id: string) => {
    toast({
      title: "Statement Print",
      description: "Preparing statement for printing...",
    });
  };
  
  // Sample statement history
  const statements = [
    {
      id: 'ST1234567',
      name: 'Monthly Statement - May 2023',
      date: 'May 31, 2023',
      type: 'Monthly'
    },
    {
      id: 'ST1234566',
      name: 'Monthly Statement - April 2023',
      date: 'April 30, 2023',
      type: 'Monthly'
    },
    {
      id: 'ST1234565',
      name: 'Monthly Statement - March 2023',
      date: 'March 31, 2023',
      type: 'Monthly'
    },
    {
      id: 'ST1234564',
      name: 'Quarterly Statement - Q1 2023',
      date: 'March 31, 2023',
      type: 'Quarterly'
    },
    {
      id: 'ST1234563',
      name: 'Monthly Statement - February 2023',
      date: 'February 28, 2023',
      type: 'Monthly'
    }
  ];
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Request Statement</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Request Statement Card */}
          <Card className="md:col-span-1 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Generate Statement</CardTitle>
              <CardDescription>Request a statement for your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="statementType">Statement Type</Label>
                <Select value={statementType} onValueChange={setStatementType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select statement type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly Statement</SelectItem>
                    <SelectItem value="quarterly">Quarterly Statement</SelectItem>
                    <SelectItem value="annual">Annual Statement</SelectItem>
                    <SelectItem value="custom">Custom Period</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="statementPeriod">Statement Period</Label>
                <Select value={statementPeriod} onValueChange={setStatementPeriod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    {statementType === 'monthly' ? (
                      <>
                        <SelectItem value="may-2023">May 2023</SelectItem>
                        <SelectItem value="apr-2023">April 2023</SelectItem>
                        <SelectItem value="mar-2023">March 2023</SelectItem>
                        <SelectItem value="feb-2023">February 2023</SelectItem>
                        <SelectItem value="jan-2023">January 2023</SelectItem>
                      </>
                    ) : statementType === 'quarterly' ? (
                      <>
                        <SelectItem value="q2-2023">Q2 2023 (Apr-Jun)</SelectItem>
                        <SelectItem value="q1-2023">Q1 2023 (Jan-Mar)</SelectItem>
                        <SelectItem value="q4-2022">Q4 2022 (Oct-Dec)</SelectItem>
                        <SelectItem value="q3-2022">Q3 2022 (Jul-Sep)</SelectItem>
                      </>
                    ) : statementType === 'annual' ? (
                      <>
                        <SelectItem value="2023">Year 2023</SelectItem>
                        <SelectItem value="2022">Year 2022</SelectItem>
                        <SelectItem value="2021">Year 2021</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                        <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                        <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleGenerateStatement} 
                disabled={!statementPeriod || generatingStatement}
                className="w-full"
              >
                {generatingStatement ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Statement
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Statement History Card */}
          <Card className="md:col-span-2 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Statement History</CardTitle>
              <CardDescription>View and download your past statements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statements.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50 text-left">
                          <th className="px-4 py-2 text-sm font-medium text-gray-600">Statement ID</th>
                          <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                          <th className="px-4 py-2 text-sm font-medium text-gray-600">Date</th>
                          <th className="px-4 py-2 text-sm font-medium text-gray-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {statements.map((statement) => (
                          <tr key={statement.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 font-medium">{statement.id}</td>
                            <td className="px-4 py-2">{statement.name}</td>
                            <td className="px-4 py-2 text-gray-500">{statement.date}</td>
                            <td className="px-4 py-2">
                              <div className="flex space-x-2">
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="w-8 h-8 p-0" 
                                  onClick={() => handleDownloadStatement(statement.id)}
                                  title="Download"
                                >
                                  <Download className="w-4 h-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="w-8 h-8 p-0" 
                                  onClick={() => handleEmailStatement(statement.id)}
                                  title="Email"
                                >
                                  <Mail className="w-4 h-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="w-8 h-8 p-0" 
                                  onClick={() => handlePrintStatement(statement.id)}
                                  title="Print"
                                >
                                  <Printer className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No previous statements found.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Statement Information */}
        <Card className="mt-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">About Bank Statements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">What's included in your statement?</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Account summary and balance</li>
                  <li>All deposits and credits</li>
                  <li>All withdrawals and debits</li>
                  <li>Transfer details</li>
                  <li>Interest earned (if applicable)</li>
                  <li>Fees charged (if any)</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Statement Delivery Options</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Download as PDF</li>
                  <li>Email to your registered email address</li>
                  <li>Print directly from browser</li>
                  <li>Request physical copy by mail (additional charges may apply)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default StatementPage;
