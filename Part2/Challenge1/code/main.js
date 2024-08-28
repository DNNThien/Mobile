var calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
var avgDolphins1 = calcAverage(44, 23, 71);
var avgKoalas1 = calcAverage(65, 54, 49);
var avgDolphins2 = calcAverage(85, 54, 41);
var avgKoalas2 = calcAverage(23, 34, 27);
var checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins');
  }
};
console.log("Data 1:")
checkWinner(avgDolphins1, avgKoalas1);
console.log("Data 2:")
checkWinner(avgDolphins2, avgKoalas2);