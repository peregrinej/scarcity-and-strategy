function allocateResources() {
    const robots = parseInt(document.getElementById('robots').value);
    const pizzas = parseInt(document.getElementById('pizzas').value);
    const labor = parseInt(document.getElementById('labor').value);
    const capital = parseInt(document.getElementById('capital').value);

    const totalResources = 100;
    const totalLabor = 200;
    const totalCapital = 1000;
    let robotResult = robots;
    let pizzaResult = pizzas;

    // Calculate efficiency
    const resourceUsage = robots + pizzas;
    const laborUsage = labor;
    const capitalUsage = capital;

    if (resourceUsage > totalResources) {
        alert('You have exceeded the total available resources of 100.');
        return;
    }
    if (laborUsage > totalLabor) {
        alert('You have exceeded the total available labor hours of 200.');
        return;
    }
    if (capitalUsage > totalCapital) {
        alert('You have exceeded the total available capital of $1000.');
        return;
    }

    const efficiency = ((resourceUsage / totalResources) * 0.5 + 
                        (laborUsage / totalLabor) * 0.3 + 
                        (capitalUsage / totalCapital) * 0.2) * 100;

    // Set results
    document.getElementById('robot-result').textContent = `Robots Produced: ${robotResult}`;
    document.getElementById('pizza-result').textContent = `Pizzas Produced: ${pizzaResult}`;
    document.getElementById('efficiency').textContent = `Efficiency: ${efficiency.toFixed(2)}%`;
    document.getElementById('total-resources').textContent = `Total Resources Allocated: ${resourceUsage}/100`;
    document.getElementById('total-labor').textContent = `Total Labor Used: ${laborUsage}/200`;
    document.getElementById('total-capital').textContent = `Total Capital Used: ${capitalUsage}/1000`;

    // Set message
    let message = '';
    if (efficiency > 90) {
        message = 'Excellent resource allocation!';
    } else if (efficiency > 70) {
        message = 'Good job, but there is room for improvement.';
    } else {
        message = 'You need to optimize your resource allocation.';
    }
    document.getElementById('message').textContent = message;
}

function drawResourceCard() {
    const resourceCards = [
        "You found an additional 10 units of labor.",
        "You acquired 5 more units of capital.",
        "You discovered a new technology that increases efficiency by 10%.",
        "You received a grant adding 20 units of capital.",
        "You hired more workers, adding 15 units of labor."
    ];
    const randomCard = resourceCards[Math.floor(Math.random() * resourceCards.length)];
    document.getElementById('resource-card-result').textContent = randomCard;
}

function drawEventCard() {
    const eventCards = [
        "A natural disaster has decreased your resources by 10 units.",
        "A new government policy has increased your capital by 10 units.",
        "A labor strike has decreased your available labor by 20 units.",
        "A technological breakthrough increases efficiency by 15%.",
        "A market crash decreases your capital by 25 units."
    ];
    const randomCard = eventCards[Math.floor(Math.random() * eventCards.length)];
    document.getElementById('event-card-result').textContent = randomCard;
}

