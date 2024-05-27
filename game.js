function allocateResources() {
    const robots = document.getElementById('robots').value;
    const pizzas = document.getElementById('pizzas').value;

    const totalResources = 100;
    let robotResult = robots;
    let pizzaResult = pizzas;

    if (parseInt(robots) + parseInt(pizzas) > totalResources) {
        alert('You have exceeded the total available resources of 100.');
        return;
    }

    document.getElementById('robot-result').textContent = `Robots Produced: ${robotResult}`;
    document.getElementById('pizza-result').textContent = `Pizzas Produced: ${pizzaResult}`;
}
