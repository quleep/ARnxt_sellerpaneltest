import React, { useState, useEffect, useRef } from "react";

const Testpage = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState(0);
  const [wrapMode, setWrapMode] = useState(10497);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewerTexture = document.querySelector("model-viewer#helmet");

    modelViewerTexture.addEventListener("load", () => {
      const sampler =
        modelViewerTexture.model.materials[0].pbrMetallicRoughness[
          "baseColorTexture"
        ].texture.sampler;

      sampler.setScale({ x: 1.5, y: 1.5 });
    });
  }, []);

  const handleRotationChange = (event) => {
    setRotation(parseFloat(event.target.value));
  };

  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  const handleOffsetChange = (event) => {
    setOffset(parseFloat(event.target.value));
  };

  const handleWrapModeChange = (event) => {
    setWrapMode(Number(event.target.value));
  };

  return (
    <div>
      <div>
        <model-viewer
          id="helmet"
          camera-controls
          touch-action="pan-y"
          src="https://res.cloudinary.com/dd3c4j1sm/image/upload/v1712645952/Cube_csi4p3.glb"
          ar
          ref={modelViewerRef}
          ar-scale="fixed"
          alt="A 3D model of a helmet"
          animation-name="Dance"
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1">
          <div className="controls">
            <p>
              Rotation: <span>{rotation}</span>
            </p>
            <input
              type="range"
              min="0"
              max="3.14"
              value={rotation}
              step="0.01"
              onChange={handleRotationChange}
            />
            <p>
              Scale: <span>{scale}</span>
            </p>
            <input
              type="range"
              min="0.5"
              max="1.5"
              value={scale}
              step="0.01"
              onChange={handleScaleChange}
            />
            <p>Offset</p>
            <input
              type="range"
              min="0"
              max="1"
              value={offset}
              step="0.01"
              onChange={handleOffsetChange}
            />
            <p>WrapMode</p>
            <select value={wrapMode} onChange={handleWrapModeChange}>
              <option value="10497">Repeat</option>
              <option value="33071">ClampToEdge</option>
              <option value="33648">MirroredRepeat</option>
            </select>
          </div>
        </model-viewer>
      </div>
    </div>
  );
};

export default Testpage;
