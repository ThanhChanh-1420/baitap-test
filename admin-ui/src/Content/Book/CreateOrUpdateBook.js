import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
class CreateOrUpdateBook extends Component {
    // componentDidMount = () => {
    //     this.props.background();
    // }

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

    saveBook = async (e) => {
        console.log(e);
        e.preventDefault();
        const res = await axios.post(
            `http://127.0.0.1:8000/api/add-book`,
            this.state
        );
        if (res.data.status === 200) {
            alert("Thêm sách thành công"); 

            this.setState({
                book_code: "",
                book_name: "",
                book_author: "",
                book_date: "",
                book_number: "",
                book_summary: "",
            });
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
                                <h3 className=''>Thêm Sách</h3>
                            </div>
                            <div className='dino__write__item py-4'>
                                <form action='' method='POST' onSubmit={(e) => this.saveBook(e)}>
                                    <div className='form-group'>
                                        <label className='form-label'>Mã sách <strong className='text-danger'>(*)</strong></label>
                                        <div className='row'>
                                            <div className='col-lg-1'><p className='p-add'><strong>MH-</strong></p></div>
                                            <div className='col-lg-11'><p><input className='form-control' required placeholder='Ví dụ: 777' type="text" name="book_code" onChange={(e) => this.handleInput(e)} value={this.state.book_code}></input></p></div>
                                        </div>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>Tên sách</label>
                                        <input className='form-control' placeholder='Ví dụ: Truyện Kiều' required type="text" name="book_name" onChange={(e) => this.handleInput(e)} value={this.state.book_name}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>Tên tác giả</label>
                                        <input className='form-control' placeholder='Nguyễn Trãi ....' required type="text" name="book_author" onChange={(e) => this.handleInput(e)} value={this.state.book_author}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>Ngày xuất bản</label>
                                        <input className='form-control' type="date" name="book_date" onChange={(e) => this.handleInput(e)} value={this.state.book_date}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>Số trang</label>
                                        <input className='form-control' type="number" name="book_number" onChange={(e) => this.handleInput(e)} value={this.state.book_number}></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='form-label'>Tóm tắt</label>
                                        <textarea className='form-control' placeholder='Truyện Kiều xoay quanh cuộc đời và số phận của...' type="text" name="book_summary" onChange={(e) => this.handleInput(e)} value={this.state.book_summary}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Lưu</button>
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

export default CreateOrUpdateBook;