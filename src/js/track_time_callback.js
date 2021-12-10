export const track = (testName, callback) => {
  console.warn('----------------------------------');
  console.info(`Test ${testName} started!`);
  const start = new Date();
  const callbackResult = callback();
  const endTime = (new Date() - start) / 1000;
  const previousResults = JSON.parse(localStorage.getItem(testName)) || [];
  previousResults.push(endTime);
  const average = previousResults.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / previousResults.length;

  console.log(`End Time ${endTime} seconds`);
  console.log('----------------------------------');
  console.log(`Callback result: ${callbackResult}`);
  console.log('----------------------------------');
  console.log(`AVG time for this test: ${average}`);

  localStorage.setItem(testName, JSON.stringify(previousResults));
}
