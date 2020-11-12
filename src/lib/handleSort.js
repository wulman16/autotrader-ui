const handleSort = (data, category, order) => {
  console.log(order);
  let result;
  if (category === "Heading" || category === "Subheading") {
    result = data.sort((a, b) =>
      a[category].toLowerCase() > b[category].toLowerCase() ? 1 : -1
    );
  } else if (category === "Price") {
    result = data.sort((a, b) => a.Price - b.Price);
  }
  return order === "asc" ? result : result.reverse();
};

export default handleSort;
