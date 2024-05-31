document.addEventListener("DOMContentLoaded", () => {
    const obtenerDatosClima = async () => {
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Córdoba';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a2ef6a5755msh9f82bf903e74c94p1115fbjsnf6efa3c6b078',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parseamos el resultado a JSON
            console.log(result);
            mostrarDatosClima(result); // Llamamos a la función para mostrar los datos
        } catch (error) {
            console.error(error);
        }
    };

    const mostrarDatosClima = (datos) => {
        const datosClimaDiv = document.getElementById('datosClima');

        const location = document.createElement('h3');
        location.innerText = `Ubicación: ${datos.location.name}, ${datos.location.region}`;

        const temperature = document.createElement('p');
        temperature.innerText = `Temperatura: ${datos.current.temp_c}°C`;

        const condition = document.createElement('p');
        condition.innerText = `Condición: ${datos.current.condition.text}`;

        datosClimaDiv.appendChild(location);
        datosClimaDiv.appendChild(temperature);
        datosClimaDiv.appendChild(condition);
    };

    obtenerDatosClima();
});
