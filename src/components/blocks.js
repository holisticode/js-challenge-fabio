import React from 'react';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './blocks.css'

export class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selected: nextProps.selected})
  }

  render() {
        return (
            <div className={`blockItem ${this.state.selected ? "selected" : ""}`} >
            { new Date(this.props.value * 1000).toUTCString() }
            </div>
        );
    }
}

export class BlockDetail extends React.Component {
  constructor(props) {
    super(props);
    this.block = props.block;
    this.state = {
      selectedBlock: {} 
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedBlock: nextProps.block})
  }

  render() {
    if (this.state.selectedBlock.number) {
      return (
        <TableContainer component={Paper}>
          <Table style={{maxWidth: "400px"}} aria-label="simple table">
           <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
             <TableRow>
              <TableCell align="right">Blocknumber</TableCell>
              <TableCell align="right">{this.state.selectedBlock.number}</TableCell>
             </TableRow>
             <TableRow>
              <TableCell align="right">Difficulty</TableCell>
              <TableCell align="right">{this.state.selectedBlock.difficulty}</TableCell>
             </TableRow>
             <TableRow>
              <TableCell align="right">Gas Limit</TableCell>
              <TableCell align="right">{this.state.selectedBlock.gasLimit}</TableCell>
             </TableRow>
             <TableRow>
              <TableCell align="right">Gas Used</TableCell>
              <TableCell align="right">{this.state.selectedBlock.gasUsed}</TableCell>
             </TableRow>
           </TableBody>
          </Table>
        </TableContainer>
      );
    }
    return "";
  }
}
