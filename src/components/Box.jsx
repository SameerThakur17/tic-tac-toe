function Box({ value, change, winTriplet, index }) {
  return (
    <div
      onClick={change}
      className={`text-4xl  h-[100px] w-[100px] rounded-lg flex justify-center items-center ${
        value == "X" ? "text-red-700" : "text-blue-700"
      }  font-bold ${
        winTriplet.includes(index) ? "bg-green-400" : "bg-slate-300"
      }`}
    >
      {value}
    </div>
  );
}

export default Box;
