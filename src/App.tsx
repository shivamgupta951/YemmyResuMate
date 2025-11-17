function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind is Working! 🎉
        </h1>

        <p className="text-gray-700">
          This text is styled using Tailwind CSS.
        </p>

        <button className="mt-6 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
