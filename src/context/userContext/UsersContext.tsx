import React, {createContext, ReactNode, useState,} from "react";
import UserRepository from "../../repositories/UserRepository";
import {contextDefaultValues, IUserItem, UserContextState} from "./types";


export const UsersContext = createContext<UserContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const UsersProvider = ({children}: Props) => {
    const [user, setUser] = useState<IUserItem | null>(contextDefaultValues.user);
    const [users, setUsers] = useState<IUserItem[]>(contextDefaultValues.users);

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

    return (
        <UsersContext.Provider
            value={{
                user,
                users,
                getAllUsers,
                getUserById
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
export default UsersProvider;