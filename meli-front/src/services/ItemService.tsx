
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import URLS from "../config/urls"
import { ItemData } from "../types/ItemTypes";

const axiosClient = axios.create({ baseURL: URLS.bff.base() })

export const useItemByQuery = (query: string) => {
    const [data, setData] = useState<ItemData>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response: AxiosResponse = await axiosClient.get(URLS.bff.items(), { params: { q: query } })
                setData(response.data)
                setLoading(false)
            } catch (error) {
                setError("Error obteniendo datos")
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    return { data, loading, error}

}

export const useItemByID = (id: string): any => {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response: AxiosResponse = await axiosClient.get(`${URLS.bff.item()}/${id}`)
                setData(response.data)
                setLoading(false)
            } catch (error) {
                setError("Error obteniendo datos")
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    return { data, loading, error}
}

