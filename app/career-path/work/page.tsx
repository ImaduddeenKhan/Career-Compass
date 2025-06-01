"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Book, GraduationCap, Wrench, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function WorkEducationLevelPage() {
  const router = useRouter()
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level)

    // Navigate to the recommendations page with the selected level
    setTimeout(() => {
      router.push(`/career-path/work/recommendations?level=${level}`)
    }, 300)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 mt-24">
        <div className="max-w-5xl w-full mx-auto">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Select Your Education Level</h1>
              <p className="text-muted-foreground">Choose your highest completed education level</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card
                className={`cursor-pointer transition-all bg-background hover:shadow-lg ${selectedLevel === "10th" ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleLevelSelect("10th")}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
                    <Book className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mt-4">10th Pass</CardTitle>
                  <CardDescription>Completed 10th standard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Jobs and opportunities available for those who have completed 10th standard education.
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
                className={`cursor-pointer transition-all bg-background hover:shadow-lg ${selectedLevel === "12th" ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleLevelSelect("12th")}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mt-4">12th Pass</CardTitle>
                  <CardDescription>Completed 12th standard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Jobs and opportunities available for those who have completed 12th standard education.
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
                className={`cursor-pointer transition-all bg-background hover:shadow-lg ${selectedLevel === "unskilled" ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleLevelSelect("unskilled")}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mt-4">Unskilled Worker</CardTitle>
                  <CardDescription>No formal education required</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Jobs and opportunities available for those without formal education but willing to learn.
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

