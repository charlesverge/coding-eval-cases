const cache = [];
function review_case_8(value) {
  setTimeout(() => cache.push(value), 0);
  return cache.length;
}
module.exports = { review_case_8 };
