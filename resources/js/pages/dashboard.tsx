import { useState } from "react"

import { Star } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { BP, Osiris, Teams, Outlook, Ans, Myx, Isas } from '../../assets/han-apps/export-han-apps'

const apps = [
    {
        img: BP,
        value: "brightspace",
        trigger: "Brightspace",
        link: "https://leren.han.nl/",
        favorite: true,
    },
    {
        img: Osiris,
        value: "osiris",
        trigger: "Osiris",
        link: "https://osiris.han.nl/",
        favorite: true,
    },
    {
        img: Teams,
        value: "teams",
        trigger: "Teams",
        link: "https://teams.microsoft.com/",
        favorite: false,
    },
    {
        img: Outlook,
        value: "outlook",
        trigger: "Outlook",
        link: "https://outlook.office.com/mail/",
        favorite: false,
    },
    {
        img: Isas,
        value: "isas",
        trigger: "Isas",
        link: "https://isas.han.nl/",
        favorite: false,
    },
    {
        img: Ans,
        value: "ans",
        trigger: "Ans",
        link: "https://ans.han.nl/",
        favorite: false,
    },
    {
        img: Myx,
        value: "myx",
        trigger: "MyX",
        link: "https://han.myx.nl/",
        favorite: false,
    },
]

const Dashboard = () => {
    const [appList, setAppList] = useState(apps)

    const favoriteApps = appList.filter((app) => app.favorite)
    const otherApps = appList.filter((app) => !app.favorite)

    const toggleFavorite = (value: any) => {
        setAppList((currentApps) =>
            currentApps.map((app) =>
                app.value === value
                    ? { ...app, favorite: !app.favorite }
                    : app
            )
        )
    }

    const renderApp = (app: any) => (
        <Card
            key={app.value}
            className="group relative overflow-hidden transition-all duration-300"
        >
            <button
                type="button"
                onClick={() => toggleFavorite(app.value)}
                className="absolute right-3 top-3 z-10 rounded-md p-2 transition-colors hover:bg-accent"
                aria-label={
                    app.favorite
                        ? `${app.trigger} uit favorieten verwijderen`
                        : `${app.trigger} toevoegen aan favorieten`
                }
            >
                <Star
                    className={`h-5 w-5 ${app.favorite
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                        }`}
                />
            </button>

            <div className="flex flex-col sm:flex-row cursor-pointer" onClick={() => window.open(app.link, "_blank")}>
                <div className="flex h-32 w-full shrink-0 items-center justify-center p-6 sm:w-40">
                    <img
                        src={app.img}
                        alt={app.trigger}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                    <CardHeader>
                        <CardTitle className="text-xl">
                            {app.trigger}
                        </CardTitle>

                        <CardDescription className="mt-2 leading-relaxed">
                            {app.content}
                        </CardDescription>
                    </CardHeader>
                </div>
            </div>
        </Card>
    )

    return (
        <section className="w-full py-8">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4">

                <div>
                    <h2 className="mb-4 text-2xl font-semibold">
                        Favorieten
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {favoriteApps.map(renderApp)}
                    </div>
                </div>

                <div>
                    <h2 className="mb-4 text-2xl font-semibold">
                        Apps
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {otherApps.map(renderApp)}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Dashboard