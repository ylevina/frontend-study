const button = document.querySelector('#button-ip');
button.addEventListener('click', showLocation);

async function getLocation() {
    try {
    const response = await fetch("https://api.ipify.org/?format=json");
    const ipInfo = await response.json();

    const response2 = await fetch(`http://ip-api.com/json/${ipInfo.ip}?fields=continent,country,regionName,city,district`);
    const locationInfo = await response2.json();
    return locationInfo;
    } catch(error){
        console.log(error);
    }  
};

async function showLocation() {
    const locationInfo = await getLocation();    
    const p = document.createElement('p');
    p.textContent = `
    ${locationInfo.continent}
    ${locationInfo.country}
    ${locationInfo.regionName}
    ${locationInfo.city}
    ${locationInfo.district}
    `;
    button.parentElement.append(p);
}