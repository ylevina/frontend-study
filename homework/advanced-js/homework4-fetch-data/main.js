const button = document.querySelector('#button-ip');
button.addEventListener('click', () => {
    fetch("https://api.ipify.org/?format=json")
        .then((response) => {
            console.log(response);
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then((result) => {
            fetch(`http://ip-api.com/json/${result.ip}?fields=continent,country,regionName,city,district`)
                .then((response) => {
                    if (!response.ok) throw Error(response.statusText);
                    return response.json();
                })
                .then((data) => {
                    const p = document.createElement('p');
                    p.textContent = `                   
                    ${data.continent}
                    ${data.country}
                    ${data.regionName}
                    ${data.city}
                    ${data.district}
                    `;
                    button.parentElement.append(p);
                    console.log(data);
                })
                .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error));
});