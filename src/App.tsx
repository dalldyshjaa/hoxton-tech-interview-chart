import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function App() {
  const studentData = [
    {
      name: "Stephen",
      submissions: {
        beavers: 3,
        stars: 2,
      },
    },
    {
      name: "Eduardo",
      submissions: {
        beavers: 7,
        stars: 1,
      },
    },
    {
      name: "Pepe",
      submissions: {
        beavers: 6,
        stars: 9,
      },
    },
    {
      name: "Gigachad",
      submissions: {
        beavers: 0,
        stars: 10,
      },
    },
  ];

  return (
    <>
      <BarChart width={730} height={250} data={studentData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="submissions.beavers" fill="#8884d8">
          <LabelList />
        </Bar>
        <Bar dataKey="submissions.stars" fill="#82ca9d">
          <LabelList />
        </Bar>
      </BarChart>
    </>
  );
}

export default App;
