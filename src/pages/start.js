import React from 'react';

import Button from '@material-ui/core/Button'

import {Header, Start} from './sections'

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
      return (
        <div>
          <Header>Fabio&apos;s simple Ethereum real time monitor</Header>
          <Start>
            <Button color="primary" variant="contained" href={`/#/monitor`} style={{width: "300px"}}><h1>Start!</h1></Button>
          </Start>
        </div>
      )
   }
}
