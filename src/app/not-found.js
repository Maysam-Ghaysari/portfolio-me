// app/not-found.js
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-screen flex items-center justify-center p-4">
      {/* دکمه بازگشت در سمت چپ بالا */}
      <div className="absolute top-68">
        <Link href="/">
          <button className="block bg-white/5 backdrop-blur-md text-white font-semibold  rounded-full border border-white/10 text-center hover:bg-white/30 transition-all duration-300 px-5 py-4">
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>

      {/* کارت اصلی */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-10 text-center max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-lg text-gray-200">
          اوه! صفحه‌ای که دنبال آن هستید پیدا نشد
        </p>
      </div>
    </div>
  );
}
