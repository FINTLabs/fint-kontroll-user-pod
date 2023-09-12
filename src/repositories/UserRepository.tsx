import axios from 'axios';
import {IResource, IUnitTree, IUser, IUserPage} from "../context/userContext/types";


const getBaseUrl = () => {
    return axios.get('api/layout/configuration');
}

const getResources = (basePath: string) => {
    const url = `${basePath === '/' ? '' : basePath}/api/resources/`;
    return axios.get<IResource[]>(url);
}

// const getUsers = () => {
//     return axios.get<IUserItem[]>(`api/users`);
// }

const getUserById = (uri: string) => axios.get<IUser>(uri);

const getUserPage = (basePath: string, page: number, size: number, userType: string, organisationUnitId: number[], searchString: string) => {
    const baseUrl = `${basePath === '/' ? '' : basePath}/api/users/`;
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

const getUnitTree = (basePath: string) => {
    const url = `${basePath === '/' ? '' : basePath}/api/orgunits`;
    return axios.get<IUnitTree>(url);
}

const UserRepository = {
    //getUsers,
    getUserById,
    getUserPage,
    getUnitTree,
    getBaseUrl,
    getResources,
};

export default UserRepository;