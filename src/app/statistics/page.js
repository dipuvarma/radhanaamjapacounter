import { FaFire } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";

const page = () => {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Statistics</h1>
      <section className="grid grid-cols-2 md:grid-cols-5 md:gap-4 gap-2">
        <div className="md:col-span-2 bg-amber-800 text-gray-50 p-2 rounded-sm flex items-center gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-100">Current Streaks</p>
            <p className="text-4xl font-semibold">1 day</p>
            <p className="text-xs text-gray-200">
              Great Start ! See you tomorrow !
            </p>
          </div>
          <div>
            <FaFire className="text-5xl" />
          </div>
        </div>
        <div className="bg-gray-50 outline-1 outline-amber-800 p-2 rounded-sm flex flex-col justify-center gap-2 items-center">
          <div>
            <GiPrayerBeads className="text-3xl text-amber-800" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-amber-900 text-center">Today Japa</p>
            <p className="text-4xl font-semibold text-center text-amber-900">
              108
            </p>
          </div>
        </div>
        <div className="bg-gray-50 outline-1 outline-amber-800 p-2 rounded-sm flex flex-col justify-center gap-2 items-center">
          <div>
            <FaRegUser className="text-3xl text-amber-800" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-amber-900 text-center">Life Time</p>
            <p className="text-4xl font-semibold text-center text-amber-900">
              108
            </p>
          </div>
        </div>
        <div className="bg-gray-50 outline-1 outline-amber-800 p-2 rounded-sm flex flex-col justify-center gap-2 items-center">
          <div>
            <GiSandsOfTime className="text-3xl text-amber-800" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-amber-900 text-center">Total Time</p>
            <p className="text-4xl font-semibold text-center text-amber-900">
              22 Min
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
