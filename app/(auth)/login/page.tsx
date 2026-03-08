import Link from "next/link"
import { BookOpen } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"

export const metadata = {
  title: "Login | Muallimin Global Islamic Academy",
  description: "Sign in to your account to access courses and continue learning.",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Muallimin</span>
          </Link>
          
          <h1 className="mt-8 text-2xl font-bold tracking-tight text-foreground">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account to continue your learning journey.
          </p>

          <LoginForm />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex h-full flex-col justify-center bg-muted p-12">
          <div className="mx-auto max-w-md">
            <blockquote className="text-lg text-muted-foreground">
              <p className="font-serif text-2xl leading-relaxed">
                {"\"Seek knowledge from the cradle to the grave.\""}
              </p>
              <footer className="mt-4 text-sm">
                <span className="font-medium text-foreground">Prophet Muhammad (PBUH)</span>
              </footer>
            </blockquote>
            
            <div className="mt-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-muted bg-muted-foreground/20"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-medium">Join 50,000+ learners</div>
                  <div className="text-sm text-muted-foreground">from 120+ countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
