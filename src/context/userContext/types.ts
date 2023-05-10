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

export interface IUnitItem {
    id: number;
    resourceId: string;
    name: string;
    organisationUnitId: number;
    parentRef: number;
    childrenRef: number[];
}

export interface IUnitTree {
    totalItems: number;
    totalPages: number | any;
    currentPage: number;
    orgUnits: IUnitItem[];
}

export type UserContextState = {
      basePath: string | undefined;
    userDetailed: IUser | null;
    userSimple: IUserItem | null;
    users: IUserItem[];
    page: IUserPage | null;
    currentPage: number;
    size: number;
    setSize: (size: number) => void;
    searchString: string;
    orgUnits: IOrgUnit[];
    orgName: string;
    orgUnitPage: IOrgUnitPage | null;
    searchValue: (searchString: string) => void;
    updateCurrentPage: (currentPage: number) => void;
    userType: string;
    getUserById: (id: string) => void;
    //getUserPage: () => void;
    updateUserType: (userType: string) => void;
    getOrgName: (orgName: string) => void;
    organisationUnitId: number;
    updateOrganisationUnitId: (id: number) => void;
    unitTree: IUnitTree | null;
    selected: number[];
    setSelected: (selected: number[]) => void;
    getBasePath: () => void;
};

export const contextDefaultValues: UserContextState = {
    basePath: undefined,
    userType: "",
    userDetailed: null,
    userSimple: null,
    users: [],
    page: null,
    currentPage: 0,
    size: 5,
    searchString: "",
    orgUnits: [],
    orgName: "",
    orgUnitPage: null,
    organisationUnitId: 0,
    searchValue: () => {
    },
    getUserById: () => {
    },
    // getUserPage: () => {
    // },
    updateUserType(): void {
    },
    updateCurrentPage(): void {
    },
    getOrgName(): void {
    },
    updateOrganisationUnitId(): void {
    },
    unitTree: null,
    selected: [],
    setSelected(selected: number[]): void {
    },
    setSize(size: number): void {
    },
    getBasePath: () => {
    },
};
