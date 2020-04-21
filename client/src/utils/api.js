import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=flowers+for+algernon+inauthor:keyes";

export default {
    search: function(data){
        return axios.get(BASEURL + data);
    },
    readBooks: () => {
        
          return axios.get('/api/books')
      },
    
      saveBook: data => {
          return axios.post('/api/books', data)
      }
}