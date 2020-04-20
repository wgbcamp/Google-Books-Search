import React, {Component} from "react";
import ButtonAppBar from "./ButtonAppBar";
import api from "../utils/api";
import Results from "../components/Results";

class mainpage extends Component {
    state = {
        search: "",
        books: []
    };

    componentDidMount() {

    }

    handleInputChange = event =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
        });


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
                        link: e.saleInfo.buyLink
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

                />
                
            {[...this.state.books].map((e) =>
                <Results 
                    image={e.image}
                    title={e.title}
                    authors={e.authors}
                    description={e.description}
                    link={e.link}

                />
                )}
            </div>

        )
    }
}



export default mainpage;