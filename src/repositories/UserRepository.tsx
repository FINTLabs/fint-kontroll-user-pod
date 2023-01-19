import axios from 'axios';
import {IUserItem, IUserPage} from "../context/userContext/types";

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');
}

const getUserById = (id: string) => axios.get<IUserItem>(`/api/users/id/${id}`);

const getUserPage = (page: number, size: number) => axios.get<IUserPage>(`/api/users?page=${page}&size=${size}`);

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById,
    getUserPage

};

export default UserRepository;