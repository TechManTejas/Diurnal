
import VendorSection from '../HomeVendorsSection/VendorSection'
import DetailsCard from '../VendorDetailsSection/DetailsCard'

function DetailsSection() {
    return (
        <>
            <div className="bg-sky-100 p-3 rounded-lg">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">Vendor Details</h2>
                </div>
            </div>
            <DetailsCard/>
            
        </>
    )
}

export default DetailsSection