import React, { Component } from 'react';

import * as d3 from "d3";
import { select } from 'd3-selection'
import realTimeChartMulti from './realTimeChartMulti';

/*
 * Based on https://bl.ocks.org/boeric/6a83de20f780b42fadb9
 */
export default class EthereumBlockchainRealTimeMonitor extends Component {
  constructor(props) {
    super(props);
    this.width = this.props.width;
    this.height = this.props.height;

    this.graphRef = React.createRef();
    this.initialize = this.initialize.bind(this);

    this.chart = false;
    this.initialized = false;
  }

  componentDidMount() {
    if (!this.initialized) {
      this.initialize();
    }
    this.initialized = true;
  }

  componentDidUpdate() {
    //this.initialize();
  }

  addNode(node) {
    this.chart.datum(node);
  }


  initialize() {
    // create the real time chart
    this.chart = realTimeChartMulti()
      .width(this.props.width)               // width in pixels of chart; mandatory
      .height(this.props.height)              // height in pixels of chart; mandatory
      .yDomain(["Ethereum"])   // initial categories/data streams (note array),  mandatory
      .title("Etereum block chain monitor")     // optional
      .yTitle("Coins")     // optional
      .xTitle("Time")           // optional
      .border(true);            // optional

    // invoke the chart
    d3.select(this.node).call(this.chart);
  }

  render() {
      return (
        <div ref={this.graphRef}>
          <svg id="monitor" ref={node => this.node = node}
            width={this.props.width} height={this.props.height}>
          </svg>
        </div>
      )
   }
}
