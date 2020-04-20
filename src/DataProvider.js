import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import { listQueries, updateQueries, oneQueries } from "./Queries";

import axios from "axios";
const apiUrl = process.env.REACT_APP_PROD_URL;
const httpClient = fetchUtils.fetchJson;

export default {
  getList: async (resource, params) => {
    console.log(resource, params);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = listQueries[resource];
    //console.log(query);
    const list = await axios(apiUrl, {
      method: "post",
      data: {
        query,
      },
    }).then((res) => res.data.data);
    const data = list[Object.keys(list)[0]];

    console.log(data);
    return {
      data,
      total: data.length,
    };
  },

  getOne: async (resource, params) => {
    console.log(resource, params);
    const { id } = params;
    const queryFunc = oneQueries[resource];
    const query = queryFunc(id);

    const one = await axios(apiUrl, {
      method: "post",
      data: {
        query,
      },
    }).then((res) => {
      console.log(res);
      return res.data;
    });
    return one;
  },

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  update: (resource, params) => {
    console.log(resource, params);

    const query = eval(`updateQueries.${resource}`);
    console.log(query);
    // const list = await axios(apiUrl, {
    //   method: "post",
    //   data: {
    //     query,
    //   },
    // }).then((res) => res.data.data);

    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};
