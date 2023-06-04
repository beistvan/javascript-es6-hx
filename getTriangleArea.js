const getTriangleArea = (h, b) => 0.5 * h * b;

const area = n => getTriangleArea(n, square(n) / 2);