import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideos, getVideo, getComments } from "../../actions/videoActions";
import { addClicked } from "../../actions/clickedActions";
import Spinner from "../common/Spinner";
import VideoItem from "./VideoItem";
import Video from "./Video";
import NoVideo from "./NoVideo";

class VideosFeed extends Component {
  state = {
    id: "",
    visible: false
  };
  componentDidMount() {
    this.props.getVideos();
  }
  onSelect = (id, title) => {
    this.setState({ id, title, visible: true });
    this.props.getVideo(id);
    const clickedData = {
      title
    };
    this.props.addClicked(clickedData);
    this.props.getComments(id);
  };
  render() {
    const { videos, loading, comments, video } = this.props.video;
    const items = videos.items;
    let showContent;
    if (!items || loading) {
      showContent = <Spinner />;
    } else {
      showContent = (
        <div className="content-wrapper">
          {this.state.visible ? (
            <Video id={this.state.id} video={video} comments={comments} />
          ) : (
            <NoVideo />
          )}
          <VideoItem
            items={items}
            onSelect={(id, title) => this.onSelect(id, title)}
          />
        </div>
      );
    }
    return <div>{showContent}</div>;
  }
}

const mapStateToProps = state => ({
  video: state.video
});

export default connect(
  mapStateToProps,
  { getVideos, getVideo, addClicked, getComments }
)(VideosFeed);
