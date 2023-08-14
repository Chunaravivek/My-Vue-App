import axios from 'axios';

class ApiSingleton {
  constructor() {
    if (ApiSingleton.instance) {
      return ApiSingleton.instance;
    }
    ApiSingleton.instance = this;
    this.apiInstance = axios.create({
      baseURL: 'http://localhost:3000/v1/', // Replace with your API URL
      timeout: 10000,
    });
    return this;
  }

  getInstance() {
    return this.apiInstance;
  }
}

export default new ApiSingleton();
