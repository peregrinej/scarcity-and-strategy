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
