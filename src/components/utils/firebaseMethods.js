export const getFilteredData = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export const reverseData = data => {
  let reversedArray = [];

  for (let i = data.length - 1; i >= 0; i--) {
    reversedArray.push(data[i]);
  }
  return reversedArray;
};
