import api from "configs/api";

const addCategory = (data) => api.post("category", data);

export { addCategory };
