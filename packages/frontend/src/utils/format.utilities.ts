import moment from "moment";

export const formatDateDefault = (date: string): string => {
  return moment(date).format("YYYY-MM-DD");
};
export const formatGetDay = (date: string): string => {
  return moment(date).format("DD");
};
export const formatGetMonth = (date: string): string => {
  return moment(date).format("MM");
};

export const formatGetYear = (date: string): string => {
  return moment(date).format("YYYY");
};
