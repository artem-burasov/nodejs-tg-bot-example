import { IUser } from '../interfaces/user.interface';

const users: Record<number, IUser> = {};

export const saveUser = (userId: number, userData: Partial<IUser>) => {
    if (!users[userId]) {
        users[userId] = { id: userId };
    }
    users[userId] = { ...users[userId], ...userData };
};

export const getUser = (userId: number): IUser | undefined => {
    return users[userId];
};
