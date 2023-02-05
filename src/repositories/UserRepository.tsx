import axios from 'axios';
import {IUser, IUserItem, IUserPage} from "../context/userContext/types";

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');
}

const getUserById = (id: string) => axios.get<IUser>(`/api/users/id/${id}`);

const getUserPage = (page: number, size: number, userType: string) => {
    if (userType === "all") {
        return axios.get<IUserPage>(`/api/users?page=${page}&size=${size}`);
    }
    return axios.get<IUserPage>(`/api/users/${userType}?page=${page}&size=${size}`);
}

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById,
    getUserPage

};

export default UserRepository;