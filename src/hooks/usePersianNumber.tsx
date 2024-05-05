import {useMemo} from "react";

export const usePersianNumber = (number: number) => {

    return useMemo(() => {
        return new Intl.NumberFormat('fa-IR', {style: "decimal"}).format(number).replace(/٬/g, "");
    }, [number]);

}