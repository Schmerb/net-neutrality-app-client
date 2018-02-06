// // // // // // // // // // // //
//
//	Dim - dim's screen
//
// // // // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Dim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: ''
    };
  }

  componentDidMount() {
    const $this = this;
    setTimeout(function() {
      $this.setState({
        fadeIn: 'fadeIn'
      });
    }, 100);
  }

  render() {
    let classes = `${this.state.fadeIn} ${this.props.open ? 'open' : ''}`;
    return <div id="dim" className={`dim ${classes}`} ref="dim" />;
  }
}

const mapStateToProps = state => ({
  open: state.display.open
});

export default connect(mapStateToProps)(Dim);
