import http from "../http-common";

class LawerDataService {
  get(id) {
    return http.get(`/lawers/${id}`);
  }

  create(data) {
    return http.post("/lawers", data);
  }

  update(id, data) {
    return http.put(`/lawers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/lawers/${id}`);
  }

  findByEmail(email) {
    return http.get(`/lawers?email=${email}`);
  }
}

export default new LawerDataService();