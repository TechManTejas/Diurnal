import VendorCard from './VendorCard'

function VendorGrid() {
    return (
        <>
            <div className="grid grid-cols-4">
                {
                    [...Array(4)].map((i) => (
                        <VendorCard key={i}/>
                    ))
                }
            </div>
        </>
    );
}

export default VendorGrid;