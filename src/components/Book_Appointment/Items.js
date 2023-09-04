import React from "react";

const Items = ({ number, title, body }) => {
  return (
    <div className="item">
      <div className="item-header">
        <h3 className="item-id">{number}</h3>
        <h3 className="item-title">{title}</h3>
      </div>

      <div className="item-body">{body}</div>
    </div>
  );
};

export default Items;
