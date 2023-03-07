import axios from 'axios';
import {IOrgUnit, IOrgUnitPage, IUser, IUserItem, IUserPage} from "../context/userContext/types";

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');
}

const getUserById = (id: string) => axios.get<IUser>(`/api/users/${id}`);

const getUserPage = (page: number, size: number, userType: string, organisationUnitName: string) => {
    if (userType === "all") {
        return axios.get<IUserPage>(`/api/users?page=${page}&size=${size}`);
    }
    return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}'&organisationUnitName eq '${organisationUnitName}'&page=${page}&size=${size}`);
}

const getUserByName = (firstName: string, page: number, size: number, userType: string, organisationUnitName: string) => {
    const sanitizedQueryString = firstName.trim();
    if (sanitizedQueryString.length === 0) {
        return getUserPage(page, size, userType, organisationUnitName);
    }
    if (userType === "all") {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${sanitizedQueryString}'&page=${page}&size=${size}`);
    }
    return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}' and firstName startswith '${sanitizedQueryString}'&page=${page}&size=${size}`);
}

const getOrgUnits = () => {
    return axios.get<IOrgUnit[]>('/api/orgunits');
}

const getOrgUnitPage = (orgName: string, page: number, size: number) => {
    return axios.get<IOrgUnitPage>(`/api/orgunits?page=${page}&size=${size}`);
}

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById,
    getUserPage,
    getUserByName,
    getOrgUnits,
    getOrgUnitPage


};

export default UserRepository;