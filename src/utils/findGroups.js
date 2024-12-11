export function findGroupsPosition(arr, id) {
  return arr.find((g) => g.id === id)?.position;
}
export function findGroupsRotation(arr, id) {
  return arr.find((g) => g.id === id)?.rotation;
}
