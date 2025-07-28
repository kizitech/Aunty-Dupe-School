import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, User, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-gray-600 text-white mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch With Us</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              We welcome your inquiries and look forward to hearing from you. Whether you're a prospective parent,
              current family member, or community partner, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">School Address</h3>
                    <p className="text-gray-700">
                      Ipetu Ijesha Express Road
                      <br />
                      Ile-Oluji, Ondo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Main Office: +234 (0) 803 472 2940</p>
                      <p>Admissions: +234 (0) 703 969 8256</p>
                      <p>Administrative: +234 (0) 807 269 0001</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Address</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>General: info@auntydupeschools.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM (Admissions only)</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" type="text" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" type="text" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input id="subject" type="text" placeholder="What is this regarding?" required />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Please provide details about your inquiry..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Leadership Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Leaders</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team is always available to discuss your child's educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Image
                    src="/images/proprietress.jpg"
                    alt="Proprietress"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto min-h-56 border object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Evangelist Chief Mrs. Phebean Modupe Ogunsusi</CardTitle>
                <CardDescription className="text-red-600 font-semibold">Proprietress & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Visionary founder with over 40+ years of educational leadership experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>proprietress@auntydupeschool.edu.ng</span>
                  </div>
                  <p className="text-gray-500">Available by appointment</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Image
                    src="/images/head-teacher.jpg"
                    alt="Head Teacher"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto min-h-56 border object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Mrs. Akintunde Abimbola</CardTitle>
                <CardDescription className="text-red-600 font-semibold">Head Teacher</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Leading our academic programs with dedication to educational excellence.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>headteacher@auntydupeschool.edu.ng</span>
                  </div>
                  <p className="text-gray-500">Monday - Friday, 8:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Image
                    src="/images/bursar.jpg"
                    alt="Bursar"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto min-h-56 border object-cover"
                  />
                </div>
                <CardTitle className="text-lg">School Bursar</CardTitle>
                <CardDescription className="text-red-600 font-semibold">Financial Administration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Managing school finances and assisting families with fee-related inquiries.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>bursar@auntydupeschool.edu.ng</span>
                  </div>
                  <p className="text-gray-500">Monday - Friday, 8:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Visit Our Campus</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Experience Our Learning Environment</h2>
              <p className="text-gray-700 mb-6">
                We strongly encourage prospective families to visit our campus to experience our learning environment
                firsthand. Campus visits provide the best opportunity to understand our educational approach, meet our
                staff, and see our facilities in action.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Guided Campus Tour</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive tour of all facilities including classrooms, library, computer lab, and recreational
                      areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Meet Our Staff</h4>
                    <p className="text-gray-600 text-sm">
                      Opportunity to meet with administrators, teachers, and support staff to discuss our programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Classroom Observations</h4>
                    <p className="text-gray-600 text-sm">
                      See our teaching methods in action and observe the learning environment during regular school
                      hours.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700">Schedule Your Visit Today</Button>
            </div>

            <div>
              <Image
                src="/images/school-aerial-view.jpg"
                alt="School campus"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Location & Directions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How to Find Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>From Ondo Town</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Take the Ipetu Ijesha Express Road heading towards Ile-Oluji</li>
                  <li>• Continue for approximately 15 kilometers</li>
                  <li>• Look for the school signage on your right</li>
                  <li>• The school is easily identifiable by its modern buildings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Akure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Take the Ondo Road heading towards Ondo</li>
                  <li>• Continue to Ile-Oluji via the Ipetu Ijesha Express Road</li>
                  <li>• The school will be on your left as you approach Ile-Oluji town center</li>
                  <li>• Look for the distinctive school gate and signage</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-4 md:mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Landmarks & Public Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nearby Landmarks</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Ile-Oluji Local Government Secretariat</li>
                      <li>• Ile-Oluji Central Market</li>
                      <li>• Major residential areas of Ile-Oluji</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transportation</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Regular bus services to Ile-Oluji</li>
                      <li>• Motorcycle taxis (okada) available locally</li>
                      <li>• School bus services for enrolled students</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
