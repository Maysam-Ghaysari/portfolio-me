// app/loading.js
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="relative flex items-center justify-center">
        {/* قطره آب */}
        <div className="w-16 h-16 bg-green-500 rounded-full animate-ping opacity-70"></div>

        {/* دایره داخلی (درخشان) */}
        <div className="absolute w-10 h-10 bg-green-950 rounded-full shadow-lg shadow-blue-500/40 animate-pulse"></div>

        {/* حلقه ظریف دورش */}
        <div className="absolute w-20 h-20 border border-green-500/40 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
}
