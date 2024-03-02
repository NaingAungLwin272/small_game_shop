import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f51adbba845d4d6aa2d70b7eb0d61774",
  },
});
