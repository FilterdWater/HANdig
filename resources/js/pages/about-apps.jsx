import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  BP,
  Osiris,
  Teams,
  Outlook,
  Ans,
  Myx,
  Isas,
} from "../../assets/han-apps/export-han-apps"

const AboutApps = () => {
  const [selectedFilters, setSelectedFilters] = useState([])

  const items = [
    {
      img: BP,
      value: "brightspace",
      trigger: "Brightspace",
      content:
        "BrightSpace (De digitale leeromgeving van je opleiding. Hier vind je belangrijke informatie over de opleiding en de verschillende vakken, zoals lesmateriaal, opdrachten, instructies en andere informatie die je nodig hebt voor je studie.)",
      link: "https://leren.han.nl/",
      category: "Lesmateriaal",
    },
    {
      img: Osiris,
      value: "osiris",
      trigger: "Osiris",
      content:
        "Osiris (Hier kun je je inschrijven voor onderwijs en toetsen. Daarnaast kun je in Osiris je behaalde resultaten bekijken en je studievoortgang bijhouden, zodat je weet welke onderdelen je al hebt afgerond en welke nog openstaan.)",
      link: "https://osiris.han.nl/",
      category: "Examens",
    },
    {
      img: Teams,
      value: "teams",
      trigger: "Teams",
      content:
        "Teams (Wordt gebruikt voor communicatie en samenwerking met studenten en docenten. Via Teams kunnen berichten, bestanden en opdrachten worden gedeeld en ontvangen. Ook kan het gebruikt worden om samen te werken aan projecten en opdrachten.)",
      link: "https://teams.microsoft.com/",
      category: "Communicatie",
    },
    {
      img: Outlook,
      value: "outlook",
      trigger: "Outlook",
      content:
        "Outlook (Het e-mailsysteem van de HAN. Hier ontvang je belangrijke berichten van docenten, de opleiding en andere medewerkers. Het is daarom belangrijk om je HAN-mail regelmatig te controleren.)",
      link: "https://outlook.office.com/mail/",
      category: "Email",
    },
    {
      img: Isas,
      value: "isas",
      trigger: "Isas",
      content:
        "iSAS (Een systeem dat specifiek binnen onze academie wordt gebruikt. Hierover is weinig informatie te vinden op Insite. Voor meer informatie en uitleg over het gebruik van iSAS kun je ook kijken op isas.han.nl.)",
      link: "https://isas.han.nl/",
      category: "",
    },
    {
      img: Ans,
      value: "ans",
      trigger: "Ans",
      content:
        "ANS (Een digitaal toetssysteem waarmee je online toetsen kunt maken. Wanneer een toets digitaal wordt afgenomen, kan ANS worden gebruikt om de vragen te bekijken en de antwoorden in te vullen.)",
      link: "https://ans.han.nl/",
      category: "Examens",
    },
    {
      img: Myx,
      value: "myx",
      trigger: "MyX",
      content:
        "MyX (Het systeem waarin je je rooster kunt bekijken. Hier kun je zien wanneer en waar je lessen, bijeenkomsten en andere onderwijsactiviteiten plaatsvinden. Het is handig om je rooster regelmatig te controleren, omdat wijzigingen kunnen worden doorgevoerd.)",
      link: "https://han.myx.nl/",
      category: "Rooster",
    },
  ]

  const filters = [
    "Rooster",
    "Email",
    "Lesmateriaal",
    "Examens",
    "Communicatie",
  ]

  const handleFilterChange = (filter) => {
    setSelectedFilters((currentFilters) => {
      if (currentFilters.includes(filter)) {
        return currentFilters.filter((item) => item !== filter)
      }

      return [...currentFilters, filter]
    })
  }

  const filteredItems =
    selectedFilters.length === 0
      ? items
      : items.filter((item) => selectedFilters.includes(item.category))

  return (
    <div className="w-full h-full flex flex-col items-center gap-4">
      <div className="w-full h-auto flex flex-col p-4 border-accent border-2 rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4">
          Filters
        </h2>

        <div className="w-full h-auto grid grid-cols-2 gap-x-4">
          {filters.map((filter) => (
            <div
              key={filter}
              className="flex items-center gap-2 h-10"
            >
              <input
                type="checkbox"
                id={filter}
                checked={selectedFilters.includes(filter)}
                onChange={() => handleFilterChange(filter)}
              />

              <label htmlFor={filter}>
                {filter}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full flex gap-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {filteredItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
            >
              <AccordionTrigger>
                <img
                  src={item.img}
                  className="size-14"
                  alt=""
                />
                {item.trigger}
              </AccordionTrigger>

              <AccordionContent>
                {item.content}{" "}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ga naar {item.trigger}
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default AboutApps