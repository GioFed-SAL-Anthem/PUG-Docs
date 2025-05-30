import React from "react";

const ServerSpecs: React.FC = () => {
  return (
    <div className="flex flex-col h-screen p-8 bg-[#121B24]">
      <div className="flex flex-col max-w-5xl mx-auto gap-8 flex-1">
        <header className="flex justify-between items-center border-b border-[#293542] pb-4 mb-8">
          <h1 className="text-white text-2xl font-semibold">System Performance</h1>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-white bg-[#1E2833] px-4 py-2 rounded-md hover:bg-[#293542]"
          >
            <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
              >
                <path
                  d="M83.89,46.43a91.32,91.32,0,0,1,15-6.23l17.73,14.19a8,8,0,0,0,5.48,1.74h.48a73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23l-14.19,17.73a8,8,0,0,0-1.74,5Z"
                  stroke="none"
                  fill="currentColor"
                />
              </svg>
            </div>
            Settings
          </button>
        </header>

        <main className="flex flex-1 flex-col gap-8">
          {/* Disk I/O Section */}
          <section
            id="disk-io"
            className="bg-[#1E2833] rounded-md p-6 shadow-md border border-[#293542]"
          >
            <h3 className="text-white font-semibold text-xl mb-4">Disk I/O</h3>
            <div className="flex items-center gap-6">
              {/* Summary */}
              <div className="text-white flex flex-col gap-2 min-w-[180px]">
                <div>
                  <span className="font-bold">Read:</span> 120 MB/s
                </div>
                <div>
                  <span className="font-bold">Write:</span> 85 MB/s
                </div>
                <div>
                  <span className="font-bold">Latency:</span> 5 ms
                </div>
              </div>
              {/* Usage Bar Graph */}
              <div className="flex-1">
                <svg
                  className="w-full h-20"
                  viewBox="0 0 200 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Read bars */}
                  <rect x="10" y="30" width="15" height="40" fill="#3B82F6" />
                  <rect x="30" y="20" width="15" height="50" fill="#3B82F6" />
                  <rect x="50" y="35" width="15" height="35" fill="#3B82F6" />
                  <rect x="70" y="25" width="15" height="45" fill="#3B82F6" />
                  <rect x="90" y="30" width="15" height="40" fill="#3B82F6" />
                  {/* Write bars */}
                  <rect x="120" y="40" width="15" height="30" fill="#10B981" />
                  <rect x="140" y="45" width="15" height="25" fill="#10B981" />
                  <rect x="160" y="50" width="15" height="20" fill="#10B981" />
                  <rect x="180" y="35" width="15" height="35" fill="#10B981" />
                </svg>
                <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
                  <span>Time 1</span>
                  <span>Time 2</span>
                  <span>Time 3</span>
                  <span>Time 4</span>
                  <span>Time 5</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-0.5 px-1">
                  <span className="text-blue-400 font-semibold">Read</span>
                  <span className="text-green-400 font-semibold">Write</span>
                </div>
              </div>
            </div>
          </section>

          {/* Network Section */}
          <section
            id="network"
            className="bg-[#1E2833] rounded-md p-6 shadow-md border border-[#293542]"
          >
            <h3 className="text-white font-semibold text-xl mb-4">Network Throughput</h3>
            <div className="flex items-center gap-6">
              {/* Summary */}
              <div className="text-white flex flex-col gap-2 min-w-[180px]">
                <div>
                  <span className="font-bold">Upload:</span> 50 Mbps
                </div>
                <div>
                  <span className="font-bold">Download:</span> 120 Mbps
                </div>
                <div>
                  <span className="font-bold">Latency:</span> 20 ms
                </div>
              </div>
              {/* Throughput Line Graph */}
              <svg
                className="w-full h-20"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="0,60 20,50 40,40 60,42 80,35 100,30 120,32 140,28 160,25 180,20 200,18"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                />
                <polyline
                  points="0,70 20,60 40,55 60,50 80,45 100,40 120,35 140,30 160,28 180,25 200,22"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <div className="flex flex-col text-xs text-gray-400 ml-4 min-w-[60px]">
                <span className="text-blue-400 font-semibold">Download</span>
                <span className="text-green-400 font-semibold">Upload</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ServerSpecs;
