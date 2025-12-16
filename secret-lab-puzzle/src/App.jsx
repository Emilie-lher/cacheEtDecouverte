import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [key1Unlocked, setKey1Unlocked] = useState(false);
  const [key2Unlocked, setKey2Unlocked] = useState(false);
  const [key3Unlocked, setKey3Unlocked] = useState(false);

  // KEY 1
  const [key1Input, setKey1Input] = useState("");
  function validateKey1() {
    if (key1Input.trim() === "3") setKey1Unlocked(true);
    else alert("Mauvais chiffre");
  }

  // KEY 2
  const [key2Input, setKey2Input] = useState("");
  function validateKey2() {
    if (key2Input.trim() === "7") setKey2Unlocked(true);
    else alert("Mauvais chiffre");
  }

  // KEY 3
  const [key3Input, setKey3Input] = useState("");
  function validateKey3() {
    if (key3Input.trim() === "7") setKey3Unlocked(true);
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
    <div
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#f5e6c5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto"
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>

        {/* MENU - 3 CLES */}
        {step === 0 && (
          <div style={{...parchment, width: "100%", maxWidth: "800px", textAlign: "center"}}>
            <h1 style={{ fontSize: "1.875rem", marginBottom: "1rem", fontWeight: "bold" }}>
              Le Grand Cadenas Antique
            </h1>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.125rem" }}>
              Choisis une clé pour résoudre son épreuve :
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
              <img
                src="https://img.icons8.com/ios-filled/100/3b2f1e/lock.png"
                alt="Clé 1"
                style={keyImg(key1Unlocked)}
                onClick={() => setStep(1)}
              />
              <img
                src="https://img.icons8.com/ios-filled/100/3b2f1e/lock.png"
                alt="Clé 2"
                style={keyImg(key2Unlocked)}
                onClick={() => setStep(2)}
              />
              <img
                src="https://img.icons8.com/ios-filled/100/3b2f1e/lock.png"
                alt="Clé 3"
                style={keyImg(key3Unlocked)}
                onClick={() => setStep(3)}
              />
            </div>

            <p style={{ marginTop: "1.5rem", fontStyle: "italic" }}>
              Chaque clé tourne seulement si l'épreuve est réussie...
            </p>
          </div>
        )}

        {/* KEY 1 */}
        {step === 1 && (
          <div style={{...parchment, width: "100%", maxWidth: "600px", textAlign: "center"}}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
              Clé 1
            </h2>

            <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
              Inscrivez le chiffre résultant de l'énigme
            </p>

            {!key1Unlocked && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                <input
                  type="text"
                  className="p-2 bg-slate-200 rounded w-20 text-black"
                  style={{ padding: "0.5rem", backgroundColor: "#e2e8f0", borderRadius: "0.5rem", width: "80px", textAlign: "center", fontSize: "1.5rem", border: "2px solid #3b2f1e" }}
                  maxLength={1}
                  value={key1Input}
                  onChange={(e) => setKey1Input(e.target.value.replace(/[^0-9]/g, ""))}
                />
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                  style={{ padding: "0.5rem 1.5rem", backgroundColor: "#2563eb", color: "white", borderRadius: "0.5rem", cursor: "pointer" }}
                  onClick={validateKey1}
                >
                  Valider
                </button>
              </div>
            )}

            {key1Unlocked && (
              <div style={{ color: "#15803d", fontSize: "1.25rem", marginTop: "1rem", fontWeight: "bold" }}>
                ✓ La clé tourne !
              </div>
            )}

            <button
              className="mt-6 px-3 py-1 bg-slate-700 text-white rounded"
              style={{ marginTop: "2rem", padding: "0.5rem 1.5rem", backgroundColor: "#334155", color: "white", borderRadius: "0.5rem", cursor: "pointer" }}
              onClick={() => setStep(0)}
            >
              ← Retour
            </button>
          </div>
        )}

        {/* KEY 2 */}
        {step === 2 && (
          <div style={{...parchment, width: "100%", maxWidth: "600px", textAlign: "center"}}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
              Clé 2
            </h2>

            <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
              Inscrivez le chiffre résultant de l'énigme
            </p>

            {!key2Unlocked && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                <input
                  type="text"
                  style={{ padding: "0.5rem", backgroundColor: "#e2e8f0", borderRadius: "0.5rem", width: "80px", textAlign: "center", fontSize: "1.5rem", border: "2px solid #3b2f1e" }}
                  maxLength={1}
                  value={key2Input}
                  onChange={(e) => setKey2Input(e.target.value.replace(/[^0-9]/g, ""))}
                />
                <button
                  style={{ padding: "0.5rem 1.5rem", backgroundColor: "#2563eb", color: "white", borderRadius: "0.5rem", cursor: "pointer" }}
                  onClick={validateKey2}
                >
                  Valider
                </button>
              </div>
            )}

            {key2Unlocked && (
              <div style={{ color: "#15803d", fontSize: "1.25rem", marginTop: "1rem", fontWeight: "bold" }}>
                ✓ La clé tourne !
              </div>
            )}

            <button
              style={{ marginTop: "2rem", padding: "0.5rem 1.5rem", backgroundColor: "#334155", color: "white", borderRadius: "0.5rem", cursor: "pointer" }}
              onClick={() => setStep(0)}
            >
              ← Retour
            </button>
          </div>
        )}

        {/* KEY 3 */}
        {step === 3 && (
          <div style={{...parchment, width: "100%", maxWidth: "600px", textAlign: "center"}}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
              Clé 3
            </h2>

            <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
              Inscrivez le chiffre résultant de l'énigme
            </p>

            {!key3Unlocked && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                <input
                  type="text"
                  style={{ padding: "0.5rem", backgroundColor: "#e2e8f0", borderRadius: "0.5rem", width: "80px", textAlign: "center", fontSize: "1.5rem", border: "2px solid #3b2f1e" }}
                  maxLength={1}
                  value={key3Input}
                  onChange={(e) => setKey3Input(e.target.value.replace(/[^0-9]/g, ""))}
                />
                <button
                  style={{ padding: "0.5rem 1.5rem", backgroundColor: "#2563eb", color: "white", borderRadius: "0.5rem", cursor: "pointer" }}
                  onClick={validateKey3}
                >
                  Valider
                </button>
              </div>
            )}

            {key3Unlocked && (
              <div style={{ color: "#15803d", fontSize: "1.25rem", marginTop: "1rem", fontWeight: "bold" }}>
                ✓ Le cadenas s'ouvre ! Code final :
                <span style={{ color: "#b91c1c", fontSize: "2rem", marginLeft: "0.5rem" }}>4</span>
              </div>
            )}

            <button
              style={{ marginTop: "2rem", padding: "0.5rem 1.5rem", backgroundColor: "#334155", color: "white", borderRadius: "0.5rem", cursor: "pointer" }}
              onClick={() => setStep(0)}
            >
              ← Retour
            </button>
          </div>
        )}

      </div>
    </div>
  );
}