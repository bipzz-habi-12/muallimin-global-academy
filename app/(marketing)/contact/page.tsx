import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"

export const metadata = {
  title: "Contact Us | Muallimin Global Islamic Academy",
  description: "Get in touch with our team. We're here to help with any questions about our courses and programs.",
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "support@muallimin.academy",
    href: "mailto:support@muallimin.academy",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team",
    value: "Start a conversation",
    href: "#chat",
  },
  {
    icon: Headphones,
    title: "Help Center",
    description: "Browse our FAQ and guides",
    value: "Visit Help Center",
    href: "/faq",
  },
]

const offices = [
  {
    city: "Dubai, UAE",
    address: "Business Bay, Tower 1, Level 15",
    hours: "Sun-Thu: 9:00 AM - 6:00 PM",
  },
  {
    city: "Kuala Lumpur, Malaysia",
    address: "Petronas Twin Towers, Level 42",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  {
    city: "London, UK",
    address: "Canary Wharf, One Canada Square",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM",
  },
]

export default function ContactPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Get in{" "}
                <span className="text-primary">Touch</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Have questions about our courses or need help getting started? 
                {"We're here to help you on your learning journey."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="rounded-2xl border bg-card p-6 text-center transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{method.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <div className="rounded-2xl border bg-card p-8">
                <h2 className="text-2xl font-bold text-card-foreground">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and {"we'll"} get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Our Offices</h2>
                <p className="mt-2 text-muted-foreground">
                  Visit us at one of our global offices.
                </p>
                
                <div className="mt-8 space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="rounded-xl border bg-card p-6">
                      <h3 className="font-semibold text-card-foreground">{office.city}</h3>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
