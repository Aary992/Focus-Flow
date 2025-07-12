import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-extrabold text-center leading-tight text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        FocusFlow
      </h1>
      <p className="text-gray-400 mt-4 text-center max-w-xl">
        Your personalized productivity hub. Pomodoro. Habits. Motivation. AI Feedback. All free.
      </p>
      <Link href="/login" className="mt-6 bg-white text-black px-6 py-2 rounded-full text-lg font-bold shadow">
        Start Now — It’s Free
      </Link>
    </div>
  );
}