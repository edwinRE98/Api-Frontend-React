import axios from "axios";

const APIURL = "http://localhost:8080/api/users/findAll";
const APIURLSAVE = "http://localhost:8080/api/users/save";
const APIURLGETBYID = "http://localhost:8080/api/users/findById/";
const APIURLUPDATE = "http://localhost:8080/api/users/update/";
const APIURLDELETE = "http://localhost:8080/api/users/delete/";

class UserService{

  getAll(){
    return axios.get(APIURL);
  }

  save(user){
    return axios.post(APIURLSAVE,user)
  }

  getById(id){
    return axios.get(APIURLGETBYID + id)
  }

  update(id,user){
    return axios.put(APIURLUPDATE + id, user)
  }

  delete(id){
    return axios.delete(APIURLDELETE + id)
  }

}

export default new UserService();