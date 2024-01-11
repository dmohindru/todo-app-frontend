export interface Todo {
    id: string,
    title: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    deleted: boolean,
    done: boolean,
}

export interface TodoTitle {
    id: string,
    titleName: string,
    description: string,
    createdAt: Date
    todoList: Todo[]
}

export interface User {
    id: string,
    name: string,
    createdAt: Date,
    todoTitleList: TodoTitle[]
}