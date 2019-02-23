import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

export default class AlbumAnimation extends Component {
  constructor() {
        super();
        this.state = {
            className: ""
        };
    }
    bounceIn = () => {
      setTimeout(
        () =>
          this.setState({
            className: this.props.animationClass ? this.props.animationClass : "animation",
          }),
        400
      );
};
render() {
    return (
         <Waypoint
        scrollableAncestor={window}
        onEnter={this.bounceIn}
        bottomOffset={this.props.bO ? this.props.bO : "50%"}
      >
        <div className={`Animation-parent ${this.state.className}`}>
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}