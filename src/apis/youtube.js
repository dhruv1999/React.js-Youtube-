import axios from "axios"

const KEY = "AIzaSyCSib3cb5YJGomZ2jYHnfJ4WRzX7PvOUgc"

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
}

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})
