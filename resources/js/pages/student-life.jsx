import React from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

import intonijmegen from "../../assets/student-life/Intonijmegen.png"
import SSHn from "../../assets/student-life/SSHn.png"
import Studentensteden from "../../assets/student-life/Studentensteden.png"

const apps = [
  {
    image: intonijmegen,
    title: "Into Nijmegen",
    description:
      "Ontdek evenementen, activiteiten en alles wat Nijmegen te bieden heeft voor studenten.",
    url: "https://intonijmegen.nl",
    linkText: "Ga naar Into Nijmegen",
  },
  {
    image: SSHn,
    title: "SSH&",
    description:
      "Vind studentenkamers en meer informatie over wonen voor studenten in Nijmegen.",
    url: "https://www.sshn.nl",
    linkText: "Ga naar SSH&",
  },
  {
    image: Studentensteden,
    title: "Studentensteden",
    description:
      "Bekijk handige informatie over studentensteden, opleidingen, wonen en het studentenleven.",
    url: "https://studentensteden.nl",
    linkText: "Ga naar Studentensteden",
  },
]

const AboutApps = () => {
  return (
    <section className="w-full py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4">
        {apps.map((app) => (
          <Card
            key={app.title}
            className="group overflow-hidden transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Logo / afbeelding */}
              <div className="flex h-40 w-full shrink-0 items-center justify-center p-6 sm:h-auto sm:w-48">
                <img
                  src={app.image}
                  alt={app.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300"
                />
              </div>

              {/* Tekst */}
              <div className="flex flex-1 flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                  <CardDescription className="mt-2 leading-relaxed">
                    {app.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {app.linkText} →
                  </a>
                </CardFooter>
              </div>

            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default AboutApps
