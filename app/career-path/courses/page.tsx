"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function CoursesQuestionsPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [city, setCity] = useState("")
  const [budget, setBudget] = useState([250000]) // Budget in INR (₹2.5 Lakhs default)
  const [timeline, setTimeline] = useState("")

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Navigate to recommendations with all parameters
      router.push(`/career-path/courses/recommendations?city=${city}&budget=${budget[0]}&timeline=${timeline}`)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const isStepComplete = () => {
    if (step === 1) return city !== ""
    if (step === 2) return budget.length > 0
    if (step === 3) return timeline !== ""
    return false
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 mt-24">
        <div className="max-w-md w-full mx-auto">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Tell Us About Your Preferences</h1>
              <p className="text-muted-foreground">Help us find the best courses for you</p>
            </div>

            <div className="relative pt-2">
              <div className="overflow-hidden h-2 mb-4 flex rounded bg-secondary">
                <div
                  className="shadow-none flex flex-col justify-center bg-primary transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <div className={`text-xs ${step >= 1 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  Step 1
                </div>
                <div className={`text-xs ${step >= 2 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  Step 2
                </div>
                <div className={`text-xs ${step >= 3 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  Step 3
                </div>
              </div>
            </div>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {step === 1 && (
                    <>
                      <MapPin className="mr-2 h-5 w-5" />
                      Where are you located?
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <DollarSign className="mr-2 h-5 w-5" />
                      What's your education budget?
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <Clock className="mr-2 h-5 w-5" />
                      How quickly do you want to start earning?
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Select your city</Label>
                      <Select value={city} onValueChange={setCity}>
                        <SelectTrigger id="city">
                          <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="kolkata">Kolkata</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                          <SelectItem value="jaipur">Jaipur</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Budget for education: ₹{(budget[0] / 100000).toFixed(1)} Lakhs</Label>
                      <Slider
                        value={budget}
                        min={0}
                        max={500000}
                        step={10000}
                        onValueChange={setBudget}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹0</span>
                        <span>₹5 Lakhs</span>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <Button
                        variant={timeline === "short" ? "default" : "outline"}
                        className="justify-start h-auto py-4 px-4"
                        onClick={() => setTimeline("short")}
                      >
                        <div className="flex flex-col items-start text-left">
                          <span className="font-medium">Within 3 years</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            I want to start earning as soon as possible
                          </span>
                        </div>
                      </Button>

                      <Button
                        variant={timeline === "long" ? "default" : "outline"}
                        className="justify-start h-auto py-4 px-4"
                        onClick={() => setTimeline("long")}
                      >
                        <div className="flex flex-col items-start text-left">
                          <span className="font-medium">More than 3 years</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            I'm willing to invest more time in education
                          </span>
                        </div>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button onClick={handleNext} disabled={!isStepComplete()} className="group">
                  {step === 3 ? "See Recommendations" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

