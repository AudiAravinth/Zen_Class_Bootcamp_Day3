var obj = [
  {
    brand: "apple",
    model: "ios",
  },
   {
    brand: "dell",
    model: "inspiron",
  },
];
obj.forEach((vimal) => {
  for (var key in vimal) {
    console.log(key, vimal[key]);
  }
  });
