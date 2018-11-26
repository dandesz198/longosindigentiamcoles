import api from "./api";

// body: { title, content, tags }
export async function create(body) {
  const { data } = await api.post(`/article/create`, body);
  return data;
}

// body: { title, content, tags }
export async function update(id, body) {
  const { data } = await api.put(`/article/update/${id}`, body);
  return data;
}

export async function getAll() {
  const { data } = await api.get("/article/all").catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });;
  return data;
}

export async function get(id) {
  const { data } = await api.get(`/article/${id}`);
  return data;
}

export async function deleteById(id) {
  const { data } = await api.delete(`/article/delete/${id}`);
  return data;
}
