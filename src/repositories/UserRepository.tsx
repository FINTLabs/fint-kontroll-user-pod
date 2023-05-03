import axios from 'axios';
import {IUnitTree, IUser, IUserItem, IUserPage} from "../context/userContext/types";

const getBaseUrl = () => {
    return axios.get('api/layout/configuration');
}

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');
}

const getUserById = (id: string) => axios.get<IUser>(`/api/users/${id}`);

const getUserPage = (page: number, size: number, userType: string, organisationUnitId: number[], searchString: string) => {
    const baseUrl = '/api/users/';
    let queryParams = [];

    const sanitizedQueryString = searchString.trim();
    if (sanitizedQueryString.length !== 0) {
        queryParams.push(`search=${searchString}`);
    }

    if (userType) {
        queryParams.push(`userType=${userType}`);
    }

    if (organisationUnitId && organisationUnitId.length > 0) {
        queryParams.push(`orgUnits=${organisationUnitId}`);
    }

    if (page) {
        queryParams.push(`page=${page}`);
    }

    if (size) {
        queryParams.push(`size=${size}`);
    }

    const url = `${baseUrl}${queryParams.length > 0 ? '?' : ''}${queryParams.join('&')}`;

    return axios.get<IUserPage>(url);
}

const getUnitTree = () => {
    return axios.get<IUnitTree>('/api/orgunits')
}

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById,
    getUserPage,
    getUnitTree,
    getBaseUrl,
};

export default UserRepository;