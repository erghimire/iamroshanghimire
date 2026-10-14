// Master Data set extracted from your spreadsheet
const rawData = [
  { sn: 1, date: "2026-07-01", isWeekend: false, prices: { NVDA: 197.58, AMZN: 241.70, MSFT: 384.28, RBLX: 57.95, META: 612.91, GOOGL: 361.21, PLTR: 125.73, COIN: 159.24, TSM: 444.23, TSLA: 425.30, SPCX: 157.54, MU: 1032.28, SABR: 2.12 } },
  { sn: 2, date: "2026-07-02", isWeekend: false, prices: { NVDA: 194.83, AMZN: 242.67, MSFT: 390.49, RBLX: 55.41, META: 582.90, GOOGL: 359.91, PLTR: 129.30, COIN: 165.48, TSM: 434.16, TSLA: 393.45, SPCX: 162.00, MU: 975.56, SABR: 2.09 } },
  { sn: 3, date: "2026-07-03", isWeekend: false, prices: { NVDA: 195.55, AMZN: 244.16, MSFT: 386.74, RBLX: 57.03, META: 600.29, GOOGL: 366.46, PLTR: 132.54, COIN: 168.87, TSM: 451.79, TSLA: 419.77, SPCX: 160.42, MU: 984.75, SABR: 2.13 } },
  { sn: 4, date: "2026-07-04", isWeekend: true, prices: {} },
  { sn: 5, date: "2026-07-05", isWeekend: true, prices: {} },
  { sn: 6, date: "2026-07-06", isWeekend: false, prices: { NVDA: 195.55, AMZN: 244.16, MSFT: 386.74, RBLX: 57.03, META: 600.29, GOOGL: 366.46, PLTR: 132.54, COIN: 168.87, TSM: 451.79, TSLA: 419.77, SPCX: 160.42, MU: 984.75, SABR: 2.13 } },
  { sn: 7, date: "2026-07-07", isWeekend: false, prices: { NVDA: 196.93, AMZN: 245.98, MSFT: 388.84, RBLX: 56.71, META: 615.58, GOOGL: 367.03, PLTR: 134.37, COIN: 163.51, TSM: 432.57, TSLA: 402.90, SPCX: 149.47, MU: 938.38, SABR: 2.03 } },
  { sn: 8, date: "2026-07-08", isWeekend: false, prices: { NVDA: 204.12, AMZN: 243.62, MSFT: 383.34, RBLX: 55.12, META: 603.12, GOOGL: 361.92, PLTR: 132.22, COIN: 159.36, TSM: 436.98, TSLA: 394.06, SPCX: 148.30, MU: 948.80, SABR: 1.95 } },
  { sn: 9, date: "2026-07-09", isWeekend: false, prices: { NVDA: 202.78, AMZN: 247.04, MSFT: 384.36, RBLX: 56.43, META: 631.48, GOOGL: 358.89, PLTR: 129.04, COIN: 158.44, TSM: 436.96, TSLA: 406.55, SPCX: 152.16, MU: 991.64, SABR: 1.91 } },
  { sn: 10, date: "2026-07-10", isWeekend: false, prices: { NVDA: 210.96, AMZN: 245.34, MSFT: 385.10, RBLX: 55.35, META: 669.21, GOOGL: 357.18, PLTR: 126.79, COIN: 159.07, TSM: 434.11, TSLA: 407.76, SPCX: 145.30, MU: 979.30, SABR: 1.85 } },
  { sn: 11, date: "2026-07-11", isWeekend: true, prices: {} },
  { sn: 12, date: "2026-07-12", isWeekend: true, prices: {} },
  { sn: 13, date: "2026-07-13", isWeekend: false, prices: { NVDA: 203.53, AMZN: 247.31, MSFT: 390.99, RBLX: 55.03, META: 656.73, GOOGL: 352.51, PLTR: 130.04, COIN: 157.37, TSM: 421.58, TSLA: 394.76, SPCX: 139.14, MU: 937.00, SABR: 1.76 } },
  { sn: 14, date: "2026-07-14", isWeekend: false, prices: { NVDA: 211.80, AMZN: 247.49, MSFT: 384.93, RBLX: 54.47, META: 661.04, GOOGL: 359.51, PLTR: 133.72, COIN: 161.50, TSM: 420.39, TSLA: 396.18, SPCX: 136.08, MU: 983.12, SABR: 1.71 } },
  { sn: 15, date: "2026-07-15", isWeekend: false, prices: { NVDA: 212.50, AMZN: 254.96, MSFT: 395.63, RBLX: 57.07, META: 681.31, GOOGL: 370.92, PLTR: 133.76, COIN: 167.21, TSM: 419.48, TSLA: 394.46, SPCX: 135.27, MU: 904.28, SABR: 1.76 } },
  { sn: 16, date: "2026-07-16", isWeekend: false, prices: { NVDA: 207.40, AMZN: 249.89, MSFT: 401.10, RBLX: 54.01, META: 664.54, GOOGL: 354.46, PLTR: 134.44, COIN: 160.49, TSM: 409.74, TSLA: 391.06, SPCX: 131.11, MU: 853.20, SABR: 1.81 } },
  { sn: 17, date: "2026-07-17", isWeekend: false, prices: { NVDA: 202.81, AMZN: 247.23, MSFT: 393.82, RBLX: 51.68, META: 646.01, GOOGL: 346.77, PLTR: 132.38, COIN: 157.12, TSM: 398.37, TSLA: 380.84, SPCX: 123.99, MU: 848.95, SABR: 1.73 } },
  { sn: 18, date: "2026-07-18", isWeekend: true, prices: {} },
  { sn: 19, date: "2026-07-19", isWeekend: true, prices: {} },
  { sn: 20, date: "2026-07-20", isWeekend: false, prices: { NVDA: 203.28, AMZN: 249.99, MSFT: 402.29, RBLX: 53.25, META: 645.85, GOOGL: 351.99, PLTR: 134.85, COIN: 160.43, TSM: 402.30, TSLA: 369.57, SPCX: 119.85, MU: 865.46, SABR: 1.72 } },
  { sn: 21, date: "2026-07-21", isWeekend: false, prices: { NVDA: 207.29, AMZN: 247.55, MSFT: 397.75, RBLX: 52.50, META: 643.81, GOOGL: 347.15, PLTR: 132.66, COIN: 175.85, TSM: 424.61, TSLA: 378.93, SPCX: 123.54, MU: 970.82, SABR: 1.73 } },
  { sn: 22, date: "2026-07-22", isWeekend: false, prices: { NVDA: 212.06, AMZN: 244.85, MSFT: 390.34, RBLX: 49.64, META: 627.17, GOOGL: 342.09, PLTR: 124.57, COIN: 166.12, TSM: 421.21, TSLA: 374.01, SPCX: 115.26, MU: 959.48, SABR: 1.66 } },
  { sn: 23, date: "2026-07-23", isWeekend: false, prices: { NVDA: 208.76, AMZN: 233.66, MSFT: 381.58, RBLX: 47.55, META: 606.10, GOOGL: 317.69, PLTR: 123.37, COIN: 161.16, TSM: 415.58, TSLA: 319.69, SPCX: 118.24, MU: 990.21, SABR: 1.69 } },
  { sn: 24, date: "2026-07-24", isWeekend: false, prices: { NVDA: 206.84, AMZN: 232.11, MSFT: 381.70, RBLX: 47.55, META: 595.19, GOOGL: 319.74, PLTR: 122.92, COIN: 158.29, TSM: 403.41, TSLA: 313.03, SPCX: 115.07, MU: 920.95, SABR: 1.66 } }
];

