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
		if (!this.validatePosition(start) || !this.validatePosition(destination)) {
			console.log("Coordinates must be between 0 and 7 inclusive.");
			return false;
		}
		// If all checks pass, return true indicating the input is valid
		return true;
	}
	// Helper function to check if the coordinates are within the valid range (0-7)
	validatePosition(position) {
		const [x, y] = position;

		if (x < 0 || x > 7 || y < 0 || y > 7) {
			return false;
		}
		return true;
	}

	createVertex(position, distance = 0, predecessor = null) {
		return {
			position: position, // The position of the vertex on the board
			distance: distance, // The number of moves taken to get here
			predecessor: predecessor, // The previous vertex we came from
		};
	}

	generateMoves(position) {
		// Destructure the position into x and y coordinates
		const [x, y] = position;

		// Initialize an empty array to store valid moves
		const validMoves = [];

		// Define the 8 possible moves a knight can make
		const moves = [
			[x + 2, y + 1],
			[x + 2, y - 1],
			[x - 2, y + 1],
			[x - 2, y - 1],
			[x + 1, y + 2],
			[x + 1, y - 2],
			[x - 1, y + 2],
			[x - 1, y - 2],
		];

		// Loop through all the possible moves, validate each move to ensure it stays within the board's boundaries
		for (const position of moves) {
			if (this.validatePosition(position)) {
				validMoves.push(position);
			}
		}
		// Return the array of valid moves
		return validMoves;
	}
}
