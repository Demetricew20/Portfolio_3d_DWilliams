import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    // Need to fix this, loader cannot use div since it lives as a fallback for the 3d Canvas
    // 3d Canvas cannot use divs

    // <div className="flex justify-center items-center">
    //   <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
    // </div>
    <mesh></mesh>
  );
};

export default Loader;
