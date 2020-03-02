import React from 'react';

import * as d3 from "d3";

import { latestBlock, latestPrice } from '../data'

import {ValueRow, ValueField } from './sections'
//import EthereumBlockchainMonitor from '../graphs/blockmonitor'
import Block from '../components/blocks'

export default class MonitorPage extends React.Component {
  constructor(props) {
    super(props);

    this.clockId = 0;

    this.state = {
      initialized: false,
      value: 0,
      blocks: [],
      txs: [],
      elapsed: "00:00:00",
      time: 0,
    }

    console.log(this.state.blocks);
    this.rtChart = React.createRef();
  }

  componentDidMount() {
    if (!this.state.initialized) {
      this.getBlocks();
    }
    console.log(this.state.blocks);
    this.setState({initialized: true});
    console.log(this.state.blocks);
    this.startClock();
  }

  componentDidUpdate() {
  }

  render() {
      return (
        <div>
          <h1>Monitor</h1>
          <ValueRow left={
              <ValueField label="Total blocks since start" value={this.state.blocks.length} align="left" />
            }
            middle={
              <ValueField label="Total value since start" value={this.state.value} align="center" />
            } 
            right={
              <ValueField label="Time elapsed since start" value={this.state.elapsed}  align="right" />
            } 
        />
        <ul>
          {
            this.state.blocks.map((block) => {
            return <li><Block value={block.timestamp}/></li>
            })
          }
        </ul>
        </div>
      )
   }

  async getBlocks() {
    console.log('Waiting for next block...')
    const block = await latestBlock()
    const price = await latestPrice()
    console.log()
    console.log(`Current ETH price: ${price} USD`)
    console.log()
    console.log(`Block #${block.number} found, containing transactions:`)
    console.log(block);
    this.createBlockNode(block);
  }

  createBlockNode(block) {
    console.log(this.state.blocks);
    let total = 0;
    let txs = [];
    block.transactions.forEach(({ hash, value }) => {
        console.log(`  - Hash: ${hash} | Value: ${value}`);
        total += parseInt(value);
      }
    )
    console.log(this.state.blocks);
    this.setState((state) => {
      console.log(state);
        state.value = total;
        state.txs = [...state.txs, txs];
        state.blocks = [...state.blocks, block];
        return state;
    });
    /*
    let node = {
        // complex data item; four attributes (type, color, opacity and size) are changing dynamically with each iteration (as an example)
        time: new Date(block.timestamp),
        //color: color(d % 10),
        //opacity: Math.max(Math.random(), 0.3),
        category: "Ethereum",
        //type: shapes[Math.round(Math.random() * (shapes.length - 1))], // the module currently doesn't support dynamically changed svg types (need to add key function to data, or method to dynamically replace svg object – tbd)
        type: "circle",
        size: d3.scaleLinear().range([8,20]).domain(0, total)
    };
    this.rtChart.current.addNode(node);
    */
  }

  startClock() {
    this.clockId = setInterval( () => {
      this.state.time++;
      let temps = this.state.time%60;
      let m = Math.floor(this.state.time/60);
      let h = Math.floor(m/60);
      let val = (h<10?"0":"") + h + ":" + (m<10?"0":"") + m + ":" + (temps>9?"":"0") + temps;
      this.setState({elapsed: val});
    },1000);
  };

}
