import { IconProps } from "./Intefaces";

export default function Icon({ico}:IconProps){
    return(
        <>
            <span className="material-symbols-outlined pointer">{ico}</span>
        </>
    )
}