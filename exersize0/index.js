const api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";

async function getapi(url) {
  try {
    const response = await fetch(url).catch((error) => console.log(error));
    data = await response.json()
    show(data)
    console.log(data)
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("There was a SyntaxError", error)
    } else {
      console.log("There error", error)
    }
  }
  if (response?.ok) {
    console.log("Response ok")
  } else {
    console.log(`HTTP Response Code: ${response?.status}`)
  }
}
function sleep (milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
function show(data) {
  let tab = `
    <tr>
      <th>id</th>
      <th>symbol</th>
      <th>name</th>
    </tr>`;
  for (let i = 0; i < data.length; i++) {
    tab += `
      <tr>
        <td>${data[i].id}</td>
        <td>${data[i].symbol}</td>
        <td>${data[i].name}</td>
      </tr>`;
  }

  document.getElementById("tables").innerHTML = tab;

  let tableRows = document.getElementById("tables").getElementsByTagName("tr");
  for (let i = 0; i <= 5; i++) {
    let cells = tableRows[i].getElementsByTagName("td");
    for (let j = 0; j < cells.length; j++) {
      cells[j].style.backgroundColor = "blue"
    }
  }
  let getTds = document.querySelectorAll('table td')
  getTds.forEach(function(row) {
    if (row.textContent == 'usdt') {
        row.style.backgroundColor = 'green'
    }
  })
}
getapi(api_url)