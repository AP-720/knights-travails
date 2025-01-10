import { KnightsTravails } from "./knightstravails.js";

const start = [0,0]
const destination = [7,-7]

const test = new KnightsTravails(start, destination);
test.validateInput(start,destination)