import { useState } from "react";
import LocationSelector from "./component/LocationSelector";
import "./index.css"; // Tailwind を適用するためのインポート

type LocationType = {
  location: ("campus" | "offCampus")[];
};

const MainPage = () => {
  const [location, setLocation] = useState<LocationType>({ location: [] });

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-[400px] rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">
          ロケーション選択
        </h1>

        {/* LocationSelector のコンテナ */}
        <div className="mb-4">
          <LocationSelector value={location} onChange={setLocation} />
        </div>

        {/* 選択状態の表示 */}
        <div className="h-[100px] overflow-auto rounded-md bg-gray-200 p-4 text-gray-800">
          <h2 className="text-lg font-semibold">選択状態:</h2>
          <p className="mt-2 break-words text-sm">{JSON.stringify(location)}</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

