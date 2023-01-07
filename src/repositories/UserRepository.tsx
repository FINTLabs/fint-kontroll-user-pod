import axios from 'axios';
import {IUserItem} from "../context/userContext/types";

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');

}

const getUserById = (id: string) => axios.get<IUserItem>(`/api/users/id/${id}`);

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById

};

export default UserRepository;