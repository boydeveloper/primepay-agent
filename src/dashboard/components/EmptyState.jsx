function EmptyState({ message }) {
  return (
    <div className="flex flex-col h-[70vh] items-center justify-center p-8 text-xl w-full ">
      <svg
        className="w-16 h-16 mb-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
      <p className="text-gray-500 text-center max-w-[600px]">{message}</p>
    </div>
  );
}

export default EmptyState;
