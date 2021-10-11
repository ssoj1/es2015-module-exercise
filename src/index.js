import { choice, remove } from "./helpers";
import { FRUITS } from "./foods";

let randomFruit = choice(FRUITS);

console.log(`I'd like one ${randomFruit} please.`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?");

remove(FRUITS, randomFruit);

console.log(`I’m sorry, we’re all out. We have ${FRUITS.length} left.`);
