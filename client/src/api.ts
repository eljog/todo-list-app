import { ITodoApis, TodoItem } from "@todo-app/common";
import axios, { AxiosResponse } from "axios";

const endPoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-3001.app.github.dev/`

console.log(`URL: ${endPoint}`)

class TodoApiClient implements ITodoApis {
    async create(title: string): Promise<TodoItem> {
        const res = await axios.post<TodoItem, AxiosResponse<TodoItem>, { title: string }>(endPoint, { title });
        if (res.status == 200) {
            return res.data
        } else {
            throw res.data
        }
    }

    async fetchAll(): Promise<TodoItem[]> {
        const res = await axios.get<TodoItem[]>(endPoint);
        if (res.status == 200) {
            return res.data
        } else {
            throw res.data
        }
    }
}

const client: ITodoApis = new TodoApiClient()

export const getApiClient = (): ITodoApis => client;