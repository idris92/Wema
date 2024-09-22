import React from 'react';
import ReactECharts from 'echarts-for-react';

 const InflowChart=()=>{
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [25, 50, 20, 90, 30, 40, 100],
            type: 'line',
            smooth: true,
    
          },
          {
            data: [50, 40, 30, 10, 50, 24, 78],
            type: 'line',
            smooth: true,
    
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
    return <ReactECharts option={options} />;
}

export default InflowChart;