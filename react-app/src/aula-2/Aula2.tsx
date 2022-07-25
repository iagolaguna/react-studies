import React from "react";

type ClockProps = {
  interval: number;
};

type ClockState = {
  date: Date;
};

export class ClockToggle extends React.Component<
  {},
  { toggle: boolean; interval: number }
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
          <Clock interval={this.state.interval} />
        ) : undefined}
      </div>
    );
  }
}

export class Clock extends React.Component<ClockProps, ClockState> {
  private intervalId?: NodeJS.Timer;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
 
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.tick();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.intervalId);
  }

  tick() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, this.props.interval);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>{this.state.date.toString()}</h1>
      </div>
    );
  }
}
