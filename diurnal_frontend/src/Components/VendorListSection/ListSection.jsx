import VendorGrid from "./VendorGrid";
import {Pagination} from 'flowbite-react'

function VendorSection() {
    return (
        <>
            <div className="bg-sky-100 p-3 rounded-lg">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">Vendors</h2>
                </div>
            </div>

            <VendorGrid/>

            <div className="flex justify-center bg-sky-100 pb-2 rounded-lg">
                <Pagination
                    currentPage={1}
                    totalPages={100}
                // onPageChange={onPageChange}
                />
            </div>
            
        </>
    );
}

export default VendorSection;