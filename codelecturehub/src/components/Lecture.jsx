import { useState, useRef } from "react";
export default function Lecture() {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileURLs = selectedFiles.map((file) => URL.createObjectURL(file));
    setVideos([...videos, ...fileURLs]);
  };

  // Function to play the next video
  const handleNextVideo = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };


  return (
    // <div className="bg-gray-100 min-h-screen p-6 text-gray-900">
      <div className="bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] [background-size:20px_20px] min-h-screen p-6 text-gray-900">
      <header className="bg-purple-900 text-white p-4 text-center text-xl font-bold rounded-md">
        Video Queue Player
      </header>

      <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
        {/* File Input */}
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleFileSelect}
          className="block w-full p-2 border rounded-md mb-4"
        />

        {/* Video List */}
        {videos.length > 0 && (
          <div className="mb-4 p-3 bg-gray-200 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Video Queue:</h3>
            <ul className="list-decimal pl-5">
              {videos.map((video, index) => (
                <li key={index} className={`${index === currentIndex ? 'text-purple-700 font-bold' : ''}`}>
                  Video {index + 1}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Video Player */}
        {videos.length > 0 ? (
          <div>
            <video
              ref={videoRef}
              src={videos[currentIndex]}
              controls
              onEnded={handleNextVideo}
              className="w-full rounded-md shadow-md"
            />

            <div className="mt-4 text-center">
              <button
                onClick={handleNextVideo}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                disabled={currentIndex >= videos.length - 1}
              >
                Next Video
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No videos selected. Add videos to the queue.</p>
        )}
      </div>
    </div>
  );
}
