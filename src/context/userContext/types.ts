export interface IUserItem {
    "id": number;
    "fullName": string;
    "organisationUnitName": string;
    "userType": string;
}

export interface IUserPage {
    totalItems: number;
    totalPages: number | any;
    currentPage: number;
    users: IUserItem[];
}

export type UserContextState = {
    user: IUserItem | null;
    users: IUserItem[];
    page: IUserPage | null;
    getUserById: (id: string) => void;
    getAllUsers: () => void;
    getUserPage: (page: number, size: number) => void;

};

export const contextDefaultValues: UserContextState = {
    user: null,
    users: [],
    page: null,
    getAllUsers: () => {
    },
    getUserById: (id: string) => {
    },
    getUserPage: (page: number, size: number) => {
    },

};