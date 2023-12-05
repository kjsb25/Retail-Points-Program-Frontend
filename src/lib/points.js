export function calcPointAmount(transactionAmount) {
  let points = 0;
  let roundedAmount = Math.floor(transactionAmount);
  //over 100, double accumulation
  if (roundedAmount > 100) {
    points += 2 * (roundedAmount - 100);
  }
  //over fifty, single accumulation
  if (roundedAmount > 50) {
    points += roundedAmount < 100 ? roundedAmount - 50 : 50;
  }
  return points;
}
