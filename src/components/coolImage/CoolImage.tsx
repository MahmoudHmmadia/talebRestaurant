import { useState, useRef } from "react";
import classnames from "classnames";
import { useIntersection } from "../../hooks/useIntersection";
import "./imageRenderer.scss";

const ImageRenderer = ({
  url,
  thumb,
  width,
  height,
  type,
}: {
  url: string;
  thumb: string;
  width: number | string;
  height: number | string;
  type?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div className="image-container centering-content w-100 h-100" ref={imgRef}>
      {isInView && (
        <>
          {/*  ==> small version of image <== */}
          {/* <img
            className={classnames("cool_image", "thumb", {
              ["isLoaded"]: !!isLoaded,
            })}
            src={thumb}
          /> */}
          {/* ==> custom loader <== */}
          <div
            className={classnames("cool_image", "thumb", "semicircle", {
              ["isLoaded"]: !!isLoaded,
            })}
          >
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={classnames(`cool_image fit-contain`, {
              ["isLoaded"]: !!isLoaded,
            })}
            src={url}
            onLoad={handleOnLoad}
            style={{
              height,
              width,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ImageRenderer;