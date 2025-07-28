"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/admissions", label: "Admissions" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b-2 border-red-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/school-logo.png"
              alt="Aunty Dupe School Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-red-700">Aunty Dupe Nursery & Primary School</h1>
              <p className="text-xs text-gray-600">Education is Better Than Corals • Est. 1985</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${isActive ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600"
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-2 font-medium transition-colors ${isActive ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
