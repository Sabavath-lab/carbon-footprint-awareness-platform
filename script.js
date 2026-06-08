const transportFactors = {
    car: 0.21,
    bus: 0.08,
    train: 0.05,
    bike: 0.03,
    walking: 0
};

function calculateCarbon() {

    let distance = parseFloat(document.getElementById("distance").value) || 0;
    let transport = document.getElementById("transport").value;
    let electricity = parseFloat(document.getElementById("electricity").value) || 0;
    let food = document.getElementById("food").value;

    if (distance < 0 || electricity < 0) {
        document.getElementById("result").innerHTML =
            "<p>Please enter valid positive values.</p>";
        return;
    }

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

    let impactLevel = "";

    if (score >= 80) {
        impactLevel = "🟢 Low Carbon Impact";
    } else if (score >= 50) {
        impactLevel = "🟡 Moderate Carbon Impact";
    } else {
        impactLevel = "🔴 High Carbon Impact";
    }

    let tips = [];

    if (transport === "car") {
        tips.push("🚍 Use public transport more often.");
    }

    if (electricity > 1500) {
        tips.push("💡 Reduce electricity usage and switch to LED bulbs.");
    }

    if (food === "nonveg") {
        tips.push("🥗 Add more plant-based meals to your diet.");
    }

    if (tips.length === 0) {
        tips.push("🌱 Great job! Your lifestyle is eco-friendly.");
    }

    document.getElementById("result").innerHTML = `
        <h2>📊 Results</h2>

        <p><strong>Total Carbon Footprint:</strong>
        ${total.toFixed(2)} kg CO₂</p>

        <p><strong>Sustainability Score:</strong>
        ${score.toFixed(0)}/100</p>

        <p><strong>Impact Level:</strong>
        ${impactLevel}</p>

        <h3>🌿 Personalized Recommendations</h3>

        <div class="tip-box">
            ${tips.join("<br>")}
        </div>
    `;
}
