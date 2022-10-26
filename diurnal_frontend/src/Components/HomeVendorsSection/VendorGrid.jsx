import VendorCard from './VendorCard'

function VendorGrid() {
    return (
        <>
            <div className="m-1 flex">
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