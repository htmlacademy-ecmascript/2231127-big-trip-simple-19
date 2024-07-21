const ARRAY = [1, 6, 43, 2, 7, 4];

function getDiet(x) {
  let sumFud;

  for (let i = 0; i <= x.length - 1; i++) {
    sumFud += [i];
  }

  return sumFud;
}

getDiet(ARRAY);

const x = (y, z) => y + z;

x(432, 5345);
