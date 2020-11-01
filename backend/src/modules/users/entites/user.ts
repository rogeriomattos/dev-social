class User {
    id: number;
    name: string;
    email: string;
    password?: string;
    bio?: string;
    profilePhoto?: string;

    constructor({ id, name, email, password, bio, profilePhoto }: Omit<User, ''>){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.profilePhoto = profilePhoto;
    }   
}

export default User;