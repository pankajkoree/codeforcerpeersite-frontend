import axios from "axios"

const getUsers = async () => {
    const response = await axios.get('https://codeforcerpeersite-backend.onrender.com/user')
    if (!response) throw new Error("Failed to fetch users")
    return response.data
}

export default getUsers