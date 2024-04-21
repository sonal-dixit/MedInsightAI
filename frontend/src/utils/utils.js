export const strippedTableModifierDark = (record, index) => {
  return index % 2 !== 0
    ? "bg-[#282828] text-[#c5c5c5]"
    : "bg-[#181818] text-[#c5c5c5]";
};

export const strippedTableModifierLight = (record, index) => {
  return index % 2 !== 0 ? "bg-[#CDD2FF]" : "null";
};

export const getCategory = (assetKey) => {
  return assetKey
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function formatIndianCurrency(amount) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
};
