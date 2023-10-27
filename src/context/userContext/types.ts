export interface IUser {
    "id": number;
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

export interface IUnitTree {
    totalItems: number;
    totalPages: number | any;
    currentPage: number;
    orgUnits: IUnitItem[];
}

export interface IUnitItem {
    id: number;
    name: string;
    organisationUnitId: string;
    parentRef: string;
    parentName: null | string;
    childrenRef: string[];
}

export interface IResource {
    id: number;
    resourceId: string;
    resourceName: string;
    resourceType: string;
}

export interface IAssignmentPage {
    totalItems: number;
    totalPages: number | any;
    currentPage: number;
    resources: IResource[];
}

export type UserContextState = {
    basePath: string;
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
    setUnitTree: (unitTree: IUnitTree) => void;
    selected: string[];
    setSelected: (selected: string[]) => void;
    resources: IResource[];
    selectedOrgUnits: IUnitItem[];
    setSelectedOrgUnits: (selectedOrgUnits: IUnitItem[]) => void;
    assignmentPage: IAssignmentPage | null;
    getAssignmentPage: (id: number) => void;
    currentAssignmentPage: number;
    assignmentSize: number;
    setAssignmentSize: (size: number) => void;
    updateCurrentAssignmentPage: (currentAssignmentPage: number) => void;
    error: string | null;
};

export const contextDefaultValues: UserContextState = {
    basePath: "/",
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
    setUnitTree(unitTree): void {
    },
    selected: [],
    setSelected(selected: string[]): void {
    },
    setSize(size: number): void {
    },
    resources: [],
    selectedOrgUnits: [],
    setSelectedOrgUnits(selectedOrgUnits: IUnitItem[]): void {
    },
    assignmentPage: null,
    getAssignmentPage: () => {
    },
    currentAssignmentPage: 0,
    assignmentSize: 5,
    setAssignmentSize(size: number): void {
    },
    updateCurrentAssignmentPage(): void {
    },
    error:null,
};
