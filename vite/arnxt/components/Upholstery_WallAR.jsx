import React from 'react'
import '@google/model-viewer';

function Upholstery_WallAR() {
  return (
    <div> <div className="App">
                      <model-viewer
                        id="change-speed-demo"
                        camera-controls
                        touch-action="pan-y"
                        src={glbFile}
                        ar
                        ar-scale="fixed"
                      ar-placement={placement}
                      
                        alt="A 3D model of a helmet"
                        ref={modelViewerRef}
                        animation-name="Dance"
                        ar-modes="webxr scene-viewer quick-look"
                        shadow-intensity="1">
                        <button
                          slot="ar-button"
                          id="ar-button"
                          onClick={handlearclick}>
                          View in your space
                        </button>
                          {showOverlay && (
                        <div className="overlay">
                          <p>Move your device to place the object in AR</p>
                          <button onClick={handlePlaceObject}>Start AR</button>
                        </div>
                      )}
                      <div id="ar-prompt">
                        <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
                        <div id="wall_floor">
                          Move Camera on the <span>{placement}</span>
                        </div>
                      </div>

                      <div id="ar-failure">AR is not tracking!</div>
                        {hasAnimation && (
                          <div id="controls">
                            <button onClick={handleToggleAnimation}>
                              {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                          </div>
                        )}
                      </model-viewer>
                    </div></div>
  )
}

export default Upholstery_WallAR