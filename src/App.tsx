import { useState } from "react";
import Chart from "react-apexcharts";

const App = () => {
    const options = {
        chart: {
            id: "basic-bar",
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        },
        title: {
            text: "Spending - Last 7 days",
        },
    };

    const [series] = useState([
        {
            name: "amount",
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        },
    ]);

    return (
        <main className="flex flex-col justify-center items-center bg-[hsl(var(--cream))] w-full min-h-screen">
            <div className="max-w-[35.75rem] w-full  py-4">
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
            <div className="max-w-[35.75rem] w-full p-4 bg-[hsl(var(--white))]  rounded-[10px]">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;
