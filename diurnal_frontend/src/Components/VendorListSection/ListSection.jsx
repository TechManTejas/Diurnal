import VendorGrid from "./VendorGrid";

function VendorSection() {
    return (
        <>
            <div className="bg-sky-100 p-3 rounded-lg">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">Vendors</h2>
                </div>
            </div>

            <VendorGrid/>
        </>
    );
}

export default VendorSection;