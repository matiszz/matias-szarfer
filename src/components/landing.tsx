import Link from "next/link"
import {Button} from "@/components/ui/button"
import {CardHeader, CardContent, Card} from "@/components/ui/card"
import Image from "next/image";

export function Landing() {
    return (
        <div key="1" className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-mono">
            <header className="w-full px-4 lg:px-6 h-16 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Image src={"/images/standard.png"} alt="Matias Szarfer Icon" width={48} height={48}/>
                    <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Matias Szarfer</span>
                    <span className="sr-only">Home</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-200"
                        href="#"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-200"
                        href="#"
                    >
                        Work
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-200"
                        href="#"
                    >
                        Contact
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-200"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section
                    className="w-full py-24 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Matias Szarfer</h1>
                    <h2 className="mt-4 text-2xl font-medium">CTO & Co-Founder at <Link href="https://trialing.org"
                              target="_blank"
                              className="underline hover:no-underline">Trialing</Link>
                    </h2>
                    <Button
                        className="mt-6 py-2 px-6 text-black bg-white border-white rounded-full hover:bg-gray-700 hover:text-white"
                        variant="outline"
                    >
                        Get in touch
                    </Button>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32" id="about">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                        <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            I am a seasoned computer scientist with a passion for driving technological innovation. As
                            the CTO and
                            Co-Founder of Trialing, I strive to leverage cutting-edge technologies to deliver
                            exceptional solutions
                            for our clients.
                        </p>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="work">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <Card>
                                <CardHeader>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Trialing</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        As the CTO and Co-Founder of Trialing, I lead a team of dedicated professionals
                                        to provide
                                        comprehensive IT solutions for our clients.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Previous Work</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        I have a rich history of working with a variety of technology companies,
                                        bringing innovative
                                        solutions to the market.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
                        <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            Feel free to reach out if you're looking for a collaborator, or just to say hi. My inbox is
                            always open.
                        </p>
                        <a href="#" rel="noopener noreferrer" target="_blank">
                            <Button className="mt-6 py-2 px-6 text-gray-700 border-gray-700 rounded-full"
                                    variant="outline">
                                Book a call
                            </Button>
                        </a>
                        <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            Or connect with me on
                            <Link className="ml-2 text-blue-600 hover:underline" href="#" rel="noopener noreferrer"
                                  target="_blank">
                                LinkedIn
                            </Link>
                            .
                        </p>
                    </div>
                </section>
            </main>
            <footer className="w-full h-16 flex items-center justify-center border-t text-gray-500 dark:text-gray-400">
                © Matias Szarfer
            </footer>
        </div>
    )
}


// @ts-ignore
function ComputerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="8" x="5" y="2" rx="2"/>
            <rect width="20" height="8" x="2" y="14" rx="2"/>
            <path d="M6 18h2"/>
            <path d="M12 18h6"/>
        </svg>
    )
}