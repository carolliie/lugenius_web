import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          },
          fontFamily: 'Poppins, sans-serif'
        },
        xaxis: {
          categories: ["5 estrelas", "4 estrelas", "3 estrelas", "2 estrelas", "1 estrela"],
          labels: {
            show: false,
            style: {
              fontFamily: 'Poppins, sans-serif'
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: true
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: true
          }
        },
        grid: {
          show: false
        },
        colors: ['#12D03C'],
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        }
      },
      series: [],
      shouldRenderChart: false
    };
  }

  componentDidMount() {
    const { ratingsCount } = this.props;
    const categories = ["5 estrelas", "4 estrelas", "3 estrelas", "2 estrelas", "1 estrela"].reverse();
    const filteredData = [];
    const filteredCategories = [];

    let hasData = false;

    ratingsCount.forEach((count, index) => {
      if (count > 0) {
        filteredData.push(count);
        filteredCategories.push(categories[index]);
        hasData = true;
      }
    });

    if (hasData) {
      this.setState({
        options: {
          ...this.state.options,
          xaxis: {
            ...this.state.options.xaxis,
            categories: filteredCategories.reverse()
          }
        },
        series: [{
          name: "Quantidade de avaliações",
          data: filteredData.reverse()
        }],
        shouldRenderChart: true
      });
    }
  }

  render() {
    if (!this.state.shouldRenderChart) {
      return null;
    }

    return (
      <div className="app" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="row" style={{ flex: 1, position: 'relative' }}>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={window.innerWidth < 640 ? "280" : "400"}
            />
          </div>
          <div style={{
            position: 'absolute',
            top: 2,
            right: -40,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Poppins, sans-serif',
          }}>
            {this.state.series[0].data.map((count, index) => (
              count > 0 && (
                <div key={index} style={{ marginBottom: '0px', textAlign: 'center', flexGrow: 0.16, display: 'flex', alignItems: 'center'}}>
                  {count}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;
