import client from "../../api/client";

const advertBaseUrl = "/sites/MLV/search";

export const getArticulesId = () => {
    const url = advertBaseUrl;
    return client.get(url, { params: { nickname: "Alcazab" } });
};

export const getLastedsAdverts = () => {
  const url = advertBaseUrl;
  return client.get(url);
};

export const getLastedAdvert = (id) => {
  const url = `${advertBaseUrl}/${id}`;
  return client.get(url);
};
