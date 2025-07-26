"use client";

import "./globals.css";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f0e3]">
      {/* 배경 이미지 wrapper + 콘텐츠 박스 */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-3xl px-4 mx-auto">
        <img
          src="/bg.png"
          alt="배경"
          className="w-full h-auto object-contain absolute inset-0 z-0 select-none pointer-events-none max-h-screen"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full backdrop-blur-sm rounded-lg text-center shadow-xl overflow-hidden">
          <img
            src="/photo.png"
            alt="결혼사진"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain object-center opacity-30 z-0"
            aria-hidden="true"
          />
          <div className="relative z-10 text-center text-[#111111] leading-loose text-base sm:text-lg md:text-xl px-2 sm:px-6 md:px-10">
            <h1>
              <p>와주셔서 감사합니다.</p>
            </h1>
            <p>
              현규와 유진의 결혼에 따뜻한 마음을 전해주셔서
              <br />
              진심으로 감사드립니다.
            </p>
            <p className="mt-4">
              여러분의 축복 속에서
              <br />
              저희는 서로의 반쪽이 되어
              <br />한 걸음, 한 걸음 함께 나아가려 합니다.
            </p>
            <p className="mt-4">
              소중한 자리에 함께해 주신 마음
              <br />
              오래도록 간직하겠습니다.
            </p>
            <p className="mt-4">감사합니다.</p>
          </div>
          <p className="relative z-10 mb-6 font-[var(--font-nanum-myeongjo)]">
            앞으로도 서로를 아끼며 잘 살겠습니다. 고맙습니다 💕
          </p>
        </div>
      </div>
    </main>
  );
}
