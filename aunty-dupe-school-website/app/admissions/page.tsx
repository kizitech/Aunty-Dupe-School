import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Users, CheckCircle, DollarSign, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-blue-600 text-white mb-4">Admissions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Family of Excellence</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              We welcome families who share our commitment to educational excellence and character development. Our
              admission process is designed to ensure that prospective students will thrive in our academic environment.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Available Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose the Right Program</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Nursery/Creche Program</CardTitle>
                <CardDescription>Ages 2-5 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/students-group-20.jpg"
                    alt="Nursery students"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Creche: Ages 2-3 years</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Nursery 1: Ages 3-4 years</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Nursery 2: Ages 4-5 years</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Pre-Primary: Ages 5-6 years</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-600 text-sm">
                  Nurturing environment that supports early childhood development through play-based learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Primary School Program</CardTitle>
                <CardDescription>Ages 6-12 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/students-uniform.jpg"
                    alt="Primary students"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Primary 1 through Primary 6</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Federal and State curriculum</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>International curriculum elements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Small class sizes</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-600 text-sm">
                  Comprehensive academic preparation for secondary education and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Application Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Simple Steps to Join Us</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our straightforward application process is designed to be supportive and informative for families.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Schedule a Visit</h3>
                  <p className="text-gray-600 mb-4">
                    Contact our admissions office to schedule a campus tour. Experience our learning environment
                    firsthand and meet our dedicated staff.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Guided tour of all facilities</li>
                    <li>• Classroom observations</li>
                    <li>• Meeting with administrators</li>
                    <li>• Q&A session</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Complete Application</h3>
                  <p className="text-gray-600 mb-4">
                    Fill out our comprehensive application form and gather all required documents for submission.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Completed application form</li>
                    <li>• Birth certificate</li>
                    <li>• Immunization records</li>
                    <li>• Previous school records (if applicable)</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-yellow-100 p-4 rounded-full flex-shrink-0">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Assessment & Interview</h3>
                  <p className="text-gray-600 mb-4">
                    Participate in our friendly assessment and interview process designed to understand your child's
                    needs and ensure proper placement.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Age-appropriate academic assessment</li>
                    <li>• Social interaction observation</li>
                    <li>• Parent interview</li>
                    <li>• Learning style identification</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-purple-100 p-4 rounded-full flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Enrollment & Orientation</h3>
                  <p className="text-gray-600 mb-4">
                    Upon acceptance, complete enrollment procedures and participate in our comprehensive orientation
                    program.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Enrollment form completion</li>
                    <li>• Fee payment arrangements</li>
                    <li>• Student orientation activities</li>
                    <li>• Parent orientation sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Requirements</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Admission Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Completed application form</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Birth certificate or age declaration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Immunization records</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Health certificate</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Previous school records (transfers)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Parent/guardian identification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Age Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600">Nursery/Creche</h4>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>Creche: 2-3 years</li>
                      <li>Nursery 1: 3-4 years</li>
                      <li>Nursery 2: 4-5 years</li>
                      <li>Pre-Primary: 5-6 years</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-l-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Primary School</h4>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>Primary 1: 6-7 years</li>
                      <li>Primary 2: 7-8 years</li>
                      <li>Primary 3: 8-9 years</li>
                      <li>Primary 4: 9-10 years</li>
                      <li>Primary 5: 10-11 years</li>
                      <li>Primary 6: 11-12 years</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees Information */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Investment in Excellence</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">School Fees & Financial Information</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We believe quality education is one of the most important investments families can make in their
              children's future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Payment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Annual Payment</h4>
                    <p className="text-sm text-green-700">
                      Full year payment with 5% discount. Most economical option for families.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Termly Payment</h4>
                    <p className="text-sm text-blue-700">
                      Three equal payments per academic year. Most popular option.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Monthly Payment</h4>
                    <p className="text-sm text-purple-700">
                      Ten monthly payments from September to June with small administrative fee.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Financial Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Merit Scholarships</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Academic Excellence Scholarships</li>
                      <li>• Leadership Scholarships</li>
                      <li>• Community Service Recognition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Need-Based Aid</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Partial tuition assistance</li>
                      <li>• Payment plan modifications</li>
                      <li>• Emergency financial support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sibling Discounts</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 10% discount for second child</li>
                      <li>• 15% discount for third child and beyond</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-12 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Begin the Application Process?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Contact our admissions team today to schedule your campus visit and begin your child's journey toward
              educational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Speak directly with our admissions team for immediate assistance and to schedule your visit.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Main Office: +234 (0) 803 472 2940 </p>
                  <p className="font-semibold">Admissions: +234 (0) 703 969 8256 </p>
                  <p className="font-semibold">Administrative: +234 (0) 807 269 0001 </p>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 8:00 AM - 4:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Send us your questions or request information packets via email.</p>
                <div className="space-y-2">
                  <p className="font-semibold">info@auntydupeschools.com</p>
                  <p className="text-sm text-gray-600">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule Campus Visit
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Request for Application Form
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
