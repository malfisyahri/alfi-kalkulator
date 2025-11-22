import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function StudentCard(props) {
  const [showHobby, setShowHobby] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 mt-10 border">
      <div className="text-center">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Kartu Mahasiswa</div>

        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{props.nama || "Muhamad Alfi Syahrin"}</h1>
        <p className="mt-2 text-gray-500">{props.nim || "103032400057"}</p>

        <button 
            onClick={() => setShowHobby(!showHobby)}
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
            {showHobby ? "Sembunyikan Hobi" : "Tampilkan Hobi"}
        </button>
        
        {showHobby && <p className="mt-2 text-gray-700">Hobi: {props.hobi || "Coding"}</p>}

        <hr className="my-6" />

        <button 
            onClick={() => navigate('/calculator')}
            className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
        >
            Calculator
        </button>
      </div>
    </div>
  );
}