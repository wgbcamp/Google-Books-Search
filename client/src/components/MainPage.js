import React, {Component} from "react";
import ButtonAppBar from "./ButtonAppBar";
import Results from "../components/Results";
import api from "../utils/api";

class mainpage extends React.Component {
    state = {
        search: "",
        books: []
    };

    componentDidMount() {

    }


    saveBook = (props) => {
        console.log(props)
        api.saveBook(props)
            .then((res) => {
                
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
                        link: e.volumeInfo.infoLink
                    }))
                })

            })

    }

    render() {
        return (
            <div>
                <ButtonAppBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    onSubmit={this.onSubmit}
                />
                
            {[...this.state.books].map((e) =>
                <Results 
                    image={e.image}
                    title={e.title}
                    authors={e.authors}
                    description={e.description}
                    link={e.link}
                    saveBook={this.saveBook}

                />
                )}

            </div>

        )
    }
}



export default mainpage;