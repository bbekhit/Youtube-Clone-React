import React from "react";

function VideoItem({ items, onSelect }) {
  return (
    <div>
      {items.map(item =>
        item.snippet.description ? (
          <div className="item-card" key={item.etag}>
            <div className="ifram-wrapper">
              <iframe
                width="100%"
                height="315"
                src={"https://www.youtube.com/embed/" + item.id.videoId}
                title="video"
              />
            </div>
            <p
              onClick={() => onSelect(item.id.videoId, item.snippet.title)}
              className="text-center text-uppercase"
            >
              <span className="font-weight-bold">Title: </span>{" "}
              {item.snippet.title}
            </p>
            <p>
              <span className="font-weight-bold">Description: </span> <br />
              {item.snippet.description}
            </p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default VideoItem;