let currentDisplayData = [...rawData];
let currentSortColumn = 'date';
let currentSortOrder = 'asc';

// Render Table
function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  data.forEach((row) => {
    const tr = document.createElement('tr');
    
    if (row.isWeekend) {
      tr.className = 'weekend-row';
      tr.innerHTML = `
        <td>${row.sn}</td>
        <td>${row.date}</td>
        <td colspan="13">Weekend</td>
      `;
    } else {
      tr.innerHTML = `
        <td>${row.sn}</td>
        <td>${row.date}</td>
        <td class="highlight-col">$${row.prices.NVDA.toFixed(2)}</td>
        <td>$${row.prices.AMZN.toFixed(2)}</td>
        <td>$${row.prices.MSFT.toFixed(2)}</td>
        <td>$${row.prices.RBLX.toFixed(2)}</td>
        <td>$${row.prices.META.toFixed(2)}</td>
        <td>$${row.prices.GOOGL.toFixed(2)}</td>
        <td>$${row.prices.PLTR.toFixed(2)}</td>
        <td>$${row.prices.COIN.toFixed(2)}</td>
        <td>$${row.prices.TSM.toFixed(2)}</td>
        <td>$${row.prices.TSLA.toFixed(2)}</td>
        <td>$${row.prices.SPCX.toFixed(2)}</td>
        <td>$${row.prices.MU.toFixed(2)}</td>
        <td>$${row.prices.SABR.toFixed(2)}</td>
      `;
    }
    tbody.appendChild(tr);
  });
}

