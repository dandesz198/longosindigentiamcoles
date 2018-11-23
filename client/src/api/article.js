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
  const { data } = await api.get("/article/get");
  return data;
}

export async function get(id) {
  const { data } = await api.get(`/article/get/${id}`);
  return data;
}

export async function deleteById(id) {
  const { data } = await api.delete(`/article/delete/${id}`);
  return data;
}
