"use server"

export async function FetchUser() {
    const res = await fetch('https://dummyjson.com/users')
    const users = await res.json()
    return users
}