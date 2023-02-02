import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options =  {
    title: {
        text: 'Here is my highcharts'
    },
    series:[
        {
            data: [12,13,14]
        }
    ]
}
const App =  (): JSX.Element => {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default App;