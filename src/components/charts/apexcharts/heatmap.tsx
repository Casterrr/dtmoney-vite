// import ApexCharts from 'apexcharts'
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export function HeatmapChart() {

  var options: ApexOptions = {
    chart: {
      height: 350,
      type: "heatmap",
      foreColor: '#fff',
      // toolbar: {
      //   show: false
      // }
      background: '#212121',
      
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: -99999,
              to: 3,
              color: "#162054",
              name: "low",
            },
            {
              from: 3,
              to: 12,
              color: "#361496",
              name: "medium"
            },
            {
              from: 12,
              to: 9999,
              color: "#3452eb",
              name: "high"
            },
          ],
        },
        enableShades: false,
        // useFillColorAsStroke: true,
        
        // distributed: true
      }
    },
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: ['#000000'],
      width: 2,
      dashArray: 0, 
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "PEOPLE TRAFIC",
      
    },
    xaxis: {
      //
    },
    yaxis: {
      //
    }
  };
  
  var series = [
    {
      name: "Fri",
      data: formatData([ 
        0, 0, 0, 0, 20, 40, 45, 45, 30
      ])
    },
    {
      name: "Thu",
      data: formatData([
        0, 0, 15, 10, 40, 25, 35, 25, 30
      ])
    },
    {
      name: "Wed",
      data: formatData([ 
        0, 0, 5, 10, 35, 25, 30, 30, 5
      ])
    },
    {
      name: "Tue",
      data: formatData([ 
        0, 0, 4, 0, 28, 28, 12, 28, 44
      ]),
    },
    {
      name: "Mon",
      data: formatData([ 
        0, 4, 0, 4, 4, 0, 4, 12, 16
      ])
    }
  ];

  function formatData(data: number[]) {
    let newData = [];
    let categories = [ 
      "9:00AM", "11:00AM", "1:00PM", "15:00PM", "17:00PM", "9:30-10.00", 
      "10:00-10.30", "10:30-11.00", "11:00-11.30"
    ];
  
    for (var i = 0; i < categories.length; i++) {
      newData.push({
        x: categories[i],
        y: data[i]
      });
    }
    console.log(newData);
    return newData;
  }

  return (
    <div className="w-2/4">
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height="350"
        width="600"
      />
    </div>
  )
}
