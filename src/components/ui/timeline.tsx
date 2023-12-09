import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";

export function Timeline() {
    const items = [
        {
            title: 'CTO & Co-Founder at Trialing',
            description: 'Trialing is a tool for physicians to find the best clinical trial for their patients, to know where is this trial located and how to contact the principal investigator.',
            date: 'June 2021 - Present',
            stack: 'Django, AWS, Flutter, Python, ETLs, PowerBI'
        },
        {
            title: 'HaBeats',
            description: 'App for a consortium of three of the most important hospitals in Europe, that helps patients reduce the risk during knee and hip surgery.',
            date: 'June 2020 - June 2021',
            stack: 'Python, React, React Native, Spring Boot, AWS, Java'
        },
        {
            title: 'Software Engineer at Globant',
            description: 'Worked for a big client in the US, developing a platform for the management of clinical trials.',
            date: 'June 2019 - June 2020',
            stack: 'Python, React, React Native, Spring Boot, AWS, Java'
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <ol className="hidden md:block">
                {items.map((item, index) => (
                    <TimelineItem item={item} hidden={index % 2 === 1} key={index} leftColumn/>
                ))}
            </ol>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 hidden md:block">
                {items.map((item, index) => (
                    <TimelineItem item={item} hidden={index % 2 === 0} key={index} rightColumn/>
                ))}
            </ol>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 md:hidden">
                {items.map((item, index) => (
                    <TimelineItem item={item} key={index} rightColumn/>
                ))}
            </ol>
        </div>
    )
}

// @ts-ignore
export function TimelineItem({item, hidden = false, rightColumn = false, leftColumn = false}) {
    if (hidden) return <div className={"h-60"}></div>
    return (
        <li className='group mb-10 mx-6'>
            {rightColumn &&
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 group-hover:bg-gray-500 transition-colors">
                </div>
            }
            {leftColumn &&
                <div
                    className="relative float-right w-3 h-3 bg-gray-200 rounded-full mt-1.5 -end-8 border border-white dark:border-gray-900 dark:bg-gray-700 group-hover:bg-gray-500 transition-colors">
                </div>
            }
            <Card>
                <CardHeader>
                    <time className="mb-1 text-sm font-normal text-gray-400 dark:text-gray-500">
                        {item.date}
                    </time>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                    </p>
                    <p className="mt-4 text-sm font-normal text-gray-400 dark:text-gray-500">
                        <span className="font-bold">Stack:</span> {item.stack}
                    </p>
                </CardContent>
            </Card>
        </li>
    )
}