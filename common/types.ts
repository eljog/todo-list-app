export interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodoApis {
    create(title: string): Promise<TodoItem>;
    fetchAll(): Promise<TodoItem[]>;
}