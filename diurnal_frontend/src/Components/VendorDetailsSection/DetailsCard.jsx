import {useState} from 'react'
import { Badge, Button, Card,Label, Table,Textarea, Timeline } from 'flowbite-react'

function DetailsCard() {

    const [tab, setTab] = useState(0);

    function renderTabContent() {
        if(tab === 0){
            return(
                <>
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
                </>
            )
        }else if(tab === 1){
            return (
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
            )
        }else if (tab === 2) {
            return (
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
                </>
            )
        }else if (tab === 3) {
            return (
                <>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="Your message"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required={true}
                            rows={4}
                        />
                    </div>
                    <Button color="success">
                        Send
                    </Button>
                </>
            )
        }
    }

    return(
        <>
            <div className="m-1">
                <Card>
                    <div className="flex">

                        <div className="mr-5">
                            <img className="rounded-md object-cover h-auto w-96" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
                        </div>

                        <div className="w-full bg-slate-50 p-3 rounded-md">

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

                            <div className="mt-2.5 mb-5 flex items-center">
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                    5.0
                                </span>
                            </div>

                            <div className="w-full flex justify-center">
                                <Button.Group>
                                    <Button color="gray" onClick={(e)=>{setTab(0)}}>
                                        Profile
                                    </Button>
                                    <Button color="gray" onClick={(e) => { setTab(1) }}>
                                        Rates
                                    </Button>
                                    <Button color="gray" onClick={(e) => { setTab(2) }}>
                                        History
                                    </Button>
                                    <Button color="gray" onClick={(e) => { setTab(3) }}>
                                        Enquire
                                    </Button>
                                </Button.Group>
                            </div>

                            <div className="m-5">
                                <Card>
                                    {
                                        renderTabContent()
                                    }
                                </Card>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    $599
                                </span>
                                <a
                                    href="#"
                                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Book
                                </a>
                            </div>
                        </div>
                    </div>


                </Card>
            </div>
        </>
    )
}

export default DetailsCard