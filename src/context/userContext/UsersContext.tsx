import React, {createContext, ReactNode, useEffect, useState,} from "react";
import UserRepository from "../../repositories/UserRepository";
import {
    contextDefaultValues,
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
};

const UsersProvider = ({children}: Props) => {
    const [basePath, setBasePath] = useState<string>(contextDefaultValues.basePath);
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
    const [organisationUnitId, setOrganisationUnitId] = useState<number>(contextDefaultValues.organisationUnitId);
    const [unitTree, setUnitTree] = useState<IUnitTree | null>(contextDefaultValues.unitTree);
    const [selected, setSelected] = useState<string[]>(contextDefaultValues.selected);
    const [resources, setResources] = useState<IResource[] | null>(contextDefaultValues.resources);
    const [selectedOrgUnits, setSelectedOrgUnits] = useState<IUnitItem[]>(contextDefaultValues.selectedOrgUnits);

    useEffect(() => {
        const getBasePath = () => {
            UserRepository.getBaseUrl()
                .then(response => {
                        setBasePath(response.data.basePath)
                        console.log("basePath i context", response.data.basePath)
                    }
                )
                .catch((err) => {
                    console.error(err);
                })
        }
        getBasePath()
    }, [])

    const getUserById = (uri: string) => {
        console.log('Deet er heer', uri)
        if (basePath) {
            UserRepository.getUserById(uri)
                .then(response => {
                        setUserDetailed(response.data)
                    }
                )
                .catch((err) => {
                    console.error(err);
                })
        }
    }

    useEffect(() => {
        const getResources = () => {
            if (basePath) {
                UserRepository.getResources(basePath)
                    .then(response => setResources(response.data))
                    .catch((err) => console.error(err))
            }
        }
        getResources()
    }, [basePath]);


    useEffect(() => {
        const getUserPage = () => {
            if (basePath) {
                UserRepository.getUserPage(basePath, currentPage, size, userType, selected, searchString)
                    .then(response => setPage(response.data))
                    .catch((err) => console.error(err))
            }
        }

        if (searchString.length >= 3 || searchString.length === 0) {
            getUserPage();
        }
    }, [basePath, currentPage, size, userType, organisationUnitId, searchString, selected]);

    const updateUserType = (userType: string) => {
        setUserType(userType)
    }

    const updateOrganisationUnitId = (id: number) => {
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

    useEffect(() => {
        const getUnitTree = () => {
            console.log(`Getting a the units stree:`);
            if (basePath) {

                UserRepository.getUnitTree(basePath)
                    .then(response => {
                        console.log("Returned tree data: ", response.data);
                        setUnitTree(response.data);
                    })
                    .catch((err) => console.error(err))
            }
        }

        getUnitTree();
    }, [basePath]);

    return (
        <UsersContext.Provider
            value={{
                basePath,
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
                setSelectedOrgUnits
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;