import Link from "next/link"
import { BookOpen, ArrowLeft } from "lucide-react"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"

export const metadata = {
  title: "Forgot Password | Muallimin Global Islamic Academy",
  description: "Reset your password to regain access to your account.",
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Muallimin</span>
        </Link>
        
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Forgot your password?
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {"No worries! Enter your email and we'll send you reset instructions."}
          </p>
        </div>

        <ForgotPasswordForm />

        <Link
          href="/login"
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  )
}
