function objectToMatrix(array, row = 0, cloumn = 0, isNoLeft = true) {
  let queue = [];
  array.forEach((item, index) => {
    const isLastChild = index === array.length - 1;
    queue.push({
      name: item.name,
      isLastChild,
      isNoLeft,
      pos: [row, cloumn]
    });
    if (item.children && item.children.length) {
      const chileQueue = objectToMatrix(item.children, row + 1, cloumn + 1, isNoLeft && isLastChild);
      queue = queue.concat(chileQueue);
    }
    row ++;
  });
  return queue;
}

module.exports = objectToMatrix;
