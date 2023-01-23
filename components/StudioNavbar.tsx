import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
    return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#1919708B] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#1919708B] mr-2" /> 
                Go To Website</Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
    );
}

export default StudioNavbar;