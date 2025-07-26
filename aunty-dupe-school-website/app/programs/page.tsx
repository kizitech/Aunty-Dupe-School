import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Users, Award, Lightbulb, Target, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-green-600 text-white mb-4">Our Programs</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Educational Programs</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              From nursery to primary education, we provide a holistic learning experience that combines academic
              excellence with character development, preparing students for lifelong success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Nursery Program */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-2xl">Nursery/Creche Program</CardTitle>
                    <CardDescription className="text-lg">Ages 2-5 years</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Image
                    src="/images/students-group-20.jpg"
                    alt="Nursery students"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Age Groups:</h4>
                    <ul className="space-y-1 text-gray-700">
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
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Play-based learning approach</li>
                      <li>• Early literacy and numeracy development</li>
                      <li>• Social and emotional skill building</li>
                      <li>• Creative arts and expression</li>
                      <li>• Physical development activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Primary Program */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-8 w-8 text-red-500" />
                  <div>
                    <CardTitle className="text-2xl">Primary School Program</CardTitle>
                    <CardDescription className="text-lg">Ages 6-12 years</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Image
                    src="/images/students-uniform.jpg"
                    alt="Primary students"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Grade Levels:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Primary 1 through Primary 6</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Federal and State curriculum compliance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>International curriculum elements</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Focus:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• English Language Arts</li>
                      <li>• Mathematics and Problem Solving</li>
                      <li>• Science and Technology</li>
                      <li>• Social Studies and Civics</li>
                      <li>• Computer Studies and Digital Literacy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Our Approach</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Holistic Educational Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique educational approach combines traditional values with innovative teaching methods to develop
              well-rounded individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Integrated moral education that develops integrity, respect, responsibility, and compassion in all our
                  students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Critical Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Problem-solving approaches that encourage students to think analytically and develop creative
                  solutions to challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Individual Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Small class sizes ensure personalized learning experiences that cater to each student's unique needs
                  and learning style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Beyond Academics</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Co-Curricular Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive co-curricular program helps students discover their talents and develop important life
              skills outside the classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/students-casual.jpg"
                alt="Students in activities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Clubs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span>JET (Junior Engineers and Technicians) Club</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span>Mathematics and Science Clubs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span>Debate and Public Speaking</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Character Building</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Boys and Girls Brigade</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Brownies Program</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Community Service Projects</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Arts & Sports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span>Drama and Cultural Club</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span>Music and Choir</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span>Football and Athletics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 mb-4">Daily Life</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Typical School Day</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">7:30 - 8:00 AM</h3>
                  <p className="text-gray-600">Morning arrival and assembly</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">8:00 AM - 12:00 PM</h3>
                  <p className="text-gray-600">Core academic subjects and lessons</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">12:00 - 1:00 PM</h3>
                  <p className="text-gray-600">Lunch break and social time</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">1:00 - 3:00 PM</h3>
                  <p className="text-gray-600">Co-curricular activities and clubs</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-red-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">3:00 - 3:30 PM</h3>
                  <p className="text-gray-600">Study time and departure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enroll Your Child?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Give your child the comprehensive education they deserve. Our programs are designed to nurture every aspect
            of your child's development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
