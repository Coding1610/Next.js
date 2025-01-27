export default function Loading() {
  return (
    <>
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75">Loading</span>
            <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
    </div>
    </>
  )
}