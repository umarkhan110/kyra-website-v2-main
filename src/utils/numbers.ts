export function numbers(bigNumber: string | number) {
  let abbr = "";

  if (typeof bigNumber === "number") {
    if (bigNumber >= 1000000) {
      abbr = (bigNumber / 1000000).toFixed(1) + "M";
    } else if (bigNumber >= 1000) {
      abbr = (bigNumber / 1000).toFixed(1) + "K";
    } else {
      abbr = bigNumber.toString();
    }
  } else if (typeof bigNumber === "string") {
    const numericValue = parseFloat(bigNumber);
    if (!isNaN(numericValue)) {
      if (numericValue >= 1000000) {
        abbr = (numericValue / 1000000).toFixed(1) + "M";
      } else if (numericValue >= 1000) {
        abbr = (numericValue / 1000).toFixed(1) + "K";
      } else {
        abbr = numericValue.toString();
      }
    } else {
      abbr = bigNumber; // Return the original string if it's not a valid number
    }
  }

  return abbr;
}