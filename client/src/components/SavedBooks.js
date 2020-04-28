import React, {Component} from "react";
import ButtonAppBar from "./ButtonAppBar";
import SavedResults from "../components/SavedResults";
import api from "../utils/api";

class mainpage extends React.Component {
    state = {
        search: "",
        books: []
    };

    componentDidMount() {
        
        api.readBooks()
            .then((res)=>{
                console.log(res)
                this.setState({
                    books: res.data
                })
            })
    }

    handleInputChange = event =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
        });
    }


    onSubmit = () =>{

        const data = this.state.search;
        api.search(data)
            .then(res =>{
                console.log(res.data.items)
                this.setState({
                    books: res.data.items.map((e)=>({
                        title: e.volumeInfo.title,
                        authors: e.volumeInfo.authors,
                        description: e.volumeInfo.description,
                        image: ((e.volumeInfo.imageLinks) ? e.volumeInfo.imageLinks.thumbnail : undefined),
                        link: e.volumeInfo.infoLink,
                        id: e._id
                    }))
                })

            })

    }

    deleteBook = (id, event) =>{
        event.preventDefault();

        var thingToDelete = {
            thingID: id
        }
        console.log(id)
        api.deleteBook(thingToDelete)
        .then(()=>{
            window.location.reload();    
        })
    };

    render() {
        return (
            <div>
                <ButtonAppBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    onSubmit={this.onSubmit}
                />
                
            {[...this.state.books].map((e) =>
                <SavedResults 
                    image={e.image}
                    title={e.title}
                    authors={e.authors}
                    description={e.description}
                    link={e.link}
                    id={e._id}
                    deleteBook={this.deleteBook}
                />
                )}

            </div>

            

        )
    }
}



export default mainpage;