import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
class UpdateBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book_code: "",
            book_name: "",
            book_author: "",
            book_date: "",
            book_number: "",
            book_summary: "",
        };
    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    async componentDidMount() {
        const stud_id = this.props.match.params.id;
        // console.log(stud_id);
        const res = await axios.get(
            `http://127.0.0.1:8000/api/get-book/${stud_id}`
        );
        // console.log(res.data.books.book_code);
        if (res.data.status === 200) {
            this.setState({
                book_code: res.data.books.book_code.slice(3,res.data.books.book_code.length),
                book_name: res.data.books.book_name,
                book_author: res.data.books.book_author,
                book_date: res.data.books.book_date,
                book_number: res.data.books.book_number,
                book_summary: res.data.books.book_summary,
            });
        }
    }

    updateBook = async (e) => {
        console.log(e);
        e.preventDefault();
        const stud_id = this.props.match.params.id;
        const res = await axios.put(
            `http://127.0.0.1:8000/api/update-book/${stud_id}`,
            this.state
        );
        if (res.data.status === 200) {

        }
    };
    render() {
        return (
            <div className='blog__board py-4'>
                <div className='row dino__blog__list'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <div className='mb-3 bg-white px-2 dino__blog__write'>
                            <div className='dino__write__item'>
                                <h3 className=''>Chi ti???t S??ch</h3>
                            </div>
                            <div className='dino__write__item py-4'>
                                <form action='' method='POST' onSubmit={(e) => this.updateBook(e)}>
                                    <div className='form-group'>
                                        <label className='form-label'>M?? s??ch <strong className='text-danger'>(*)</strong></label>
                                        <div className='row'>
                                            <div className='col-lg-1'><p className='p-add'><strong>MH-</strong></p></div>
                                            <div className='col-lg-11'><p><input className='form-control' disabled type="text" name="book_code" onChange={(e) => this.handleInput(e)} value={this.state.book_code}></input></p></div>
                                        </div>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>T??n s??ch</label>
                                        <input className='form-control' disabled type="text" name="book_name" onChange={(e) => this.handleInput(e)} value={this.state.book_name}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>T??n t??c gi???</label>
                                        <input className='form-control' disabled type="text" name="book_author" onChange={(e) => this.handleInput(e)} value={this.state.book_author}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>Ng??y xu???t b???n</label>
                                        <input className='form-control' type="date" name="book_date" disabled onChange={(e) => this.handleInput(e)} value={this.state.book_date}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>S??? trang</label>
                                        <input className='form-control' type="number" name="book_number" disabled onChange={(e) => this.handleInput(e)} value={this.state.book_number}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>T??m t???t</label>
                                        <textarea className='form-control' disabled type="text" name="book_summary" onChange={(e) => this.handleInput(e)} value={this.state.book_summary}></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        );
    }
}

export default UpdateBook;