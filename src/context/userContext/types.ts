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
    currentPage: number;
    updateCurrentPage: (currentPage: number) => void;
    userType: string;
    getUserById: (id: string) => void;
    getAllUsers: () => void;
    getUserPage: (page: number, size: number, userType: string) => void;
    updateUserType: (userType: string) => void;

};

export const contextDefaultValues: UserContextState = {
    userType: "all",
    user: null,
    users: [],
    page: null,
    currentPage: 0,
    getAllUsers: () => {
    },
    getUserById: (id: string) => {
    },
    getUserPage: (page: number, size: number, userType: string) => {
    },
    updateUserType(userType: string): void {
    },
    updateCurrentPage(currentPage: number): void {
    },

};