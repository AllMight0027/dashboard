export const addComma = (amount: number) => {
  if (amount - parseInt(amount.toString()) > 0) {
    const firstPart =
      parseInt(amount.toString()).toLocaleString("en") ||
      amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const secondPart = (amount - parseInt(amount.toString()))
      .toFixed(2)
      .toString()
      .replace("0.", ".");
    return firstPart + secondPart;
  } else {
    return (
      parseInt(amount.toString()).toLocaleString("en") ||
      amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  }
};
