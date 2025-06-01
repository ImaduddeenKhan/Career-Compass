import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  FileCode2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Landing() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-6 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                  Your Career Navigator
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect{" "}
                    <span className="text-primary">Career Path</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Career Compass helps you navigate your professional journey
                    by recommending personalized work opportunities or
                    educational courses based on your unique profile.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/career-path">
                    <Button
                      size="lg"
                      className="gap-1 bg-primary hover:bg-primary/90"
                    >
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-video  rounded-xl lg:order-last">
                <Image
                  src="/heroimg2.png"
                  width={650}
                  height={650}
                  alt="Career Guidance"
                  className="object-contain w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-b ">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">10,000+</h3>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">500+</h3>
                <p className="text-sm text-muted-foreground">Career Paths</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">1,000+</h3>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">95%</h3>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-background border-b"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit mx-auto">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Your Path
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Career Compass offers personalized recommendations in two key
                  areas to help you make informed decisions about your future.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-center gap-3 py-12 lg:grid-cols-3 lg:gap-5">
              <div className="flex flex-col justify-center space-y-4 rounded-2xl bg-background p-6 shadow-lg border-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Work Opportunities</h3>
                  <p className="text-muted-foreground">
                    Discover job roles and career paths that align with your
                    skills, experience, and aspirations. Get insights into
                    industries where you'll thrive.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Personalized job recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Industry insights and trends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Salary expectations and growth potential</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-2xl bg-background p-6 shadow-lg  border-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Educational Courses</h3>
                  <p className="text-muted-foreground">
                    Find courses, certifications, and learning paths that will
                    enhance your skills and prepare you for your desired career.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Targeted course recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Skill gap analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Learning path creation</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center space-y-4 rounded-2xl bg-background p-6 shadow-lg border-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <FileCode2Icon />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">AI Career Test</h3>
                  <p className="text-muted-foreground">
                    Take an AI-powered assessment that analyzes your skills,
                    interests, and goals to recommend the most suitable career
                    paths for you.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Personalized career path suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>AI-based skill and interest matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Clear roadmap for career growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 border-b"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit mx-auto">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our simple process helps you discover the best path for your
                  future in just a few steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Share Your Profile</h3>
                <p className="text-center text-muted-foreground">
                  Tell us about your education, skills, experience, and career
                  aspirations.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Get Recommendations</h3>
                <p className="text-center text-muted-foreground">
                  Our algorithm analyzes your profile and provides personalized
                  work and course recommendations.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Take Action</h3>
                <p className="text-center text-muted-foreground">
                  Use our insights to make informed decisions about your next
                  career or educational move.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit mx-auto">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Hear from people who have transformed their careers with
                  Career Compass.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-background border-2 p-6 shadow-lg">
                <div className="space-y-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Career Compass helped me identify the perfect course to
                    transition into data science. Six months later, I landed my
                    dream job!"
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                  <div>
                    <p className="text-sm font-medium">Rahul Shaw</p>
                    <p className="text-xs text-muted-foreground">
                      Data Scientist
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-background border-2 p-6 shadow-lg">
                <div className="space-y-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I was stuck in a career I didn't enjoy. Career Compass
                    showed me a path to UX design that matched my creative
                    skills. Best decision ever!"
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                  <div>
                    <p className="text-sm font-medium">Aryan Singh</p>
                    <p className="text-xs text-muted-foreground">UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-background border-2 p-6 shadow-lg md:col-span-2 lg:col-span-1">
                <div className="space-y-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "As a recent graduate, I was overwhelmed by career options.
                    Career Compass narrowed it down based on my strengths and
                    interests. Now I'm thriving in digital marketing!"
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                  <div>
                    <p className="text-sm font-medium">Shashank Mandal</p>
                    <p className="text-xs text-muted-foreground">
                      Marketing Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-specificFooter text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Take AI Test?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Get Personalized career path generated by Our Own AI Model.
                </p>
              </div>
              <Link href="/careertest">
                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200%] animate-border-gradient text-white"
                >
                  Take Career Test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
