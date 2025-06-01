"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function CareerPathPage() {
  const router = useRouter()
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  const handlePathSelect = (path: string) => {
    setSelectedPath(path)

    // Navigate to the appropriate page based on selection
    setTimeout(() => {
      if (path === "work") {
        router.push("/career-path/work")
      } else {
        router.push("/career-path/courses")
      }
    }, 300)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 mt-24">
        <div className="max-w-4xl w-full mx-auto">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Choose Your Career Path</h1>
              <p className="text-muted-foreground">Select the option that best fits your current goals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className={`cursor-pointer transition-all bg-background  hover:shadow-lg ${selectedPath === "work" ? "ring-4 ring-primary" : ""}`}
                onClick={() => handlePathSelect("work")}
              >
                <CardHeader className="text-center">
                  <Briefcase className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="text-2xl">Work</CardTitle>
                  <CardDescription>Start earning immediately</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Choose this option if you want to enter the workforce right away and start earning an income.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="group">
                    Select
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>

              <Card
                className={`cursor-pointer transition-all bg-background hover:shadow-lg ${selectedPath === "courses" ? "ring-2 ring-primary" : ""}`}
                onClick={() => handlePathSelect("courses")}
              >
                <CardHeader className="text-center">
                  <GraduationCap className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="text-2xl">Courses & Exams</CardTitle>
                  <CardDescription>Continue your education</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Choose this option if you want to pursue further education, courses, or prepare for exams.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="group">
                    Select
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

