import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';


const PieChart = ({ PieData, title }) => {
  const { dark } = useContext(DarkModeContext)
  

  return (
                  <div className={`flex justify-start items-start gap-2 flex-col  w-[325px] md:w-[500px]  md:h-[400px] h-[270px]   ${dark ? "bg-card-dark border-gray-700 border shadow-md shadow-background-dark " : "text-text-primary bg-white shadow-lg "} rounded-2xl p-2`}>
                    <h1 className='text-xl '>{title }</h1>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PieData} tick={{ fill: `${dark?"white":"#232323"}`, fontWeight: 600 }}>
                        <PolarGrid  tick={{ fill: `${dark?"white":"#4f4f50"}`, fontWeight: 600 }}/>
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: `${dark?"white":"#4f4f50"}`, fontWeight: 400 }}
                        />
                        <PolarRadiusAxis  tick={{ fill: `${dark?"white":"#4f4f50"}`, fontWeight: 400 }}/>
                        <Radar 
                          name="Spending" 
                          dataKey="Spending" 
                          stroke="#97daee" 
                          fill={`${dark?"#5397C0":"#6F51FF"}`}
                          fillOpacity={0.8} 
                        />
                        <Tooltip />
                        </RadarChart>
                        
                        </ResponsiveContainer>
                  </div>
  )
}

export default PieChart
