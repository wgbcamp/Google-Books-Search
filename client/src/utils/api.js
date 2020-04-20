import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=flowers+for+algernon+inauthor:keyes";

export default {
    search: function(){
        return axios.get(BASEURL);
    }
}