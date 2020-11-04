class Like {
    user_id: number; 
    publication_id: number;
    created_date: string;

    constructor({ user_id, created_date, publication_id }:Like){
        this.user_id = user_id;
        this.publication_id = publication_id;
        this.created_date = created_date;
    }
}

export default Like;