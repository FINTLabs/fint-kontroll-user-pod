import React, {createContext, ReactNode, useState,} from "react";
import UserRepository from "../../repositories/UserRepository";
import {contextDefaultValues, IUserItem, IUserPage, UserContextState} from "./types";

export const UsersContext = createContext<UserContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const UsersProvider = ({children}: Props) => {
    const [user, setUser] = useState<IUserItem | null>(contextDefaultValues.user);
    const [users, setUsers] = useState<IUserItem[]>(contextDefaultValues.users);
    const [page, setPage] = useState<IUserPage | null>(contextDefaultValues.page);
    const [userType, setUserType] = useState<string>(contextDefaultValues.userType)
    const [currentPage, setCurrentPage] = useState<number>(contextDefaultValues.currentPage);
    const [size, setSize] = useState<number>(contextDefaultValues.size);

    const getUserById = (id: string) => {
        UserRepository.getUserByResourceId(id)
            .then(response => {
                    setUser(response.data)
                }
            )
            .catch((err) => {
                console.error(err);
            })
    }

    const getAllUsers = () => {
        UserRepository.getUsers()
            .then(response => setUsers(response.data))
            .catch((err) => console.error(err))
    }

    const getUserPage = (page: number, size: number, userType: string) => {
        UserRepository.getUserPage(page, size, userType)
            .then(response => setPage(response.data))
            .catch((err) => console.error(err))
    }

    const updateUserType = (userType: string) => {
        setUserType(userType)
    }

    const updateCurrentPage = (currentPage: number) => {
        setCurrentPage(currentPage)
    }

    return (
        <UsersContext.Provider
            value={{
                userType,
                page,
                user,
                users,
                currentPage,
                size,
                updateCurrentPage,
                getAllUsers,
                getUserById,
                getUserPage,
                updateUserType
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;