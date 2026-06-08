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

    let electricityEmission = electricity * 0.5;

    let foodEmission =
        food === "nonveg" ? 100 : 50;

    let total =
        transportEmission +
        electricityEmission +
        foodEmission;

    let score =
        Math.max(0, 100 - total / 10);

    document.getElementById("result").innerHTML =
        `
        <h2>Results</h2>
        <p>Total Carbon Footprint: ${total.toFixed(2)} kg CO₂</p>
        <p>Sustainability Score: ${score.toFixed(0)}/100</p>
        `;
}
