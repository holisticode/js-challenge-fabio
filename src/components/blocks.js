import React from 'react';

export default class Block extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
        return (
            <div style={{backgroundColor:"#1aa059", width: "100%"}}>
            { this.props.value }
            </div>
        );
    }
}
