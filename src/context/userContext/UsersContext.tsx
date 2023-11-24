import React, {createContext, ReactNode, useEffect, useState,} from "react";
import UserRepository from "../../repositories/UserRepository";
import {
    contextDefaultValues,
    IAssignmentPage,
    IOrgUnit,
    IOrgUnitPage,
    IResource,
    IUnitItem,
    IUnitTree,
    IUser,
    IUserItem,
    IUserPage,
    UserContextState
} from "./types";

export const UsersContext = createContext<UserContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
    basePath: string;
};

const UsersProvider = ({ children, basePath }: Props) => {

    const [userSimple] = useState<IUserItem | null>(contextDefaultValues.userSimple);
    const [userDetailed, setUserDetailed] = useState<IUser | null>(contextDefaultValues.userDetailed);
    const [users] = useState<IUserItem[]>(contextDefaultValues.users);
    const [page, setPage] = useState<IUserPage | null>(contextDefaultValues.page);
    const [orgUnitPage] = useState<IOrgUnitPage | null>(contextDefaultValues.orgUnitPage);
    const [userType, setUserType] = useState<string>(contextDefaultValues.userType);
    const [currentPage, setCurrentPage] = useState<number>(contextDefaultValues.currentPage);
    const [size, setSize] = useState<number>(contextDefaultValues.size);
    const [searchString, setSearchString] = useState<string>("");
    const [orgUnits] = useState<IOrgUnit[]>(contextDefaultValues.orgUnits);
    const [orgName, setOrgName] = useState<string>(contextDefaultValues.orgName);
    const [organisationUnitId, setOrganisationUnitId] = useState<string>(contextDefaultValues.organisationUnitId);
    const [unitTree, setUnitTree] = useState<IUnitTree | null>(contextDefaultValues.unitTree);
    const [selected, setSelected] = useState<string[]>(contextDefaultValues.selected);
    const [resources] = useState<IResource[]>(contextDefaultValues.resources);
    const [selectedOrgUnits, setSelectedOrgUnits] = useState<IUnitItem[]>(contextDefaultValues.selectedOrgUnits);
    const [assignmentPage, setAssignmentPage] = useState<IAssignmentPage | null>(contextDefaultValues.assignmentPage);
    const [currentAssignmentPage, setCurrentAssignmentPage] = useState<number>(contextDefaultValues.currentAssignmentPage);
    const [assignmentSize, setAssignmentSize] = useState<number>(contextDefaultValues.assignmentSize);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const getBasePath = () => {
    //         UserRepository.getBaseUrl()
    //             .then(response => {
    //                     setBasePath(response.data.basePath)
    //                     console.log("basePath i context", response.data.basePath)
    //                 }
    //             )
    //             .catch((err) => {
    //                 const errorObject = new Error((err as Error).message);
    //                 setError(errorObject.message);
    //                 console.error(err);
    //             })
    //     }
    //     getBasePath()
    // }, [])

    const getUserById = (id: string) => {
        console.log("get user by id in context with basepath ", basePath);
        if (basePath) {
            UserRepository.getUserById(id, basePath)
                .then(response => {
                        setUserDetailed(response.data)
                    }
                )
                .catch((err) => {
                    const errorObject = new Error((err as Error).message);
                    setError(errorObject.message);
                    console.error(err);
                })
        }
    }

    useEffect(() => {
        const getUserPage = () => {
            console.log("getting a user page", basePath)
            if (basePath) {
                UserRepository.getUserPage(basePath, currentPage, size, userType, selected, searchString)
                    .then(response => setPage(response.data))
                    .catch((err) => {
                        const errorObject = new Error((err as Error).message);
                        setError(errorObject.message);
                        console.error(err);
                    })
            }
        }

        if (searchString.length >= 3 || searchString.length === 0) {
            console.log("basepath in user context:", basePath);
            getUserPage();
        }
    }, [basePath, currentPage, size, userType, organisationUnitId, searchString, selected]);

    const getAssignmentPage = (id: number) => {
        if (basePath) {
            UserRepository.getAssignmentPage(basePath, id, currentPage, size)
                .then(response => setAssignmentPage(response.data))
                .catch((err) => {
                    const errorObject = new Error((err as Error).message);
                    setError(errorObject.message);
                    console.error(err);
                })
        }
    }

    const updateUserType = (userType: string) => {
        setUserType(userType)
    }

    const updateOrganisationUnitId = (id: string) => {
        setOrganisationUnitId(id);
    }

    const updateCurrentPage = (currentPage: number) => {
        setCurrentPage(currentPage)
    }

    const searchValue = (searchString: string) => {
        setSearchString(searchString)
    }

    const getOrgName = (orgName: string) => {
        setOrgName(orgName)
    }

    const updateCurrentAssignmentPage = (currentAssignmentPage: number) => {
        setCurrentAssignmentPage(currentAssignmentPage)
    }

    useEffect(() => {
        const getUnitTree = () => {
            console.log(`Getting a the units stree:`);
            if (basePath) {

                UserRepository.getUnitTree(basePath)
                    .then(response => {
                        console.log("Returned tree data: ", response.data);
                        setUnitTree(response.data);
                    })
                    .catch((err) => {
                        const errorObject = new Error((err as Error).message);
                        setError(errorObject.message);
                        console.error(err);
                    })
            }
        }

        getUnitTree();
    }, [basePath]);

    return (
        <UsersContext.Provider
            value={{
                userType,
                page,
                userSimple: userSimple,
                userDetailed,
                users,
                currentPage,
                size,
                setSize,
                searchString,
                orgUnits,
                orgName,
                orgUnitPage,
                organisationUnitId,
                unitTree,
                setUnitTree,
                selected,
                searchValue,
                //setSearchValue,
                updateCurrentPage,
                getUserById,
                //getUserPage,
                updateUserType,
                getOrgName,
                updateOrganisationUnitId,
                setSelected,
                resources,
                selectedOrgUnits,
                setSelectedOrgUnits,
                assignmentPage,
                getAssignmentPage,
                assignmentSize,
                setAssignmentSize,
                currentAssignmentPage,
                updateCurrentAssignmentPage,
                error
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;