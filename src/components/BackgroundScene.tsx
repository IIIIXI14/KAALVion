const splineUrl = "https://prod.spline.design/lhQonSAWqNt2UNoR/scene.splinecode";

const BackgroundScene = () => {
  return (
    <div className="fixed left-28 right-0 top-28 bottom-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#02040A] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(54,122,255,0.12),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(208,108,255,0.08),_transparent_60%)]" />
      <div className="absolute inset-0">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.4/build/spline-viewer.js"></script>
      <spline-viewer 
        loading-anim-type="none" 
        url="https://prod.spline.design/lhQonSAWqNt2UNoR/scene.splinecode"
        >
      </spline-viewer>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:140px_140px] opacity-10" />
    </div>
  );
};

export default BackgroundScene;

