# knights-travails

Should it be set up as a class for the knights travails and then a class which creates the vertex, or should the create vertex be a method within the class?

accept the start co-ordinates and the destination co-ordinates. 
-- check if they are valid. Fit within the [0,0] [7,7] grid.

Create the starting vertex. I think an object with properties, distance and predecessor.
-- Set the distance to 0 and the predecessor to null. 

Create the adjacency list of vertices from the starting vertex.
-- check if the current vertex is the destination. If it is return it and its position and distance. 
-- If not, create the adjacency list for the vertex. Use a function to list the edges, making sure they are valid positions. 

Use a queue and the bfs algorithm on the adjacency list.
-- remove the first item from the queue. 
-- visit the first vertex from its adjacency list. 
-- If it doesn't have a predecessor
-- create a new vertex and update its distance, predecessor to the original co-ordinates. 
-- Add it to the queue. 
-- repeat until the the destination is reached. 

Then get the path back to the stating vertex. 
-- traverse back via the predecessor property of the vertex object. 
-- Adding each vertex to a array until reaching the starting position
-- reverse the array and use it to log to path.