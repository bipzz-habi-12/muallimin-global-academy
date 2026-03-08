import Link from "next/link"
import { BookOpen } from "lucide-react"
import { RegisterForm } from "@/components/auth/register-form"

export const metadata = {
  title: "Register | Muallimin Global Islamic Academy",
  description: "Create your account and start your learning journey today.",
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image/Pattern */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex h-full flex-col justify-center bg-primary p-12 text-primary-foreground">
          <div className="mx-auto max-w-md">
            <h2 className="text-3xl font-bold">Start Your Journey to Excellence</h2>
            <p className="mt-4 text-primary-foreground/80">
              Join our global community of learners and unlock access to world-class 
              Islamic education and academic preparation.
            </p>
            
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Create Your Account</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Sign up in less than 2 minutes with your email or social accounts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Choose Your Courses</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Browse 1,200+ courses and pick what interests you most.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Start Learning</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Access lessons, join live classes, and track your progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Muallimin</span>
          </Link>
          
          <h1 className="mt-8 text-2xl font-bold tracking-tight text-foreground">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Start your 7-day free trial. No credit card required.
          </p>

          <RegisterForm />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
