import React, { useState } from 'react';
import './App.css';

const database = [
    { id: 1, name: "PET-Flasche", material: "Kunststoff", info: "Zusammendrücken, Deckel drauf. Ab zur PET-Sammelstelle.", icon: "♻️" },
    { id: 2, name: "Alu-Dose", material: "Metall", info: "Flachdrücken. In den Alu-Container der Gemeinde.", icon: "🥫" },
    { id: 3, name: "Batterie", material: "Sondermüll", info: "NICHT in den Hausmüll! Zurück in den Supermarkt.", icon: "🔋" }
];

function App() {
    const [result, setResult] = useState(null);

    const simulateScan = () => {
        const randomItem = database[Math.floor(Math.random() * database.length)];
        setResult(randomItem);
    };

    return (
        <div className="app-container">
            <header>
                <h1>RecycleScan MVP</h1>
                <p>Projekt M245 - Kreislaufwirtschaft</p>
            </header>

            <main>
                <button className="scan-button" onClick={simulateScan}>
                    📷 Produkt scannen (Simuliert)
                </button>

                {result && (
                    <div className="card">
                        <div className="icon">{result.icon}</div>
                        <h2>{result.name}</h2>
                        <span className="badge">{result.material}</span>
                        <p>{result.info}</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;