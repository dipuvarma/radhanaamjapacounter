const CounterPanel = () => {
  return (
    <div className="my-2 flex justify-center">
      <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-amber-100 via-gray-50 to-amber-100 outline-1 outline-amber-300 py-1 px-4 shadow-sm rounded-full">
        <p className="text-sm text-amber-900">Japa: 0</p>
        <p className="text-sm text-amber-900">Mala: 0</p>
        <p className="text-sm text-amber-900">Time: 0:00:00</p>
      </div>
    </div>
  );
};

export default CounterPanel;
