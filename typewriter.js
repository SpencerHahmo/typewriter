const sentence = "hello there from lighthouse labs";
const copyPasta = "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.";
let timer = 1000;

// let test = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     console.log(`'${char}' => ${test += 100} ms`);
//   }, timer += 100);
// }

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50);
}

setTimeout(() => {
  process.stdout.write("\n");
}, timer);

for (const char of copyPasta) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50);
}

setTimeout(() => {
  process.stdout.write("\n");
}, timer);