const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  };

setTimeout(() => console.log(getPlanet()), 4000);// executa o console log após 4 segundos