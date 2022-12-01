import Amenities from "../amenities/Amenities";
import Expenses from "../expenses/Expenses";
import Message from "../message/Message";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-4">
            <Expenses />
            <Message />
            <Amenities />
        </div>

    )
}
