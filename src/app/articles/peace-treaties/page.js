import { SelectableCountries2 } from "@/app/components/SelectableCountries2";
import { SelectableCountries } from "../../components/SelectableCountries";

export default function page(){
    return(
        <div>
            <div className="border-2 border-solid border-red-500">Peace Treaties</div>
            <div className="min-h-screen bg-[#0B0B2B] border-y-8 border-gray-600 border-solid">
                <SelectableCountries2/>
            </div>
        </div>
    )
}