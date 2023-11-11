function Reset({ reset }) {
  return (
    <button
      onClick={reset}
      className="bg-slate-600 w-fit px-10 py-6 text-3xl rounded-xl hover:bg-gray-800"
    >
      Reset
    </button>
  );
}

export default Reset;
