function birthdayCakeCandles(candles) {
  // Write your code here
  const max = Math.max(...candles);
  let count = 0;
  for (const candle of candles) {
    if (candle === max) {
      count += 1;
    }
  }
  return count;
}
