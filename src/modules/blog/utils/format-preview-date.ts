export const formatPreviewDate = (date: string) => {
  const myDate = new Date(date);
  return `${myDate.getDate()} ${myDate.toLocaleString("en-us", {
    month: "short",
  })} ${myDate.getFullYear()}`;
};
