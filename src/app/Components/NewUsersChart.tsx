import React from 'react';
import ReactECharts from 'echarts-for-react';

 const NewUsersChart=()=>{
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May',],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [900, 700, 1000, 1200, 800,],
            type: 'bar',
            smooth: true,
            colorBy: ['#ffffff','#ffffff', '#ffffff', '#ffffff', '#ffffff']
    
          },

        ],
        tooltip: {
          trigger: 'axis',
        },
        textStyle:{
          color: '#fff',
        },
        color: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        barWidth: 5,
      };
    return <ReactECharts option={options} />;
}

export default NewUsersChart;