import "./Main.css"
import SettingsPanel from "../Settings Panel/SettingsPanel";
import CalibrationButton from "../Calibration Button/CalibrationButton";
import Statistics from "../Statistics/Statistics";
import AngleDisplay from "../Angle/Angle";
import FigureDisplay from "../Figure/Figure";
import Graph from "../Graph/Graph";
import Welcome from "../Welcome/Welcome";
import React from "react";

const Main = () => {
  return (
      <main>
          <div className="mainContainer">
              <div className="welcome">
                  <Welcome/>
              </div>
              <div className="firstRow">
                  <div className="Graph">
                      <Graph />
                  </div>
                  <div className="Stats">
                      <Statistics />
                  </div>
              </div>
              <h3> </h3>
              <div className="secondRow">
                  {/*<div className="postureVisualizer">*/}
                      <div className="angleView">
                          <AngleDisplay />
                      </div>
                      <div className="figureView">
                          <FigureDisplay />
                      </div>
                  {/*</div>*/}
                  <div className="SettingsBox">
                      <SettingsPanel />
                  </div>
              </div>
              <h3> </h3>
              <div className="thirdRow">
                  <div className="calibrationButton">
                      <CalibrationButton/>
                  </div>
              </div>
          </div>
      </main>
  );
};

export default Main;