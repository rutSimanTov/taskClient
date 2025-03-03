import axios from 'axios';

axios.defaults.baseURL = 'https://taskserver-i4zc.onrender.com';
const apiUrl = axios.defaults.baseURL


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
    console.error("error in interceptor", error);
    return Promise.reject(error);
  }
);


export default {

  //---item----

  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/item`)
    return result.data;
  },

  addTask: async (name) => {
    try {
      const result = await axios.post(`${apiUrl}/item/${name}`)
      setAuthorizationBearer();
      return result.data;
    }
    catch (err) {
      console.error("error in add task", err)
    }
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`${apiUrl}/item/${id}/${isComplete}`)
    setAuthorizationBearer();
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`${apiUrl}/item/${id}`)
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






