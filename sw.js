document.getElementById("detail").innerHTML = `
  <h2>${d.title}</h2>
  <div class="price-box">
    ${d.price}
    <span class="${changeClass}">${d.change} (${d.changeVal})</span>
    <span class="currency">${d.currency}</span>
    <span class="time">${d.time}</span>
  </div>
  <iframe src="https://s.tradingview.com/widgetembed/?symbol=${d.symbol}&interval=D&theme=${document.body.classList.contains('dark')?'dark':'light'}"></iframe>
  ${fundamentalsHTML}
`;
