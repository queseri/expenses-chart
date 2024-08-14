"use client";

import { TrendingUp } from "lucide-react";

import { Card, CardFooter } from "@/components/ui/card";

// Define the type for a single data entry
interface ChartData {
    day: string;
    amount: number;
    fill: string;
}

function App() {
    const chartData: ChartData[] = [
        {
            day: "mon",
            amount: 17.45,
            fill: "hsl(var(--soft-red))",
        },
        {
            day: "tue",
            amount: 34.91,
            fill: "hsl(var(--soft-red))",
        },
        {
            day: "wed",
            amount: 52.36,
            fill: "hsl(var(--cyan))",
        },
        {
            day: "thu",
            amount: 31.07,
            fill: "hsl(var(--soft-red))",
        },
        {
            day: "fri",
            amount: 23.39,
            fill: "hsl(var(--soft-red))",
        },
        {
            day: "sat",
            amount: 43.28,
            fill: "hsl(var(--soft-red))",
        },
        {
            day: "sun",
            amount: 25.48,
            fill: "hsl(var(--soft-red))",
        },
    ];

    // Reducer function to calculate total amount
    const totalAmount = chartData.reduce(
        (total, item) => total + item.amount,
        0
    );

    return (
        <main className="flex flex-col justify-center items-center bg-[hsl(var(--cream))] min-h-screen">
            <div className="max-w-[35.75rem] w-full  p-4">
                <div className=" bg-[hsl(var(--soft-red))] rounded-[10px] p-5">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center align-middle">
                            <h3 className="text-[hsl(var(--white))] text-[1rem] lg:text-[1.5rem]">
                                My Balance
                            </h3>
                            <p className="text-[1.5rem] lg:text-[2.5rem] text-[hsl(var(--white))] font-bold">
                                $921.78
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="circle relative w-10 h-10 bg-[hsl(var(--dark-brown))] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[35.75rem] w-full p-4">
                <Card className="bg-[hsl(var(--very-pale-orange))]">
                    <h3 className="text-[1.5rem] lg:text-[2rem] text-center gap-2 font-bold text-[hsl(var(--dark-brown))]">
                        {" "}
                        Spending - Last 7 days
                    </h3>

                    <div className="flex gap-2 justify-evenly items-end my-12">
                        {chartData.map((item, index) => (
                            <button
                                type="button"
                                key={item.day}
                                className={`flex-1 max-w-[50px] rounded-md hover:cursor-pointer ${
                                    index === 2
                                        ? "bg-[hsl(var(--cyan))]"
                                        : "bg-[hsl(var(--soft-red))]"
                                } hover:opacity-75 focus:opacity-75  relative group`}
                                style={{ height: `${item.amount / 5}rem` }}
                            >
                                <span className="absolute -bottom-8 w-full left-0 text-center">
                                    {item.day}{" "}
                                </span>
                                <span
                                    data-content={`$${item.amount}`}
                                    className={`before:content-[attr(data-content)] before:absolute before:left-1/2 before:-translate-x-1/2
                                         before:-top-12 before:h-[2rem] before:bg-[hsl(var(--dark-brown))] before:min-w-full 
                                         before:text-[hsl(var(--white))] before:p-2 before:rounded-sm before:flex before:justify-center
                                          before:items-center before:opacity-0 before:transition-opacity before:duration-300
                                           group-hover:before:opacity-100 group-focus:before:opacity-100`}
                                >
                                    {/* Empty span to apply the pseudo-element styles */}
                                </span>
                            </button>
                        ))}
                    </div>
                    <CardFooter className="flex-row justify-between items-center gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none text-[hsl(var(--medium-brown))]">
                            <p className="flex flex-col gap-2 text-[1rem] lg:text-[1.5rem]">
                                Total this month{" "}
                                <span className="font-bold text-[hsl(var(--dark-brown))] text-[2.5rem] lg:text-[3.75rem]">
                                    ${(totalAmount * 3.4).toFixed(2)}
                                </span>
                            </p>
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-[1rem]  ">
                            <p className="flex flex-col text-[hsl(var(--medium-brown))]  text-[1rem] lg:text-[1.5rem] items-end gap-2">
                                <span className="font-bold text-[hsl(var(--dark-brown))]">
                                    +2.4%
                                </span>{" "}
                                from last month
                            </p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}

export default App;
