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

export type UserContextState = {
    user: IUserItem | null;
    users: IUserItem[];
    getUserById: (id: string) => void;
    getAllUsers: () => void;

};

export const contextDefaultValues: UserContextState = {
    user: null,
    users: [],
    getAllUsers: () => {
    },
    getUserById: (id: string) => {
    }

};