import React, {createContext, ReactNode, useState,} from "react";
import UserRepository from "../../repositories/UserRepository";
import {contextDefaultValues, IOrgUnit, IOrgUnitPage, IUser, IUserItem, IUserPage, UserContextState} from "./types";

export const UsersContext = createContext<UserContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const UsersProvider = ({children}: Props) => {
    const [userSimple] = useState<IUserItem | null>(contextDefaultValues.userSimple);
    const [userDetailed, setUserDetailed] = useState<IUser | null>(contextDefaultValues.userDetailed);
    const [users] = useState<IUserItem[]>(contextDefaultValues.users);
    const [page, setPage] = useState<IUserPage | null>(contextDefaultValues.page);
    const [orgUnitPage, setOrgUnitPage] = useState<IOrgUnitPage | null>(contextDefaultValues.orgUnitPage);
    const [userType, setUserType] = useState<string>(contextDefaultValues.userType)
    const [currentPage, setCurrentPage] = useState<number>(contextDefaultValues.currentPage);
    const [size] = useState<number>(contextDefaultValues.size);
    const [searchString, setSearchString] = useState<string>("")
    const [orgUnits, setOrgUnits] = useState<IOrgUnit[]>(contextDefaultValues.orgUnits);
    const [orgName, setOrgName] = useState<string>(contextDefaultValues.orgName)

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
        UserRepository.getUserPage(currentPage, size, userType, orgName)
            .then(response => setPage(response.data))
            .catch((err) => console.error(err))
    }

    const getOrgUnitPage = () => {
        UserRepository.getOrgUnitPage(orgName, currentPage, size)
            .then(response => setOrgUnitPage(response.data))
            .catch((err) => console.error(err))
    }

    const updateUserType = (userType: string) => {
        setUserType(userType)
    }

    const updateCurrentPage = (currentPage: number) => {
        setCurrentPage(currentPage)
    }

    const searchValue = (searchString: string) => {
        setSearchString(searchString)
    }

    const findUser = (queryString: string) => {
        UserRepository.getUserByName(queryString, currentPage, size, userType, orgName)
            .then(response => setPage(response.data))
            .catch(err => console.error(err));
    }

    const getOrgUnit = () => {
        UserRepository.getOrgUnits()
            .then(response => setOrgUnits(response.data))
            .catch(err => console.error(err));
    }

    const getOrgName = (orgName: string) => {
        setOrgName(orgName)
    }

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
                searchString,
                orgUnits,
                orgName,
                orgUnitPage,
                searchValue,
                updateCurrentPage,
                getUserById,
                getUserPage,
                updateUserType,
                findUser,
                getOrgUnit,
                getOrgName,
                getOrgUnitPage,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;