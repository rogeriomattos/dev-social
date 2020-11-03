class Publication {
    id: number;
    created_date: string;
    description: string;
    user_id: number;

    constructor({ id, created_date, description, user_id }: Omit<Publication, ''>){
        this.id = id;
        this.created_date = created_date;
        this.description = description;
        this.user_id = user_id;
    }   
}

export default Publication;