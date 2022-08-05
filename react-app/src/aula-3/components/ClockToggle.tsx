import React from "react";
import { ClockFunc } from "../Aula3";


export class ClockToggle extends React.Component<
  {}, { toggle: boolean; interval: number; }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      toggle: true,
      interval: 1000,
    };
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle });
  }

  handleClickIncrease() {
    this.setState({ ...this.state, interval: this.state.interval + 100 });
  }

  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Toggle</button>
        <button onClick={this.handleClickIncrease.bind(this)}>
          Increase Time Interval
        </button>
        {this.state.toggle ? (
          <ClockFunc interval={this.state.interval} />
        ) : undefined}
      </div>
    );
  }
}
