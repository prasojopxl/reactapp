import {useEffect} from "react";

export default function Coba() {
    useEffect (()=> {
        document.title = "ini mounting";
        return () => {
            document.title="udah di unmount"
        };
    },[]);

    return (
        <div>Ini coba use useffect mount dan unmount</div>
    )
}