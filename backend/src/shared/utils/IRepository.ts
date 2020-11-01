export interface IRepository<T> {
    create: (data: Omit<T, 'id'>) => Promise<T>;
    update: (data: T) => Promise<T>;
    delete: (id:number) => Promise<boolean>;
    listAll: () => Promise<T[]>;
    find: (id: number) => Promise<T>;
}