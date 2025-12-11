import { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(0);
  const [key1Unlocked, setKey1Unlocked] = useState(false);
  const [key2Unlocked, setKey2Unlocked] = useState(false);
  const [key3Unlocked, setKey3Unlocked] = useState(false);

  // COLORS PUZZLE (KEY 1)
  const ALL_COLORS = [
    { name: "Vert", hex: "#00ff00" },
    { name: "Violet", hex: "#800080" },
    { name: "Jaune", hex: "#ffff00" },
    { name: "Rose", hex: "#ff00ff" },
    { name: "Orange", hex: "#ff8800" },
    { name: "Rouge", hex: "#ff0000" },
    { name: "Bleu", hex: "#0000ff" }
  ];

  const CORRECT_ORDER = ["#00ff00", "#800080", "#ffff00", "#ff00ff"]; // Vert > Violet > Jaune > Rose
  const [selectedColors, setSelectedColors] = useState([]);

  function pickColor(hex) {
    if (key1Unlocked) return;
    if (selectedColors.length >= 4) return;
    setSelectedColors((p) => [...p, hex]);
  }
  function resetColors() {
    setSelectedColors([]);
  }
  function validateKey1() {
    if (selectedColors.length !== 4) return alert("Il faut 4 couleurs");
    for (let i = 0; i < 4; i++) if (selectedColors[i] !== CORRECT_ORDER[i]) return alert("Mauvais ordre");
    setKey1Unlocked(true);
  }

  // KEY 2
  const [key2Input, setKey2Input] = useState("");
  function validateKey2() {
    if (key2Input.trim() === "3") setKey2Unlocked(true);
    else alert("Mauvais chiffre");
  }

  // KEY 3
  const [key3Input, setKey3Input] = useState("");
  function validateKey3() {
    if (key3Input.trim() === "9") setKey3Unlocked(true);
    else alert("Mauvais chiffre");
  }

  // STYLE PARCHMENT
  const parchment = {
     padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 0 25px rgba(0,0,0,0.6)",
    color: "#3b2f1e",
    fontFamily: "serif"
  };

  const keyImg = (active) => ({
    width: "120px",
    filter: active ? "drop-shadow(0 0 6px gold)" : "none",
    cursor: "pointer",
    transition: "0.3s"
  });

  return (
    <div className='min-h-screen p-0 m-0 text-white flex justify-center items-center bg-cover bg-center' style={{ backgroundColor:'#f5e6c5' }}>
      <div style={{ width: "700px" }}>

        {/* MENU - 3 CLES */}
        {step === 0 && (
          <div style={parchment} className="text-center">
            <h1 className="text-3xl mb-4 font-bold">Le Grand Cadenas Antique</h1>
            <p className="mb-6 text-lg">Choisis une cle pour resoudre son epreuve :</p>

            <div className="flex justify-center gap-6">
  <img
    src={key1Unlocked ? "/src/assets/icons8-déverrouiller-2-90.png" : "/src/assets/icons8-verrouiller-2-100.png"}
    style={keyImg(key1Unlocked)}
    onClick={() => setStep(1)}
  />
  <img
    src={key2Unlocked ? "/src/assets/icons8-déverrouiller-2-90.png" : "/src/assets/icons8-verrouiller-2-100.png"}
    style={keyImg(key2Unlocked)}
    onClick={() => setStep(2)}
  />
  <img
    src={key3Unlocked ? "/src/assets/icons8-déverrouiller-2-90.png" : "/src/assets/icons8-verrouiller-2-100.png"}
    style={keyImg(key3Unlocked)}
    onClick={() => setStep(3)}
  />
</div>


            <p className="mt-6 italic">Chaque clé tourne seulement si l'épreuve est réussie...</p>
          </div>
        )}

        {/* KEY 1 - COLORS */}
        {step === 1 && (
          <div style={parchment}>
            <h2 className="text-2xl font-bold mb-4">Cle 1 - Ordre des Fioles</h2>
            <p>Replace les fioles dans l'ordre exact :</p>
            <b>Vert > Violet > Jaune > Rose</b>

            <div className="flex flex-wrap gap-2 my-4">
              {ALL_COLORS.map((c) => (
                <button key={c.hex} className="w-12 h-12 rounded border" style={{ background: c.hex }} onClick={() => pickColor(c.hex)} />
              ))}
            </div>

            <div className="flex gap-2 mb-3">
              {selectedColors.map((c, i) => (
                <div key={i} className="w-12 h-12 border rounded" style={{ background: c }} />
              ))}
            </div>

            {!key1Unlocked && (
              <>
                <button className="px-3 py-1 bg-blue-600 rounded" onClick={validateKey1}>Valider</button>
                <button className="px-3 py-1 bg-gray-600 rounded ml-2" onClick={resetColors}>Reinitialiser</button>
              </>
            )}

            {key1Unlocked && <div className="text-green-600 text-lg mt-4">La cle tourne !</div>}

            <button className="mt-6 px-3 py-1 bg-slate-700 rounded" onClick={() => setStep(0)}>Retour</button>
          </div>
        )}

        {/* KEY 2 */}
        {step === 2 && (
          <div style={parchment}>
            <h2 className="text-2xl font-bold mb-4">Cle 2 - Puzzle</h2>
            <p>Trouve le chiffre cache dans le puzzle imprime :</p>

            {!key2Unlocked && (
              <div className="flex gap-2 mt-4">
                <input className="p-2 bg-slate-200 rounded w-20 text-black" maxLength={1} value={key2Input} onChange={(e) => setKey2Input(e.target.value.replace(/[^0-9]/g, ""))} />
                <button className="px-3 py-1 bg-blue-600 rounded text-white" onClick={validateKey2}>Valider</button>
              </div>
            )}

            {key2Unlocked && <div className="text-green-700 text-lg mt-4">La cle tourne !</div>}

            <button className="mt-6 px-3 py-1 bg-slate-700 rounded text-white" onClick={() => setStep(0)}>Retour</button>
          </div>
        )}

        {/* KEY 3 */}
        {step === 3 && (
          <div style={parchment}>
            <h2 className="text-2xl font-bold mb-4">Cle 3 - Dernier Chiffre</h2>
            <p>Entre le dernier chiffre :</p>

            {!key3Unlocked && (
              <div className="flex gap-2 mt-4">
                <input className="p-2 bg-slate-200 rounded w-20 text-black" maxLength={1} value={key3Input} onChange={(e) => setKey3Input(e.target.value.replace(/[^0-9]/g, ""))} />
                <button className="px-3 py-1 bg-blue-600 rounded text-white" onClick={validateKey3}>Valider</button>
              </div>
            )}

            {key3Unlocked && (
              <div className="text-green-700 text-xl font-bold mt-6">
                Le cadenas s'ouvre ! Code final : <span className="text-red-700 text-3xl">4</span>
              </div>
            )}

            <button className="mt-6 px-3 py-1 bg-slate-700 rounded text-white" onClick={() => setStep(0)}>Retour</button>
          </div>
        )}
      </div>
    </div>
  );
}