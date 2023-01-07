export interface IUserItem {
    firstName: string;
    lastName: string;
    userType: string;
    userName: string;
    mobilePhone: string;
    email: string;
    resourceId: string;
    id: number;
    identityProviderUserObjectId: string;
    managerRef: string;
}


export interface IUserPage {
    totalItems: number;
    totalPages: number;
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