export class KnightsTravails {
	constructor(start, destination) {
		this.start = start;
		this.destination = destination;
	}

	validateInput(start, destination) {
		// Check if both start and destination are provided
		if (!start || !destination) {
			console.log("Both start and destination coordinates are required.");
			return false;
		}
		// Check if the start and destination are arrays of two elements
		if (start.length !== 2 || destination.length !== 2) {
			console.log("Coordinates need to be an array of two elements.");
			return false;
		}
		// Ensure all values in both the start and destination arrays are integers
		if (
			!Number.isInteger(start[0]) ||
			!Number.isInteger(start[1]) ||
			!Number.isInteger(destination[0]) ||
			!Number.isInteger(destination[1])
		) {
			console.log("Coordinates must be integers");
			return false;
		}
		// Check if the coordinates are within the valid range (0-7)
		if (
			start[0] < 0 ||
			start[0] > 7 ||
			start[1] < 0 ||
			start[1] > 7 ||
			destination[0] < 0 ||
			destination[0] > 7 ||
			destination[1] < 0 ||
			destination[1] > 7
		) {
			console.log("Coordinates must be between 0 and 7 inclusive.");
			return false;
		}
		// If all checks pass, return true indicating the input is valid
		return true;
	}
}
