import React from "react";
import { TooltipProps } from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip: React.FC<TooltipProps<any, any>> = ({
    active,
    payload,
}) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[hsl(var(--dark-brown))] text-[hsl(var(--white))] border-0 rounded-lg p-2 shadow-lg">
                <p className="label">{`${
                    payload[0].name
                } : $${payload[0].value.toFixed(2)}`}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
