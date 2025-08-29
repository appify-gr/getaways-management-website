export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex items-center space-x-2 text-gray-500">
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium tracking-wider uppercase">
          In Development
        </span>
      </div>
    </div>
  );
}
