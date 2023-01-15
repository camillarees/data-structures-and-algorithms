'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0){
    const neighbor = this.adjacencyList.get(startVertex);
    neighbor.push( new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    return[...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return this.adjacencyList.keys;
  }

  size(){
    const vertices = new Set();
    return vertices.size;
  }

  breadthFirst(root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      current = queue.pop();
      if(callback) callback(current.value);
      const neighbors = this.getNeighbors(current);

      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }

  depthFirst(root, callback){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(stack.length){
      current = stack.pop();
      if(callback) callback(current.value);

      const neighbors = this.getNeighbors(current);

      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }

}

module.exports = Graph;

