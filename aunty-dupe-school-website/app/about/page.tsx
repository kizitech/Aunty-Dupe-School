import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, BookOpen, Heart, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-blue-600 text-white mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Four Decades of Educational Excellence</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              Founded in 1985 by Evangelist Chief Mrs. Phebean Modupe Ogunsusi, Aunty Dupe Nursery and Primary School
              has been transforming lives and building futures for 40 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Our Story</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">From Vision to Reality</h2>
              <p className="text-gray-700 mb-6">
                The story of Aunty Dupe Nursery and Primary School began with a simple yet profound concern for the
                quality of education available to children in Ile-Oluji, Ondo State. What started as a response to
                educational needs has blossomed into a legacy spanning four decades.
              </p>
              <p className="text-gray-700 mb-6">
                From our humble beginning with 25 pupils in a repurposed four-classroom block, we have grown to become a
                beacon of educational excellence, having nurtured over 5,000 young minds who are now scattered across
                the globe, making significant contributions in their various fields.
              </p>
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-blue-800">
                  To provide exceptional foundational education that develops the intellectual, moral, social, and
                  spiritual potential of every child in our care.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/school-aerial-view.jpg"
                alt="School campus aerial view"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Leadership Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experienced Educational Leaders</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings decades of educational experience and unwavering commitment to student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-4 md:gap-8">
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
                <p className="text-gray-600 text-sm">
                  Visionary founder with over 40+ years of educational leadership. Former Federal Inspector of Education
                  and Principal of Federal Science and Technical College.
                </p>
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
                <p className="text-gray-600 text-sm">
                  Experienced educator leading our academic programs with dedication to maintaining the highest
                  standards of educational excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Image
                    src="/images/head-of-school-2.jpg"
                    alt="Academic Coordinator"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto min-h-56 border object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Academic Leadership Team</CardTitle>
                <CardDescription className="text-red-600 font-semibold">Department Heads</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Experienced department heads overseeing curriculum implementation, assessment, and student progress
                  monitoring across all grade levels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Image
                    src="/images/teacher-professional-1.jpg"
                    alt="Senior Teacher"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto min-h-56 border object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Senior Teaching Staff</CardTitle>
                <CardDescription className="text-red-600 font-semibold">Academic Excellence Team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Our experienced teaching staff brings years of educational expertise and dedication to student
                  success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Guiding Principles</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every aspect of our educational approach and school culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <Award className="h-8 w-8 text-red-500 mb-2" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are committed to the highest standards in all aspects of our educational program, continuously
                  striving for improvement and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <Heart className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical behavior in all our interactions, teaching students
                  the importance of moral courage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <Users className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Respect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We value and respect the dignity, worth, and uniqueness of every individual in our school community,
                  fostering an inclusive environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <Target className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle>Responsibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We encourage students to take ownership of their learning and behavior, teaching accountability and
                  social responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <Heart className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We cultivate empathy, kindness, and concern for others, teaching students to be sensitive to the needs
                  of their community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-500">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-indigo-500 mb-2" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We embrace new ideas, teaching methods, and technologies that enhance learning and prepare students
                  for the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">40 Years of Success</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <Users className="h-6 w-6 md:h-10 md:w-10 text-red-600" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">5,000+</div>
              <div className="text-gray-600 text-sm md:text-base">Alumni Worldwide</div>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <Award className="h-6 w-6 md:h-10 md:w-10 text-blue-600" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">100+</div>
              <div className="text-gray-600 text-sm md:text-base">Awards & Recognition</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <BookOpen className="h-6 w-6 md:h-10 md:w-10 text-green-600" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">25</div>
              <div className="text-gray-600 text-sm md:text-base">Graduation Sets</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <Heart className="h-6 w-6 md:h-10 md:w-10 text-purple-600" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">40</div>
              <div className="text-gray-600 text-sm md:text-base">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
