export interface UserItem {
    id: number,
    avatar: string,
    first_name: string,
    last_name: string,
    email: string,
    emailVerified: boolean,
    dob: string,
    company: {
        name: string,
        department: string,
    },
    skills: Array<string>

}

export interface UserItems extends Array<UserItem>{}
