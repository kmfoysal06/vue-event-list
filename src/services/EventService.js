import axios from "axios";
const setRequest = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getEvents(perPage, page) {
    return setRequest.get("/events?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id) {
    return setRequest.get("/events/" + id);
  },
};
