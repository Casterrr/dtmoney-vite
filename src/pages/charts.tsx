// import ApexCharts from 'apexcharts'
import { HeatmapChart } from "@/components/charts/apexcharts/heatmap";
import { Donutmap } from "@/components/charts/flowbite/donut";

export function Charts() {


  return (
    <div className=" flex flex-row w-full h-screen bg-neutral-900 p-4">
      <HeatmapChart />
      <Donutmap />
    </div>
  )
}
