import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop,BarChart, Bar, Rectangle, Legend,RadialBarChart, RadialBar } from 'recharts';


const RequestsBar = ({ requestdata }) => {
    const { dark } = useContext(DarkModeContext)
  return (
    <div className=' '>
        <div className={`flex justify-start items-start gap-2 flex-col w-[325px] h-[200px] md:w-[500px] md:h-[275px] ${dark?"bg-card-dark border-gray-700 border shadow-md shadow-background-dark ":"text-text-primary bg-white  shadow-lg "} rounded-2xl p-2`}>
        <h1 className='text-xl '>Requests</h1>
            <ResponsiveContainer width="100%" height="90%">
            <BarChart
                width={500}
                height={300}
                data={requestdata}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                layout="horizontal"       // Set layout to horizontal
                align="right"             // Align to the right
                verticalAlign="top"       // Position at the top
                iconType="circle"
                />
                
                <Bar dataKey="approve" fill={`${dark?"#5397C0":"#6F51FF"}`}  radius={[20, 20, 0, 0]} barSize={10}/>
            </BarChart>
            </ResponsiveContainer>
            </div>
</div>
  )
}

export default RequestsBar