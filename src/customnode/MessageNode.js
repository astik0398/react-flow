import React, { memo } from "react";

import { Handle, Position } from "reactflow";
import { style } from "./MessageNodeStyles";

const Node = ({ data, selected }) => {
  let customTitle = { ...style.title };
  customTitle.backgroundColor = "#cccccc";
  customTitle.textAlign = 'center'
  customTitle.fontWeight = 'bold'

  return (
    <div className="text-updater-node">
      <div style={{ ...style.body, ...(selected ? style.selected : []) }}>
        <div style={customTitle}>{data.heading}</div>
        <div style={style.contentWrapper}>{data.content}</div>
      </div>
      <Handle type="source" position={Position.Top} id="b" />
      <Handle type="target" position={Position.Bottom} id="a" />
    </div>
  );
};

export default memo(Node);
