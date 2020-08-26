import React, { Component } from "react";

export default class ListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>列表详情</div>;
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }
}
