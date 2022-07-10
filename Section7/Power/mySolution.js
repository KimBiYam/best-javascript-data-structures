function power(num, exponents) {
  if (exponents === 0) return 1;
  return num * power(num, exponents - 1);
}
