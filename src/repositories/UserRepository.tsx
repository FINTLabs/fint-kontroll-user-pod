import axios from 'axios';
import {IUser, IUserItem, IUserPage} from "../context/userContext/types";

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');
}

const getUserById = (id: string) => axios.get<IUser>(`/api/users/${id}`);

const getUserPage = (page: number, size: number, userType: string) => {
    if (userType === "all") {
        return axios.get<IUserPage>(`/api/users?page=${page}&size=${size}`);
    }
    return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}'&page=${page}&size=${size}`);
}

const getUserByName = (firstName: string, page: number, size: number, userType: string) => {
    const sanitizedQueryString = firstName.trim();
    if (sanitizedQueryString.length === 0) {
        return getUserPage(page, size, userType);
    }
    if (userType === "all") {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${sanitizedQueryString}'&page=${page}&size=${size}`);
    }
    return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}' and firstName startswith '${sanitizedQueryString}'&page=${page}&size=${size}`);
}

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById,
    getUserPage,
    getUserByName


};

export default UserRepository;