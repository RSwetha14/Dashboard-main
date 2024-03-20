"use client";
import React, { FC } from "react";
// import sourceData from "../data/sourceData.json";
// import statusData from "../data/statusData.json";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

const Training: FC = () => {
 const statusData= [
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
  const sourceData=[
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
  
  return (
    <div>
      <main className="main-container-training">
        <div className="main-cards-training">
          <div className="card-training">
            <div className="card-inner-training">
              <h2>Center Average</h2>
            </div>
            <h1>75%</h1>
          </div>
          <div className="card-training">
            <div className="card-inner-training">
              <h2>Vertical Average</h2>
            </div>
            <h1>75%</h1>
          </div>
          <div className="card-training">
            <div className="card-inner-training">
              <h2>Course Average</h2>
            </div>
            <h1>75%</h1>
          </div>
          <div className="card-training">
            <div className="card-inner-training">
              <h2>Batch Average</h2>
            </div>
            <h1>75%</h1>
          </div>
        </div>
      </main>
      <div className="charts-training">
        <div className="dataCard customerCard-training">
          <Doughnut
            data={{
              labels: sourceData.map((data: { label: string }) => data.label),
              datasets: [
                {
                  label: "Number",
                  data: sourceData.map((data: { value: number }) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(151, 40, 145, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Attendance % By Location wise",
                },
              },
            }}
          />
        </div>
        <div className="dataCard customerCard-training">
          <Doughnut
            data={{
              labels: statusData.map((data: { label: string }) => data.label),
              datasets: [
                {
                  label: "Number",
                  data: statusData.map((data: { value: number }) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(151, 40, 145, 0.8)",
                    "rgba(24, 214, 126, 0.98)",
                    "rgba(73, 0, 0, 0.87)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Attendance % By Location wise",
                },
              },
            }}
          />
        </div>
        <div className="dataCard customerCard-training">
          <Doughnut
            data={{
              labels: statusData.map((data: { label: string }) => data.label),
              datasets: [
                {
                  label: "Number",
                  data: statusData.map((data: { value: number }) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(151, 40, 145, 0.8)",
                    "rgba(24, 214, 126, 0.98)",
                    "rgba(73, 0, 0, 0.87)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Attendance % By Location wise",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Training;