type TupleToObject<T extends readonly any[]> = {
  [item in T[number]]: item;
};
