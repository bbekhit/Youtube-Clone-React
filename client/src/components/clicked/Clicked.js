import React, { Component } from "react";
import { getClicked } from "../../actions/clickedActions";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";

class Clicked extends Component {
  componentDidMount() {
    this.props.getClicked();
  }
  render() {
    const { clicked } = this.props.clicked;
    let clickedVideos;
    if (clicked) {
      clickedVideos = clicked.map((item, i) => (
        <tr key={item._id}>
          <td>
            {i + 1}-{item.title}
          </td>
        </tr>
      ));
    } else {
      clickedVideos = <Spinner />;
    }
    return (
      <div className="container">
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th className="text-center">Clicked Videos</th>
            </tr>
          </thead>
          <tbody>{clickedVideos}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clicked: state.clicked
});

export default connect(
  mapStateToProps,
  { getClicked }
)(Clicked);
