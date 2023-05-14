function divideAlpha(myArray) {
  const resultObject = {};
  myArray.forEach((item) => {
    const firstChar = item.title?.[0];
    const key = /^[a-zA-Z]/.test(firstChar) ? firstChar.toLowerCase() : "#";
    if (key in resultObject) {
      resultObject[key].push(item);
    } else {
      resultObject[key] = [item];
    }
  });

  // console.log(resultObject);

  return resultObject;
}

export default divideAlpha;
