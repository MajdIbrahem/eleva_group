import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop,BarChart, Bar, Rectangle, Legend,RadialBarChart, RadialBar } from 'recharts';


const PaymentHistory = ({paymentdata}) => {
    const { dark } = useContext(DarkModeContext)
  return (
    <div className=''>
        <div className={`flex justify-start items-start gap-2 flex-col w-[325px] h-[200px] md:w-[500px] md:h-[275px] ${dark?"bg-card-dark border-gray-700 border shadow-md shadow-background-dark ":"text-text-primary bg-white shadow-lg "} rounded-2xl p-2`}>
        <h1 className='text-xl '>Payment History</h1>
        <ResponsiveContainer width="100%" height="90%">
            <AreaChart
                width={500}
                height={400}
                data={paymentdata}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={`${dark?"#5397C0":"#6F51FF"}`} stopOpacity={1} />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.2} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke={`${dark?"#5397C0":"#6F51FF"}`}
                    fill="url(#gradientColor)" // Apply gradient fill
                />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    </div>
)
}

export default PaymentHistory