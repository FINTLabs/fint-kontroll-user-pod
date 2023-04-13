import axios from 'axios';
import {IOrgUnitPage, IUnitTree, IUser, IUserItem, IUserPage} from "../context/userContext/types";

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

const getOrgUnitForList = (organisationUnitName: string, page: number, size: number, userType: string) => {
    return axios.get<IOrgUnitPage>(`/api/orgunits?page=${page}&size=1000`);
}

const getOrgUnitByFilter = (organisationUnitId: number, page: number, size: number) => {
    return axios.get<IOrgUnitPage>(`/api/orgunits?$filter=organisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
}

const getUnitTree = () => {
    return axios.get<IUnitTree>('/api/orgunits')
}

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById,
    getUserPage,
    getOrgUnitByFilter,
    getOrgUnitForList,
    getUnitTree,
};

export default UserRepository;