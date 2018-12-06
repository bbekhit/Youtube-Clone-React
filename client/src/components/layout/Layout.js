import React from "react";
import SearchBar from "../videos/SearchBar";
import VideosFeed from "../videos/VideosFeed";

function Layout() {
  return (
    <div>
      <SearchBar />
      <div className="content-wrapper">
        <VideosFeed />
      </div>
    </div>
  );
}

export default Layout;
