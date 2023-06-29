const api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"

async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    show(data)
}
function show(data) {
    let tab = 
    `<tr> 
    <th>id<th>
    <th>symbol<th>
    <th>name<th>
    </tr>`
    for (let i = 0; i < data.length; i++ ) {
        tab += `<tr>
        <td>${data[i].id} </td>
    <td>${data[i].symbol}</td>
    <td>${data[i].name}</td>
    </tr>`
}
document.getElementById("tables").innerHTML = tab
}
getapi(api_url)