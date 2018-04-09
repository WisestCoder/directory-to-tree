'use strict';

const expect = require('chai').expect;
const directoryToObject = require('../lib/directoryToObject.js');
const objectToMatrix = require('../lib/objectToMatrix.js');
const matrixToTree = require('../lib/matrixToTree.js');

const testObj = {
  "path": "./",
  "name": "directory-to-tree",
  "type": "directory",
  "children": [
    {
      "path": "bin",
      "name": "bin",
      "type": "directory",
      "children": [
        {
          "path": "bin/tree.js",
          "name": "tree.js",
          "type": "file"
        }
      ]
    },
    {
      "path": "index.js",
      "name": "index.js",
      "type": "file"
    },
    {
      "path": "lib",
      "name": "lib",
      "type": "directory",
      "children": [
        {
          "path": "lib/directoryToObject.js",
          "name": "directoryToObject.js",
          "type": "file"
        },
        {
          "path": "lib/matrixToTree.js",
          "name": "matrixToTree.js",
          "type": "file"
        },
        {
          "path": "lib/objectToMatrix.js",
          "name": "objectToMatrix.js",
          "type": "file"
        }
      ]
    },
    {
      "path": "package.json",
      "name": "package.json",
      "type": "file"
    },
    {
      "path": "test",
      "name": "test",
      "type": "directory",
      "children": [
        {
          "path": "test/test.spec.js",
          "name": "test.spec.js",
          "type": "file"
        }
      ]
    }
  ]
};

const testMatrix = [
  { name: 'directory-to-tree', isLastChild: true, isNoLeft: true, pos: [ 0, 0 ] },
  { name: 'bin', isLastChild: false, isNoLeft: true, pos: [ 1, 1 ] },
  { name: 'tree.js', isLastChild: true, isNoLeft: false, pos: [ 2, 2 ] },
  { name: 'index.js', isLastChild: false, isNoLeft: true, pos: [ 2, 1 ] },
  { name: 'lib', isLastChild: false, isNoLeft: true, pos: [ 3, 1 ] },
  { name: 'directoryToObject.js', isLastChild: false, isNoLeft: false, pos: [ 4, 2 ] },
  { name: 'matrixToTree.js', isLastChild: false, isNoLeft: false, pos: [ 5, 2 ] },
  { name: 'objectToMatrix.js', isLastChild: true, isNoLeft: false, pos: [ 6, 2 ] },
  { name: 'package.json', isLastChild: false, isNoLeft: true, pos: [ 4, 1 ] },
  { name: 'test', isLastChild: true, isNoLeft: true, pos: [ 5, 1 ] },
  { name: 'test.spec.js', isLastChild: true, isNoLeft: true, pos: [ 6, 2 ] }
];

const testTree = 'directory-to-tree\n├-- bin\n│   └-- tree.js\n├-- index.js\n├-- lib\n│   ├-- directoryToObject.js\n│   ├-- matrixToTree.js\n│   └-- objectToMatrix.js\n├-- package.json\n└-- test\n    └-- test.spec.js\n';


describe('test', () => {

	it('test directoryToObject', () => {
		const object = directoryToObject('./', { exclude: /node_modules/, depth: 3 })
    expect(object).to.deep.equal(testObj);
  });

  it('test objectToMatrix', () => {
    const object = directoryToObject('./', { exclude: /node_modules/, depth: 3 })
    const matrix = objectToMatrix([object]);
    expect(matrix).to.deep.equal(testMatrix);
  });

  it('test directoryToObject', () => {
		const object = directoryToObject('./', { exclude: /node_modules/, depth: 3 })
    const matrix = objectToMatrix([object]);
    const tree = matrixToTree(matrix);
    expect(tree).to.equal(testTree);
  });

});
