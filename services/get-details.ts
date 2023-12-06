import { Detail } from "@/types";

const getDetails = async (url: string): Promise<Detail[]> => {
  const res = await fetch(url);

  return res.json();
};

export default getDetails;
