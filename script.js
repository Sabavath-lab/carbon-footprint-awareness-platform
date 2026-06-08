function calculateCarbon() {

    let distance = parseFloat(document.getElementById("distance").value) || 0;
    let transport = document.getElementById("transport").value;
    let electricity = parseFloat(document.getElementById("electricity").value) || 0;
    let food = document.getElementById("food").value;

    const transportFactors = {
        car: 0.21,
        bus: 0.08,
        train: 0.05,
        bike: 0.03,
        walking: 0
    };

    let transportEmission =
        distance * transportFactors[transport] * 30;

    let electricityEmission =
        electricity * 0.5;

    let foodEmission =
        food === "nonveg" ? 100 : 50;

    let total =
        transportEmission +
        electricityEmission +
        foodEmission;

    let score =
        Math.max(0, 100 - total / 10);

    let tips = [];

    if (transport === "car") {
        tips.push("🚍 Try using public transport more often.");
    }

    if (electricity > 1500) {
        tips.push("💡 Switch to LED bulbs and reduce electricity usage.");
    }

    if (food === "nonveg") {
        tips.push("🥗 Add more plant-based meals to your diet.");
    }

    if (tips.length === 0) {
        tips.push("🌱 Great job! Your habits are already eco-friendly.");
    }

    document.getElementById("result").innerHTML = `
        <h2>📊 Results</h2>

        <p><strong>Total Carbon Footprint:</strong>
        ${total.toFixed(2)} kg CO₂</p>

        <p class="score">
            Sustainability Score: ${score.toFixed(0)}/100
        </p>

        <h3>🌿 Personalized Recommendations</h3>

        <div class="tip-box">
            ${tips.join("<br>")}
        </div>
    `;
}
