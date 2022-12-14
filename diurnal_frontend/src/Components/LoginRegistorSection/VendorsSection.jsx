import { useState } from 'react'
import { Badge } from 'flowbite-react'
import LoginSection from '../VendorLoginSection/LoginSection'
import RegisterSection from '../VendorRegisterSection/RegisterSection'

function VendorsSection() {

    const [showVendorLogin, setShowVendorLogin] = useState(false)

    function onCloseLogin() {
        setShowVendorLogin(false)
    }

    function onClickLogin() {
        setShowVendorLogin(true)
    }

    const [showVendorRegister, setShowVendorRegister] = useState(false)

    function onCloseRegister() {
        setShowVendorRegister(false)
    }

    function onClickRegister() {
        setShowVendorRegister(true)
    }

    return (
        <>
            <div className="m-16">
                <>
                    <h5 className="flex text-5xl font-extrabold tracking-tight">
                        For Vendors <span><Badge
                            color="warning"
                            size="sm"
                        >
                            Business
                        </Badge></span>
                    </h5>
                    <ul
                        role="list"
                        className="my-7 space-y-5"
                    >
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                2 team members
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                20GB Cloud storage
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Integration help
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Sketch Files
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                API Access
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Complete documentation
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                24??7 phone & email support
                            </span>
                        </li>
                    </ul>
                    <button
                        onClick={onClickLogin}
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                    >
                        Login
                    </button>
                    <div>
                        Don't Have An Account?
                        <span>
                            <button onClick={onClickRegister} className="text-xl font-bold tracking-tight leading-none text-blue-600 md:text-xl dark:text-white"> Register </button>
                        </span>
                    </div>
                </>
            </div>

            <LoginSection show={showVendorLogin} onClick={onClickLogin} onClose={onCloseLogin} />
            <RegisterSection show={showVendorRegister} onClick={onClickRegister} onClose={onCloseRegister} />
        </>
    )
}

export default VendorsSection;