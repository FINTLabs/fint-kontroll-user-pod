import React, {createContext, ReactNode, useState,} from "react";
import UserRepository from "../../repositories/UserRepository";
import {contextDefaultValues, IUser, IUserItem, IUserPage, UserContextState} from "./types";

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
    const [userType, setUserType] = useState<string>(contextDefaultValues.userType)
    const [currentPage, setCurrentPage] = useState<number>(contextDefaultValues.currentPage);
    const [size] = useState<number>(contextDefaultValues.size);
    const [searchString, setSearchString] = useState<string>("")

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
        UserRepository.getUserPage(currentPage, size, userType)
            .then(response => setPage(response.data))
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
        UserRepository.getUserByName(queryString, currentPage, size, userType)
            .then(response => setPage(response.data))
            .catch(err => console.error(err));
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
                searchValue,
                updateCurrentPage,
                getUserById,
                getUserPage,
                updateUserType,
                findUser
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;