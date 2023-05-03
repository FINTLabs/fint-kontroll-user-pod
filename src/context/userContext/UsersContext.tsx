import React, {createContext, ReactNode, useEffect, useState,} from "react";
import UserRepository from "../../repositories/UserRepository";
import {
    contextDefaultValues,
    IOrgUnit,
    IOrgUnitPage,
    IUnitTree,
    IUser,
    IUserItem,
    IUserPage,
    UserContextState
} from "./types";
//import UnitRepository from "../../repositories/UnitRepository";

export const UsersContext = createContext<UserContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const UsersProvider = ({children}: Props) => {
    const [basePath, setBasePath] = useState<string>("");
    const [userSimple] = useState<IUserItem | null>(contextDefaultValues.userSimple);
    const [userDetailed, setUserDetailed] = useState<IUser | null>(contextDefaultValues.userDetailed);
    const [users] = useState<IUserItem[]>(contextDefaultValues.users);
    const [page, setPage] = useState<IUserPage | null>(contextDefaultValues.page);
    const [orgUnitPage, setOrgUnitPage] = useState<IOrgUnitPage | null>(contextDefaultValues.orgUnitPage);
    const [userType, setUserType] = useState<string>(contextDefaultValues.userType);
    const [currentPage, setCurrentPage] = useState<number>(contextDefaultValues.currentPage);
    const [size, setSize] = useState<number>(contextDefaultValues.size);
    const [searchString, setSearchString] = useState<string>("");
    const [orgUnits, setOrgUnits] = useState<IOrgUnit[]>(contextDefaultValues.orgUnits);
    const [orgName, setOrgName] = useState<string>(contextDefaultValues.orgName);
    const [organisationUnitId, setOrganisationUnitId] = useState<number>(contextDefaultValues.organisationUnitId);
    const [unitTree, setUnitTree] = useState<IUnitTree | null>(contextDefaultValues.unitTree);
    const [selected, setSelected] = useState<number[]>(contextDefaultValues.selected);

    /*const getBasePath = () => {
        UserRepository.getBaseUrl()
            .then(response => {
                    setBasePath(response.data)
                }
            )
            .catch((err) => {
                console.error(err);
            })
    }*/

    const getBasePath = () => {
        UserRepository.getBaseUrl()
            .then(value => {
                    console.log('Dette er basepath: ' + value.data.basePath)
                }
            )
            .catch((err) => {
                console.error(err);
            })
    }

    const getUserById = (id: string) => {
        UserRepository.getUserByResourceId(id)
            .then(response => {
                    setUserDetailed(response.data)
                }
            )
            .catch((err) => {
                console.error(err);
            })
    }

    const getUserPage = () => {
        UserRepository.getUserPage(currentPage, size, userType, selected, searchString)
            .then(response => setPage(response.data))
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        if (searchString.length >= 3 || searchString.length === 0) {
            getUserPage();
        }
    }, [currentPage, size, userType, organisationUnitId, searchString, selected]);

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

    const getUnitTree = () => {
        console.log(`Getting a the units stree:`);
        UserRepository.getUnitTree()
            .then(response => {
                console.log("Returned tree data: ", response.data);
                setUnitTree(response.data);
            })
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        getUnitTree();
    }, []);

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
                selected,
                searchValue,
                //setSearchValue,
                updateCurrentPage,
                getUserById,
                getUserPage,
                updateUserType,
                getOrgName,
                updateOrganisationUnitId,
                setSelected,
                getBasePath,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;