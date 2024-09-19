var diffWaysToCompute = (expression) => {
  const r = (exp) => {
    if (typeof exp == "string") return [exp];
    if (exp.length == 1) return exp;
    if (exp.length == 3) {
      const res1 = r(exp[0]);
      const res2 = r(exp[2]);
      const op = exp[1];
      return res1.flatMap((v) => {
        return res2.map((vv) => {
          return {
            "-": v - vv,
            "+": +v + +vv,
            "*": v * vv,
          }[op];
        });
      });
    }

    const retArr = [];
    for (let i = 1; i < exp.length / 2; i++) {
      const lhs = exp.slice(0, i * 2 - 1);
      const operator = exp.slice(i * 2 - 1, i * 2);
      const rhs = exp.slice(i * 2);

      retArr.push(...r([lhs, operator, rhs]));
    }

    return retArr;
  };

  return r(expression.split(/([+*-])/g)).map((v) => parseInt(v));
};
