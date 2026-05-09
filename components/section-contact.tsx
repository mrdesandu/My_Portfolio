'use client'

import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

export function SectionContact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/40 p-6 text-center md:p-10">
        <h2 id="contact-heading" className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </Button>
        </div>
      </div>
      <footer className="mx-auto mt-16 max-w-3xl border-t border-border pt-8 text-center text-xs leading-relaxed text-muted-foreground">
        <p className="mt-1">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </section>
  )
}
