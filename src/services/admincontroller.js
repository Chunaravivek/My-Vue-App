import ApiSingleton from '../api';

class AdminController {
    constructor() {
        this.api = ApiSingleton.getInstance();
    }
    
    async login(credentials) {
        const response = await this.api.post('/admin/login', credentials);
        return response;   
        
    }
}

export default AdminController;
