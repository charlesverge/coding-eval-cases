function review_case_3(record) {
  const names = record.names;
  names.push('archived');
  return record.names.length;
}
module.exports = { review_case_3 };
