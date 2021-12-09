const visorValue = document.getElementById('visor').querySelector('span');
const solveButton = document.getElementById('solve-op');

function refreshVisor(valueToRefresh) {
  visorValue.textContent = valueToRefresh;
}
