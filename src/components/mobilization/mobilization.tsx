"use client";
import React, { FC } from 'react';
import { Bar, Chart, Pie,  } from 'react-chartjs-2';
import { useEffect,useState } from 'react';
// import  { forwardRef, useRef,  } from 'react';
import { Chart as ChartJS, Tooltip, Legend, Title,  BarController, Colors, BarElement, LinearScale, DoughnutController,ArcElement, LineController,  PieController, CategoryScale} from 'chart.js';
import { FunnelController, TrapezoidElement } from 'chartjs-chart-funnel';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Cards from '../Cards';
// import Homepage from '../Homepage';
ChartJS.register(
    BarController, 
    BarElement,
    DoughnutController, 
    ArcElement,
    LineController, 
    PieController,
    CategoryScale,
    LinearScale,
    LineController, 
    Tooltip,
    Legend,
    Title,
    FunnelController, 
    TrapezoidElement,
    ChartDataLabels,
    Colors,
)
interface Data {
  label: string;
  value: number;
}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Mobilization: FC = () => {
    const [value, onChange] = useState<Value>(new Date());
    const data = {
        labels:["Jan","Feb","March","April"],
        datasets:[
            {
                display:true,
                label:"Total No.of Students",
                data:[0.5,0.4,0.3,0.2],
                // borderColor: "#48e390",
            }
        ]
    }
    const options = {
        responsive:false,
        maintainAspectRatio:true,
        indexAxis: "y" as const,
        plugins: {
          title: {
            display: true,
            color:'black',
          text: 'Target vs Achieved Status',
          font:{
            size:10
          }
        },
            // Change options for ALL labels of THIS CHART
            datalabels: {
              color: 'black',
              font:{
                size:12,
              }
            }
          }
    }
 const sourceData= [
    {
      "label": "Induction Target",
      "value": 32
    },
    {
      "label": "Total Inducted",
      "value": 45
    },
    {
      "label": "To Mobilize",
      "value": 23
    },
    {
        "label":"Total Mobilized",
        "value":12
    }
  ]
  
const statusData=[
  { "label": "Source 1", 
     "value": 30 },
  { "label": "Source 2", 
    "value": 20 },
  { "label": "Source 3",
    "value": 15 },
  { "label": "Source 4",
    "value": 10 },
  { "label": "Source 5",
    "value": 8 },
  { "label": "Source 6", 
    "value": 17 }
]

  return (
    <>
      <h1>Mobilization</h1>
      <Cards></Cards>

      <div className="dataCard categoryCard">
          <Pie
            data={{
              labels: statusData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: statusData.map((data: Data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(73, 0, 0, 0.87)',
                  ],
                  borderColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(73, 0, 0, 0.87)',
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Mobilization Sources',
                },
              },
            }}
          />
        </div>

      {/* <div className="App"> */}
        <div className="dataCard customerCard">
          <Bar
            data={{
              labels: sourceData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Number',
                  data: sourceData.map((data: Data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Target vs Achieved Status',
                },
              },
            }}
          />
        </div>
{/* </div> */}



        <div className=' funnelCard'>
            <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <Chart
                 type="funnel" 
                 options={options} 
                 data={data} 
                style={{width:500, height:250}}>
                 
                 </Chart>
            </div>
           </div> 
    </>
  );
};

export default Mobilization;