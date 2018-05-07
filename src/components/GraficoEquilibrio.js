import React, {Component} from 'react';
import { Chart } from 'primereact/components/chart/Chart';

export class GraficoEquilibrio extends Component {
    render() {
        let data = {
            labels: this.props.labels,
            datasets: [
                {
                    data: this.props.data,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>{this.props.name}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}