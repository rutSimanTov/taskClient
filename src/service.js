import axios from 'axios';

// Set the default base URL for axios requests from environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// const apiUrl = axios.defaults.baseURL


function saveAccessToken(authResult) {
  localStorage.setItem("access_token", authResult.token);
  setAuthorizationBearer();
}

function setAuthorizationBearer() {
  const access_token = localStorage.getItem("access_token")
  if (access_token)
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
}


axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error("error in interceptor", error.message);
    return Promise.reject(error);
  }
);


export default {

  //---Item----

  getTasks: async () => {
    const result = await axios.get(`/Item`)
    return result.data;
  },

  addTask: async (name) => {
    try {
      const result = await axios.post(`/Item/${name}`)
      setAuthorizationBearer();
      return result.data;
    }
    catch (err) {
      console.error("error in add task", err)
    }
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`/Item/${id}/${isComplete}`)
    setAuthorizationBearer();
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/Item/${id}`)
    setAuthorizationBearer();
    return result.data;
  },

  //----user---

  login: async (name, password) => {
    const res = await axios.post("/login", { name, password });
    saveAccessToken(res.data)
  },

  Register: async (name, password) => {
    const res = await axios.post("/register", { name, password });
    saveAccessToken(res.data)
  }

};






