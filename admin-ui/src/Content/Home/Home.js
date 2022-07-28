import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            loading: true,
        }
    }

    async componentDidMount() {
        const res = await axios.get("http://127.0.0.1:8000/api/book");
        //console.log(res);
        if (res.data.status === 200) {
            this.setState({
                books: res.data.books,
                loading: false,
            });
        }
    }

    deleteBook = async (e, id) => {
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-book/${id}`);
        if (res.data.status === 200) {
            thidClickedFunda.closest("tr").remove();
            alert("Xóa thành công");

        }
    }

    render() {
        var book_HTMLTABLE = "";
        if (this.state.loading) {
            book_HTMLTABLE = (
                <tr>
                    <td colSpan="7">
                        <h2>Loading...</h2>
                    </td>
                </tr>
            );
        } else {
            book_HTMLTABLE = this.state.books.map((item, i) => {
                return (
                    <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.book_code}</td>
                        <td>{item.book_name}</td>
                        <td>{item.book_author}</td>
                        <td>
                            <Link
                                to={`Detail-Book/${item.id}`} //dấu ``
                                className="btn btn-info btn-sm"
                            >
                                <i class="fas fa-book"></i>
                            </Link>
                        </td>
                        <td>
                            <Link
                                to={`Update-Book/${item.id}`} //dấu ``
                                className="btn btn-success btn-sm"
                            >
                                <i class="fas fa-edit"></i>
                            </Link>
                        </td>
                        <td>
                            <button
                                type="button"
                                onClick={(e) => this.deleteBook(e, item.id)}
                                className="btn btn-danger btn-sm"
                            >
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                );
            });
        }
        return (
            <div className='home__board py-4'>
                <div className="row">
                    <div className='col-lg-9'>
                        <p>Book Management</p>
                    </div>
                    <div className='col-lg-3'>
                        <Link
                            to={"Add-Book"}
                            className="btn btn-primary btn-sm float-end"
                        >
                            Thêm Sách
                        </Link>
                    </div>
                </div>
                <div className='row'>

                    <div className='row align-items-start'>
                        <div className='col-lg-2 dino__content'></div>
                        <div className='col-lg-8 dino__content'>
                            <h3><i className="fa-solid fa-list"></i> Danh sách Book</h3>
                            <div className='row align-items-end dino__list'>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">Mã sách</th>
                                            <th scope="col">Tên sách</th>
                                            <th scope="col">Tên tác giả</th>
                                            <th scope="col" colSpan="3">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {book_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-2 dino__content'></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;