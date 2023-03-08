import axios from 'axios';
import {IOrgUnitPage, IUser, IUserItem, IUserPage} from "../context/userContext/types";

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');
}

const getUserById = (id: string) => axios.get<IUser>(`/api/users/${id}`);

const getUserPage = (page: number, size: number, userType: string, organisationUnitId: number, searchString: string) => {

    if (userType !== "all" && organisationUnitId === 0 && searchString.length === 0) {
        return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}'&page=${page}&size=${size}`);
    }
    if (organisationUnitId !== 0 && userType === "all" && searchString.length === 0) {
        return axios.get<IUserPage>(`/api/users?$filter=mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }
    if (userType !== "all" && organisationUnitId !== 0 && searchString.length === 0) {
        return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}' and mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }

    if (userType !== "all" && organisationUnitId !== 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}' and userType eq '${userType}' and mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }

    if (userType === "all" && organisationUnitId !== 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}' and mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }

    if (userType !== "all" && organisationUnitId === 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}' and userType eq '${userType}'&page=${page}&size=${size}`);
    }
    if (userType === "all" && organisationUnitId === 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}'&page=${page}&size=${size}`);
    }

    return axios.get<IUserPage>(`/api/users?page=${page}&size=${size}`);
}

// const getUserByName = (firstName: string, page: number, size: number, userType: string, organisationUnitId: number) => {
//     const sanitizedQueryString = firstName.trim();
//     if (sanitizedQueryString.length === 0) {
//         return getUserPage(page, size, userType, organisationUnitId);
//     }
//     if (userType === "all") {
//         return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${sanitizedQueryString}'&page=${page}&size=${size}`);
//     }
//     return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}' and firstName startswith '${sanitizedQueryString}' and mainOrganisationUnitId eq '${organisationUnitId}&page=${page}&size=${size}`);
// }

const getOrgUnitPage = (organisationUnitName: string, page: number, size: number, userType: string) => {
    return axios.get<IOrgUnitPage>(`/api/orgunits?page=${page}&size=${size}`);
}

const getOrgUnitByFilter = (organisationUnitId: number, page: number, size: number) => {
    return axios.get<IOrgUnitPage>(`/api/orgunits?$filter=organisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
}

const UserRepository = {
    getUsers,
    getUserByResourceId: getUserById,
    getUserPage,
    //getUserByName,
    getOrgUnitPage,
    getOrgUnitByFilter


};

export default UserRepository;