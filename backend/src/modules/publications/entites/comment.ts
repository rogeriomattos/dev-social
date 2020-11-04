class Comment {
    id: number;
    comment: string;
    user_id: number; 
    publication_id: number;
    created_date: string;

    constructor({id, user_id, created_date, publication_id, comment }:Comment){
        this.id = id;
        this.comment = comment;
        this.user_id = user_id;
        this.publication_id = publication_id;
        this.created_date = created_date;
    }
}

export default Comment;