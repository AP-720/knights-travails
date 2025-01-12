import { KnightsTravails } from "./knightstravails.js";

const start = [0, 0];
const destination = [0, 0];

const test = new KnightsTravails([0, 0], [7, 7]);

const result = test.bfs(start, destination);

console.log("Test Result:", result);
