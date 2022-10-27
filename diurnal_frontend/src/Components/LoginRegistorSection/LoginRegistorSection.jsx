import BuyersSection from './BuyersSection'
import VendorSection from './VendorsSection'

function LoginRegistorSection(){
    return(
        <>
            <div className="bg-sky-100 p-3 rounded-lg">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">Login</h2>
                </div>
            </div>

            <div className="flex justify-around">

                <BuyersSection/>

                <VendorSection/>

            </div>
        </>
    )
}

export default LoginRegistorSection;