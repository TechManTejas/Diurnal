import { useState } from 'react'
import { Badge, Button, Card, Pagination, Table, Tabs, Timeline } from 'flowbite-react'
import { NavLink } from "react-router-dom"

function DashboardSection() {

    const [tab, setTab] = useState(0);

    function renderTabContent() {

        if (tab === 0) {
            return (
                <>  
                <div>
                        <Tabs.Group
                            aria-label="Tabs with underline"
                            style="underline"
                        >
                            <Tabs.Item title="Profile">
                                <div>
                                    <Table striped={true}>
                                        <Table.Head>
                                            <Table.HeadCell>
                                                Product name
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Color
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Category
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Price
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y">
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Apple MacBook Pro 17"
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Sliver
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Laptop
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $2999
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <a
                                                        href="/tables"
                                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                    >
                                                        Edit
                                                    </a>
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Microsoft Surface Pro
                                                </Table.Cell>
                                                <Table.Cell>
                                                    White
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Laptop PC
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $1999
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <a
                                                        href="/tables"
                                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                    >
                                                        Edit
                                                    </a>
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Magic Mouse 2
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Black
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Accessories
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $99
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <a
                                                        href="/tables"
                                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                    >
                                                        Edit
                                                    </a>
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Google Pixel Phone
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Gray
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Phone
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $799
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <a
                                                        href="/tables"
                                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                    >
                                                        Edit
                                                    </a>
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Apple Watch 5
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Red
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Wearables
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $999
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <a
                                                        href="/tables"
                                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                    >
                                                        Edit
                                                    </a>
                                                </Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item
                                active={true}
                                title="Dashboard"
                            >
                                Dashboard content
                            </Tabs.Item>
                            <Tabs.Item title="Settings">
                                Settings content
                            </Tabs.Item>
                            <Tabs.Item title="Contacts">
                                Contacts content
                            </Tabs.Item>
                            <Tabs.Item
                                disabled={true}
                                title="Disabled"
                            >
                                Disabled content
                            </Tabs.Item>
                        </Tabs.Group>
                </div>
                    

                </>
            )
        } else if (tab === 1) {
            return (
                <>
                    <div className="flex">

                        <div className="mr-5">
                            <img className="rounded-md object-cover h-auto w-96" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
                            <div className="flex justify-end">
                                <Button>
                                    Edit
                                </Button>
                            </div>
                        </div>

                        <div className="w-full bg-slate-50 p-3 rounded-md">
                            <div className="bg-sky-300 p-3 rounded-lg">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-xl leading-none text-gray-900 md:text-xl dark:text-white">Store Presence</h2>
                                    </div>
                                    <div>
                                        <Button>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <h5 className="flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                                <div className="m-1">
                                    <Badge
                                        color="success"
                                        size="sm"
                                    >
                                        Open
                                    </Badge></div>
                            </h5>

                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>

                            <div className="bg-sky-300 p-3 rounded-lg">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-xl leading-none text-gray-900 md:text-xl dark:text-white">Store Details</h2>
                                    </div>
                                    <div>
                                        <Button>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="m-5">
                                <>
                                    <Card>
                                        <div className="flex">
                                            <div className="flex flex-col items-center">
                                                <img
                                                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                    alt="Bonnie image"
                                                />
                                                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                                    Bonnie Green
                                                </h5>
                                            </div>
                                            <div className="w-max pl-5">
                                                <div>
                                                    <span className="text-lg font-medium text-gray-900 dark:text-white">Contact </span> 123-123-1234
                                                </div>
                                                <div>
                                                    <span className="text-lg font-medium text-gray-900 dark:text-white">Address </span> Plot N0 216/sect 5, Shop No 4, Snehal Chs, Charkop, Nr Bus Depot, Kandivali (west)
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            </div>

                            <div className="bg-sky-300 p-3 rounded-lg">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-xl leading-none text-gray-900 md:text-xl dark:text-white">Store Rates</h2>
                                    </div>
                                    <div>
                                        <Button>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="m-5">
                                <>
                                    <Table hoverable={true}>
                                        <Table.Head>
                                            <Table.HeadCell>
                                                Product name
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Color
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Category
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Price
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y">
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Apple MacBook Pro 17"
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Sliver
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Laptop
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $2999
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Microsoft Surface Pro
                                                </Table.Cell>
                                                <Table.Cell>
                                                    White
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Laptop PC
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $1999
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    Magic Mouse 2
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Black
                                                </Table.Cell>
                                                <Table.Cell>
                                                    Accessories
                                                </Table.Cell>
                                                <Table.Cell>
                                                    $99
                                                </Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </>

                            </div>

                            <div className="bg-sky-300 p-3 rounded-lg">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-xl leading-none text-gray-900 md:text-xl dark:text-white">Store History</h2>
                                    </div>
                                    <div>
                                        <Button>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="m-5">
                                <>
                                    <Timeline>
                                        <Timeline.Item>
                                            <Timeline.Point />
                                            <Timeline.Content>
                                                <Timeline.Time>
                                                    February 2022
                                                </Timeline.Time>
                                                <Timeline.Title>
                                                    Application UI code in Tailwind CSS
                                                </Timeline.Title>
                                                <Timeline.Body>
                                                    Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                                                </Timeline.Body>
                                            </Timeline.Content>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <Timeline.Point />
                                            <Timeline.Content>
                                                <Timeline.Time>
                                                    March 2022
                                                </Timeline.Time>
                                                <Timeline.Title>
                                                    Marketing UI design in Figma
                                                </Timeline.Title>
                                                <Timeline.Body>
                                                    All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                                                </Timeline.Body>
                                            </Timeline.Content>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <Timeline.Point />
                                            <Timeline.Content>
                                                <Timeline.Time>
                                                    April 2022
                                                </Timeline.Time>
                                                <Timeline.Title>
                                                    E-Commerce UI code in Tailwind CSS
                                                </Timeline.Title>
                                                <Timeline.Body>
                                                    Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                                                </Timeline.Body>
                                            </Timeline.Content>
                                        </Timeline.Item>
                                    </Timeline>
                                    <div className="flex justify-center pb-2 rounded-lg">
                                        <Pagination
                                            currentPage={1}
                                            totalPages={100}
                                        // onPageChange={onPageChange}
                                        />
                                    </div>
                                </>
                            </div>

                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className="bg-sky-100 p-3 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">Dashboard</h2>
                    </div>
                    <div className="flex">
                        <Button color="gray" onClick={(e) => { setTab(0) }}>
                            Orders
                        </Button>
                        <Button color="gray" onClick={(e) => { setTab(1) }}>
                            Profile
                        </Button>
                    </div>
                </div>
            </div>

            <div className="m-1">
                <Card>
                    {
                        renderTabContent()
                    }
                </Card>
            </div>
        </>
    )
}

export default DashboardSection;