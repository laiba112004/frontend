



const FullScreenVideo = () => {
  return (
    <section className="w-full min-h-screen  flex flex-col  justify-start px-4 py-8">
      <h2 className="text-2xl font-bold  mb-6 ">
        Explore J. Skincare
      </h2>
      <div className="w-full h-[60vh] md:h-[80vh]">
        <video
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/skincare_web.mp4" // Update with your actual video path
          className="w-full h-full  shadow-lg object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </section>
  );
};

export default FullScreenVideo;
