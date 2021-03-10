export default (data, headers) => headers.reduce((accum, item) => {
  const typeMain = data.reduce((result, elem) => {
    const isNumber = Boolean(parseFloat(elem[item.key]));
    return result + Number(isNumber);
  }, 0);
  accum.push({ ...item, isNumber: Boolean(typeMain) });
  return accum;
}, []);
