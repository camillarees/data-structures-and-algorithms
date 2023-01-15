'use strict';

const Graph = require('./graphs.js');

describe('Graph methods test', () => {

  const graph = new Graph();
  let vertexOne = graph.addVertex(1);
  let vertexTwo = graph.addVertex(2);
  let vertexThree = graph.addVertex(3);
  let vertexFour = graph.addVertex(4);
  graph.addDirectedEdge(vertexOne, vertexTwo, 2);
  graph.addDirectedEdge(vertexOne, vertexThree, 3);
  graph.addDirectedEdge(vertexOne, vertexFour, 4);

  let vertices = graph.vertices;

  let size = graph.size();

  test('Node can be successfully added to the graph', () => {
    expect(graph.vertexOne.value).toEqual(1);

  });

  test('An edge can be successfully added to the graph', () => {
    let vertexOneEdge = graph.edges.get(vertexOne).length;
    expect(vertexOneEdge).toBe(1);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    expect(vertices.size).toBe(4);
    expect(graph.getVertices()).toBeTruty();
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    let vertexOneEdges = graph.getNeighbors(vertexOne);
    expect(vertexOneEdges.length).toBe(3);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    let vertexOneEdges = graph.edges.get(vertexOne);
    expect(vertexOneEdges[0].weight).toBe(2);
    expect(vertexOneEdges[0].weight).toBe(3);
    expect(vertexOneEdges[0].weight).toBe(4);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(size).toBe(6);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    graph.addVertex(1);
    expect(graph.vertices.size).toBe(1);
    expect(graph.edges.size).toBe(1);
  });
  
});
