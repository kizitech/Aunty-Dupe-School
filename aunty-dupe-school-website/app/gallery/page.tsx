"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/students-group.jpg",
    alt: "Students in school uniform",
    category: "Students",
    title: "Our Students in Uniform",
  },
  {
    src: "/images/school-aerial-view.jpg",
    alt: "Aerial view of school campus",
    category: "Campus",
    title: "School Campus Aerial View",
  },
  {
    src: "/images/graduation.jpg",
    alt: "Graduation ceremony",
    category: "Events",
    title: "Graduation Ceremony",
  },
  {
    src: "/images/teachers.jpg",
    alt: "Teaching staff",
    category: "Staff",
    title: "Our Dedicated Teachers",
  },
  {
    src: "/images/students-uniform.jpg",
    alt: "Students in uniform",
    category: "Students",
    title: "Students in School Uniform",
  },
  {
    src: "/images/school-facility-1.jpg",
    alt: "School classroom block",
    category: "Facilities",
    title: "Modern Classroom Block",
  },
  {
    src: "/images/school-bus-1.jpg",
    alt: "School transportation",
    category: "Transportation",
    title: "School Bus Service",
  },
  {
    src: "/images/students-group-20.jpg",
    alt: "Group of students",
    category: "Students",
    title: "Happy Students",
  },
  {
    src: "/images/playing-field.jpg",
    alt: "Students playing on field",
    category: "Sports",
    title: "Sports and Recreation",
  },
  {
    src: "/images/students-casual.jpg",
    alt: "Students in casual moment",
    category: "Students",
    title: "Students Having Fun",
  },
  {
    src: "/images/school-buses.jpg",
    alt: "School transportation fleet",
    category: "Transportation",
    title: "Transportation Fleet",
  },
  {
    src: "/images/proprietress.jpg",
    alt: "School proprietress",
    category: "Leadership",
    title: "Our Proprietress",
  },
  {
    src: "/images/student-portrait-1.jpg",
    alt: "Student in school uniform",
    category: "Students",
    title: "Student Portrait",
  },
  {
    src: "/images/student-portrait-2.jpg",
    alt: "Young student in uniform",
    category: "Students",
    title: "Happy Student",
  },
  {
    src: "/images/teacher-professional-1.jpg",
    alt: "Professional teacher",
    category: "Staff",
    title: "Dedicated Teacher",
  },
  {
    src: "/images/graduation-ceremony.jpg",
    alt: "Students in graduation gowns",
    category: "Events",
    title: "Graduation Day Celebration",
  },
  {
    src: "/images/student-portrait-3.jpg",
    alt: "Student in front of school building",
    category: "Students",
    title: "Student at Upper Basic Block",
  },
  {
    src: "/images/teacher-professional-2.jpg",
    alt: "Professional teacher portrait",
    category: "Staff",
    title: "Experienced Educator",
  },
  {
    src: "/images/student-sweater-1.jpg",
    alt: "Student in school sweater",
    category: "Students",
    title: "Student in School Sweater",
  },
  {
    src: "/images/teacher-professional-3.jpg",
    alt: "Teacher with glasses",
    category: "Staff",
    title: "Professional Educator",
  },
  {
    src: "/images/student-sweater-2.jpg",
    alt: "Student in red sweater",
    category: "Students",
    title: "Young Learner",
  },
  {
    src: "/images/student-portrait-4.jpg",
    alt: "Student portrait",
    category: "Students",
    title: "Bright Student",
  },
]

const categories = [
  "All",
  "Students",
  "Campus",
  "Facilities",
  "Staff",
  "Events",
  "Sports",
  "Transportation",
  "Leadership",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-purple-600 text-white mb-4">Photo Gallery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Capturing Moments of Excellence</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              Explore life at Aunty Dupe Nursery and Primary School through our comprehensive photo gallery. From daily
              classroom activities to special events, see what makes our school community special.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-semibold">Click to view</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 text-xs" variant="secondary">
                      {image.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 text-sm">{image.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
              <Badge className="mb-2" variant="secondary">
                {selectedImage.category}
              </Badge>
              <h3 className="font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
