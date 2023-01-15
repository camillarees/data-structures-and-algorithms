# Graphs

## Challenge and Features:

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

1. add node
- Add a node to the graph
- Takes in a value and returns the added node

2. add edge
- Takes in 2 nodes to be connected by the edge, weight (optional) and returns nothing.
- Adds a new edge between two nodes in the graph
- If specified, assign a weight to the edge
- Both nodes should already be in the Graph

2. get nodes
- Returns all of the nodes in the graph as a collection (set, list, or similar)
- Empty collection returned if there are no nodes

3. get neighbors
- Takes in a node and returns a collection of edges connected to the given node
- Include the weight of the connection in the returned collection
- Empty collection returned if there are no nodes

4. size
- Returns the total number of nodes in the graph
- 0 if there are none
