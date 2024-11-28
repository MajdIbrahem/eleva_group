import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';


const PieChart = ({ PieData, title }) => {
  const { dark } = useContext(DarkModeContext)
  

  return (
                  <div className={`flex justify-start items-start gap-2 flex-col  w-[325px] md:w-[370px]  md:h-[350px] h-[270px]   ${dark ? "bg-white bg-opacity-15 " : "text-text-primary bg-white shadow-lg "} rounded-xl p-2 text-sm`}>
                    <h1 className='text-lg '>{title }</h1>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="45%" outerRadius="70%" data={PieData} tick={{ fill: `${dark?"white":"#232323"}`, fontWeight: 400 }}>
                        <PolarGrid  tick={{ fill: `${dark?"white":"#4f4f50"}`, fontWeight: 400 }}/>
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: `${dark?"white":"#4f4f50"}`, fontWeight: 400 }}
                        />
                        <PolarRadiusAxis  tick={{ fill: `${dark?"white":"#4f4f50"}`, fontWeight: 400 }}/>
                        <Radar 
                          name="Spending" 
                          dataKey="Spending" 
                          stroke="#97daee" 
                          fill={`${dark?"#879AFF":"#758BFD"}`}
                          fillOpacity={0.6} 
                        />
                        <Tooltip />
                        </RadarChart>
                        
                        </ResponsiveContainer>
                  </div>
  )
}

export default PieChart
