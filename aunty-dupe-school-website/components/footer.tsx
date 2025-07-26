import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/school-logo.png" alt="School Logo" width={50} height={50} className="rounded-full" />
              <div>
                <h5 className="font-bold">Aunty Dupe School</h5>
                <p className="text-sm text-gray-400">Est. 1985</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Nurturing tomorrow's leaders through quality education and character development.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Programs</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Nursery/Creche (Ages 2-5)</li>
              <li>Primary School (Ages 6-12)</li>
              <li>After School Care</li>
              <li>Transportation Services</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-red-500" />
                <span>
                  Ipetu Ijesha Express Road
                  <br />
                  Ile-Oluji, Ondo State
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>+234 (0) XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span>info@auntydupeschool.edu.ng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Aunty Dupe Nursery and Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
