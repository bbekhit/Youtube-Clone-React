import React, { Component } from "react";
import Spinner from "../common/Spinner";

class Video extends Component {
  render() {
    const { id, video, comments } = this.props;
    let showComments;
    let showLikes;
    if (comments === null || !comments.items) {
      showComments = null;
    } else {
      showComments = comments.items.map((item, i) => (
        <tr key={i}>
          <td>
            {i + 1}-{item.snippet.topLevelComment.snippet.textDisplay}
          </td>
        </tr>
      ));
    }

    if (
      Object.keys(video).length === 0 ||
      !video.items ||
      video.items === null
    ) {
      showLikes = <Spinner />;
    } else {
      showLikes = (
        <div>
          <p>
            <i className="fa fa-thumbs-up fa-2x" />{" "}
            <span style={{ fontSize: "25px" }}>
              {video.items[0].statistics.likeCount}
            </span>{" "}
          </p>
        </div>
      );
    }

    return (
      <div className="one-video-wrapper">
        <div>
          <div>
            <iframe
              width="100%"
              height="450px"
              src={"https://www.youtube.com/embed/" + id}
              title="video"
            />
          </div>
          {showLikes}
        </div>
        <div className="mt-5">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Comments</th>
              </tr>
            </thead>
            <tbody>{showComments}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Video;
