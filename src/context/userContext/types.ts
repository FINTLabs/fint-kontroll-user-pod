export interface IUser {
    "id": string;
    "fullName": string;
    "userName": string;
    "organisationUnitName": string;
    "mobilePhone": string;
    "email": string;
}

export interface IUserItem {
    "id": number;
    "fullName": string;
    "organisationUnitName": string;
    "organisationUnitId": number;
    "userType": string;
}

export interface IUserPage {
    totalItems: number;
    totalPages: number | any;
    currentPage: number;
    users: IUserItem[];
}

export interface IOrgUnit {
    "id": number;
    "name": string;
    "organisationUnitId": number;
}

export interface IOrgUnitPage {
    orgUnits: IOrgUnit[];
    totalItems: number;
    totalPages: number | any;
    currentPage: number;
}

export type UserContextState = {
    userDetailed: IUser | null;
    userSimple: IUserItem | null;
    users: IUserItem[];
    page: IUserPage | null;
    currentPage: number;
    size: number;
    searchString: string;
    orgUnits: IOrgUnit[];
    orgName: string;
    orgUnitPage: IOrgUnitPage | null;
    searchValue: (searchString: string) => void;
    updateCurrentPage: (currentPage: number) => void;
    userType: string;
    getUserById: (id: string) => void;
    getUserPage: () => void;
    updateUserType: (userType: string) => void;
    //findUser: (queryString: string) => void;
   // getOrgUnit: () => void;
    getOrgName: (orgName: string) => void;
    getOrgUnitPage: () => void;
    organisationUnitId: number;
    updateOrganisationUnitId: (id: number) => void;
};

export const contextDefaultValues: UserContextState = {
    userType: "all",
    userDetailed: null,
    userSimple: null,
    users: [],
    page: null,
    currentPage: 0,
    size: 15,
    searchString: "",
    orgUnits: [],
    orgName: "",
    orgUnitPage: null,
    organisationUnitId: 0,
    searchValue: () => {
    },
    getUserById: () => {
    },
    getUserPage: () => {
    },
    updateUserType(): void {
    },
    updateCurrentPage(): void {
    },
    //findUser(): void {
    //},
    /*getOrgUnit: () => {
    },*/
    getOrgName(): void {
    },
    getOrgUnitPage: () => {
    },
    updateOrganisationUnitId(): void {}
};