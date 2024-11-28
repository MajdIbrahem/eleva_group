import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const EXpenseProject = () => {
    const { dark } = useContext(DarkModeContext);

    // Updated data structure
    const data = [
        { subject: 'Project1', Spending: 2200 },
        { subject: 'Project2', Spending: 3200 },
        { subject: 'Project3', Spending: 1500 },
        { subject: 'Project4', Spending: 2530 },
        { subject: 'Project5', Spending: 1520 },
        { subject: 'Project6', Spending: 1340 },
    ];

    const COLORS = ['#2743D8', '#32FFCF', '#4866FF', '#ABB6FE', '#ABB6FE', '#AAFFEE', '#32FFCF', '#4866FF', '#ABB6FE', '#ABB6FE', '#32FFCF', '#4866FF', '#ABB6FE', '#ABB6FE', '#32FFCF', '#4866FF', '#ABB6FE', '#ABB6FE', '#32FFCF', '#4866FF', '#ABB6FE', '#ABB6FE', '#32FFCF', '#4866FF', '#ABB6FE', '#ABB6FE', '#32FFCF', '#4866FF', '#ABB6FE', '#ABB6FE'];

    const onPieEnter = (data, index) => {
        console.log("Mouse entered:", data, index);
    };

    return (
         <div
            className={`relative flex justify-start items-start gap-2 flex-col w-[325px] md:w-[375px] p-2 md:h-[400px] h-[270px] ${
                dark
                    ? 'bg-white bg-opacity-15'
                    : 'text-text-primary bg-white shadow-lg'
            } rounded-xl p-2 text-sm`}
        >
            
            <h1 className="text-lg">Expense By Project</h1>
            <PieChart width={270} height={300}>
                <Pie
                    data={data}
                    cx={160}
                    cy={130}
                    innerRadius={50}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="Spending"
                    nameKey="subject"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip
                    formatter={(value, name, props) => [`$${value}`, `: ${props.payload.subject}`]}
                    cursor={{ fill: 'rgba(0,0,0,0.1)' }} // Optional: highlights the slice being hovered
                />
            </PieChart>
             <div
                className="absolute bottom-2 left-0 w-full flex flex-wrap justify-center gap-6 mt-4"
            >
                {data.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span>{entry.subject}</span>
                    </div>
                ))}
            </div>
            {/* Custom legend below the chart */}
            
        </div>
    );
};

export default EXpenseProject;
