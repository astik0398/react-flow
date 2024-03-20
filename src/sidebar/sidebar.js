import React from "react";

import EditMessage from './EditMessage/index';

export default ({ isSelected, textRef, nodeName, setNodeName }) => {
  const onDragStart = (event, nodeType, content) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("content", content);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
        
      {isSelected ? (
        <EditMessage
          textRef={textRef}
          nodeName={nodeName}
          setNodeName={setNodeName}
        />
      ) : (
        <>
        <div
        style={{border:'1px solid orange'}}
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, "node", "csv")}
          draggable
        >
          Upload CSV
        </div>
        <div
        style={{border:'1px solid green'}}
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "node", "wait")}
        draggable
      >
        Wait
      </div>
      <div
      style={{border:'1px solid grey'}}
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "node", "convert")}
        draggable
      >
        Convert to JSON
      </div>
      <div
      style={{border:'1px solid pink'}}
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "node", "convert")}
        draggable
      >
        POST Request
      </div>
        </>
      )}
                    

    </aside>
  );
};
