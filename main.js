import { KnightsTravails } from "./knightstravails.js";

const start = [0, 0];
const destination = [0, 7];

const test = new KnightsTravails([0, 0], [7, 7]);

const result = test.bfs(start, destination);

const path = test.reconstructPath(result)

console.log(path);
