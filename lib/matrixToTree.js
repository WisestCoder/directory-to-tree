function matrixToTree(queue) {
  let treeStr = '';
  queue.forEach((item, index) => {
    treeStr += getStrByPos(queue, item.pos, item.isLastChild, item.isNoLeft, index) + item.name + '\n'
  });
  return treeStr;
}

function getStrByPos(queue, pos, isLastChild, isNoLeft, index) {
  const x = pos[0];
  const y = pos[1];
  if (y === 0) {
    return '';
  }
  const start = isLastChild ? '└' : '├';
  const left = addStand(y - 1, isNoLeft);
  return left + start + '-- ';
}

function addStand(num, isNoLeft) {
  let str = '';
  while(num > 0) {
    str += isNoLeft ? '    ' : '│   ';
    num --;
  }
  return str;
}

module.exports = matrixToTree;