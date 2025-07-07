import { IKImage } from "imagekitio-react";
const Image = ({ src, alt, className = "", w, h, ...props }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMGKIT_URL_ENDPOINT}
      path={src}
      className={className}
      alt={alt}
      props={props}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
    />
  );
};
export default Image;
