import Amenities from "../amenities/Amenities";
import Expenses from "../expenses/Expenses";
import Message from "../message/Message";

export default function Home() {
    return (
        // gap-y-4
        <div className="flex flex-col gap-y-4 1048:p-6 ">
            <div className="flex flex-col gap-y-4 1048:grid 1048:grid-cols-2 1048:gap-x-6 ">
                <Expenses />
                <Message />
            </div>
            <div className="md:mt-6">
                <Amenities />
            </div>
        </div>

    )
}
