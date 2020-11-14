const http = require('axios');

class User {
    constructor() {
        this.url = 'http://localhost:3000/user'
    }
    async get(){
        const res = await http.get(this.url);
        return res.data;
    }

    async post(user) {
        const res = await http.post(this.url, user);
        return res.data;
    }

    async put(user) {
        const res = await http.put(`${this.url}/${user.id}`, user);
        return res.data;
    }

    async delete({ id }) {
        await http.delete(`${this.url}/${id}`);
        return `user ${id} deleted successfully.`;
    }
}

module.exports = new User();