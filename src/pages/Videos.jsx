

const videos = [
  'https://www.youtube.com/embed/VIDEO_ID2',
  'https://www.youtube.com/embed/VIDEO_ID2',
  'https://www.youtube.com/embed/VIDEO_ID3',
  'https://www.youtube.com/embed/VIDEO_ID4',
  'https://www.youtube.com/embed/VIDEO_ID5',
  'https://www.youtube.com/embed/VIDEO_ID6',
];
 
const Videos = () => {
  return (
    <section className="px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Watch and Buy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {videos.map((videoUrl, index) => (
          <div key={index} className="w-full aspect-video">
            <iframe
              src={videoUrl}
              title={`video-${index}`}
              className="w-full h-full rounded shadow"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
