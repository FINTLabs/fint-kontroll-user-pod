import axios from 'axios';
import {IOrgUnitPage, IUnitTree, IUser, IUserItem, IUserPage} from "../context/userContext/types";

const getUsers = () => {
    return axios.get<IUserItem[]>('/api/users');
}

const getUserById = (id: string) => axios.get<IUser>(`/api/users/${id}`);

const getUserPage = (page: number, size: number, userType: string, organisationUnitId: string[], searchString: string) => {

    if (userType !== "all" && organisationUnitId.length === 0 && searchString.length === 0) {
        return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}'&page=${page}&size=${size}`);
    }
    if (organisationUnitId.length !== 0 && userType === "all" && searchString.length === 0) {
        return axios.get<IUserPage>(`/api/users?$filter=mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }
    if (userType !== "all" && organisationUnitId.length !== 0 && searchString.length === 0) {
        return axios.get<IUserPage>(`/api/users?$filter=userType eq '${userType}' and mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }

    if (userType !== "all" && organisationUnitId.length !== 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}' and userType eq '${userType}' and mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }

    if (userType === "all" && organisationUnitId.length !== 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}' and mainOrganisationUnitId eq '${organisationUnitId}'&page=${page}&size=${size}`);
    }

    if (userType !== "all" && organisationUnitId.length === 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}' and userType eq '${userType}'&page=${page}&size=${size}`);
    }
    if (userType === "all" && organisationUnitId.length === 0 && searchString.length > 0) {
        return axios.get<IUserPage>(`/api/users?$filter=firstName startswith '${searchString}'&page=${page}&size=${size}`);
    }

    return axios.get<IUserPage>(`/api/users?page=${page}&size=${size}`);
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