function digital_root(n) {
  // console.log(n);
  if (n < 10) {
    return n;
  }

  return digital_root(
    n
      .toString()
      .split("")
      .reduce((total, value) => {
        return (total += parseInt(value));
      }, 0)
  );
}

module.exports = { digital_root };
