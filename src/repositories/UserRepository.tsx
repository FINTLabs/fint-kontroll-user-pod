import axios from 'axios';
import {IAssignmentPage, IUnitTree, IUser, IUserPage} from "../context/userContext/types";


const getBaseUrl = () => {
    return axios.get('api/layout/configuration');
}

const getAssignmentPage = (basePath: string, id: number, assignmentPage: number, assignmentSize: number) => {
    const baseUrl = `${basePath === '/' ? '' : basePath}/api/assignments/user/${id}/resources`;
    let queryParams = [];

    if (assignmentSize) {
        queryParams.push(`size=${assignmentSize}`);
    }

    if (assignmentPage) {
        queryParams.push(`page=${assignmentPage}`);
    }

    const url = `${baseUrl}${queryParams.length > 0 ? '?' : ''}${queryParams.join('&')}`;

    return axios.get<IAssignmentPage>(url);
}

const getUserById = (uri: string) => axios.get<IUser>(uri);

const getUserPage = (basePath: string, page: number, size: number, userType: string, organisationUnitId: string[], searchString: string) => {
    const baseUrl = `${basePath === '/' ? '' : basePath}/api/users`;
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

export const getUnitTree = (basePath: string) => {
    const url = `${basePath === '/' ? '' : basePath}/api/orgunits`;
    return axios.get<IUnitTree>(url);
}

const UserRepository = {
    getUserById,
    getUserPage,
    getUnitTree,
    getBaseUrl,
    getAssignmentPage,
};

export default UserRepository;