import React from "react";
import { useResizable } from "react-resizable-layout";
import Divider from "../Divider/Divider";
import { comp } from '../Comp/Comp';
import "./Window.css";
import Todo from "../Todo/Todo";

const Window = () => {
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    dividerProps: terminalDragBarProps
  } = useResizable({
    axis: "y",
    initial: 350,
    min: 50,
    reverse: true
  });
  const {
    isDragging: isFileDragging,
    position: fileW,
    dividerProps: fileDragBarProps
  } = useResizable({
    axis: "x",
    initial: 800,
    min: 50
  });
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    dividerProps: pluginDragBarProps
  } = useResizable({
    axis: "x",
    initial: 800,
    min: 50,
    reverse: true
  });

  return (
    <div
      className={
        "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
      }
    >
      <Divider />
      <div className={"flex grow"}>
        <div
          className={comp("shrink-0 contents", isFileDragging && "dragging")}
          style={{ width: fileW }}
        >
          <Todo window="window-1" />
        </div>
        <Divider isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={"flex grow"}>
          <div
            className={comp("shrink-0 contents", isPluginDragging && "dragging")}
            style={{ width: pluginW }}
          >
            <Todo window="window-2" />
          </div>
        </div>
      </div>
      <Divider
        dir={"horizontal"}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div
        className={comp(
          "shrink-0 bg-darker contents",
          isTerminalDragging && "dragging"
        )}
        style={{ height: terminalH }}
      >
        <Todo window="window-3" />
      </div>
      <Divider />
    </div>
  );
};

export default Window;