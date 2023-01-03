export const returnMarkerStyle = points => {
  if (points >= 200) {
    return {
      width: 65,
      height: 65,
      size: 64,
      fontSize: 21,
    };
  }
  if (points >= 100) {
    return {
      width: 55,
      height: 55,
      size: 64,
      fontSize: 20,
    };
  }
  if (points >= 50) {
    return {
      width: 50,
      height: 50,
      size: 64,
      fontSize: 16,
    };
  }

  // if (points >= 25) {
  //   return {
  //     width: 40,
  //     height: 40,
  //     size: 58,
  //     fontSize: 15,
  //   };
  // }

  // if (points >= 15) {
  //   return {
  //     width: 55,
  //     height: 55,
  //     size: 54,
  //     fontSize: 16,
  //   };
  // }

  if (points >= 10) {
    return {
      width: 50,
      height: 50,
      size: 50,
      fontSize: 15,
    };
  }

  // if (points >= 8) {
  //   return {
  //     width: 50,
  //     height: 50,
  //     size: 46,
  //     fontSize: 17,
  //   };
  // }

  // if (points >= 4) {
  //   return {
  //     width: 40,
  //     height: 40,
  //     size: 40,
  //     fontSize: 16,
  //   };
  // }

  return {
    width: 45,
    height: 45,
    size: 36,
    fontSize: 15,
  };
};
