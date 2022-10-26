import VendorCard from './VendorCard'

function VendorGrid() {
    return (
        <>
            <div className="m-1 grid grid-cols-2">
                {
                    [...Array(6)].map((i) => (
                        <VendorCard key={i}/>
                    ))
                }
            </div>
        </>
    );
}

export default VendorGrid;