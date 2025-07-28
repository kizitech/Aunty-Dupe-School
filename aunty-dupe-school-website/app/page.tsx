import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, Heart, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-600 text-white mb-4">40+ Years of Educational Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.3] md:leading-[1.4] mb-6">
                Where Young Minds Flourish and Dreams Take Flight
              </h2>
              <p className="text-base sm:text-xl text-gray-700 mb-8">
                Nurturing Tomorrow's Leaders Since 1985. At Aunty Dupe Nursery and Primary School, we believe that every
                child is a unique gift with unlimited potential. For four decades, we have been the cornerstone of
                quality education in Ile-Oluji, Ondo State.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admissions">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full">
                    Apply for Admission
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent w-full"
                  >
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">5,000+</div>
                  <div className="text-sm text-gray-600">Alumni Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">40</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">25</div>
                  <div className="text-sm text-gray-600">Graduations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/students-group.jpg"
                alt="Aerial view of Aunty Dupe School"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border-4 border-red-600 mx-auto"
              />
              <div className="absolute -bottom-6 -left-[-8%] bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 md:h-6 md:w-6 text-yellow-500" />
                  <span className="text-sm md:text-base font-medium md:font-semibold">Award-Winning Institution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Why Choose Aunty Dupe</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Excellence in Every Aspect</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to education combines academic rigor with character development, preparing
              students for success in all areas of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Consistent top performance in competitions and 100% pass rates in external examinations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle>Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Holistic education that develops moral values, integrity, and leadership skills.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Small Class Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized attention with optimal teacher-to-student ratios for effective learning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Modern Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  State-of-the-art classrooms, computer labs, library, and recreational facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Campus Life</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience Our Vibrant Community</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse into daily life at Aunty Dupe School through our photo gallery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/student-portrait-1.jpg"
                alt="Student portrait"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">Our Students</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/school-facility-1.jpg"
                alt="School facilities"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">Modern Classrooms</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/playing-field.jpg"
                alt="Playing field"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">Sports & Recreation</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Family?</h3>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Give your child the foundation they deserve. Join thousands of successful alumni who started their journey
            at Aunty Dupe Nursery and Primary School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                Start Application Process
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                Schedule Campus Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
