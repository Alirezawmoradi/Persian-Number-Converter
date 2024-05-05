import {useMemo} from "react";

export const usePersianNumber = (number: number) => {

    const PersianNumber = useMemo(() => {
        return new Intl.NumberFormat('fa-IR', {style: "decimal"}).format(number).replace(/٬/g, "");
    }, [number]);

    return PersianNumber;
}