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

    /*const userList: any[] = [
        {user: user, setter: setUser},
    ]
*/
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
        //console.log("getAllUsers()");
        UserRepository.getUsers()
            .then(response => setUsers(response.data))
            .catch((err) => console.error(err))
    }

    const getUserPage = (page: number, size: number = 10) => {
        UserRepository.getUserPage(page, size)
            .then(response => setPage(response.data))
            .catch((err) => console.error(err))
    }

    return (
        <UsersContext.Provider
            value={{
                page,
                user,
                users,
                getAllUsers,
                getUserById,
                getUserPage,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;