// Filtering
function applyFilters() {
  const searchVal = document.getElementById('searchInput').value.toLowerCase();
  const viewFilter = document.getElementById('viewFilter').value;

  currentDisplayData = rawData.filter(row => {
    const matchesSearch = row.date.toLowerCase().includes(searchVal);
    let matchesView = true;

    if (viewFilter === 'trading') matchesView = !row.isWeekend;
    if (viewFilter === 'weekends') matchesView = row.isWeekend;

    return matchesSearch && matchesView;
  });

  renderTable(currentDisplayData);
}

// Sorting
function sortTableByColumn(column) {
  if (currentSortColumn === column) {
    currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
  } else {
    currentSortColumn = column;
    currentSortOrder = 'asc';
  }

  currentDisplayData.sort((a, b) => {
    if (column === 'date') {
      return currentSortOrder === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    } else {
      const valA = a.isWeekend ? -1 : a.prices[column] || 0;
      const valB = b.isWeekend ? -1 : b.prices[column] || 0;
      return currentSortOrder === 'asc' ? valA - valB : valB - valA;
    }
  });

  renderTable(currentDisplayData);
}

function applySorting() {
  const sortVal = document.getElementById('sortSelect').value;
  if (sortVal === 'date-asc') {
    currentSortColumn = 'date';
    currentSortOrder = 'asc';
  } else if (sortVal === 'date-desc') {
    currentSortColumn = 'date';
    currentSortOrder = 'desc';
  } else if (sortVal === 'nvda-desc') {
    currentSortColumn = 'NVDA';
    currentSortOrder = 'desc';
  } else if (sortVal === 'nvda-asc') {
    currentSortColumn = 'NVDA';
    currentSortOrder = 'asc';
  }
  sortTableByColumn(currentSortColumn);
}

// AI Feature Simulator
function generateAiInsights() {
  const tradingDays = rawData.filter(r => !r.isWeekend);
  const nvdaPrices = tradingDays.map(r => r.prices.NVDA);
  const maxNvda = Math.max(...nvdaPrices);
  const minNvda = Math.min(...nvdaPrices);
  const firstNvda = nvdaPrices[0];
  const lastNvda = nvdaPrices[nvdaPrices.length - 1];
  const nvdaChange = (((lastNvda - firstNvda) / firstNvda) * 100).toFixed(2);

  const outputEl = document.getElementById('aiOutput');
  outputEl.innerHTML = `
    <strong>AI Insight Report (July 2026 Data):</strong><br>
    • <strong>NVDA Performance:</strong> NVDA peaked at <strong>$${maxNvda.toFixed(2)}</strong> on 2026-07-15, up from its starting baseline of $${firstNvda.toFixed(2)}. Net gain across period: <strong>${nvdaChange}%</strong>.<br>
    • <strong>Market Trends:</strong> Tech majors (META, MSFT, NVDA) showed strong mid-month bullish momentum, followed by minor late-month profit taking.<br>
    • <strong>Volatilty Leaders:</strong> TSLA experienced noticeable fluctuations, dropping from a high of $425.30 down to $313.03 by 2026-07-24.
  `;
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  renderTable(rawData);
});