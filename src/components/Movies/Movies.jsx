import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import '../Movies/movies.css'

import { movieService } from '../../services/MovieServices'


export default function Movies() {

    const { Meta } = Card;
    const [listMovies, setListMovies] = useState([])
    useEffect(() => {
        movieService
            .listMovie()
            .then((result) => {
                setListMovies(result.data.content);
                console.log(result.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    let renderMoviesTrue = () => {
        return listMovies.map((movies, index) => {
            if (movies.sapChieu === true) {
                return <Card
                    key={index}
                    className='col-12 col-md-4 col-lg-3 p-3'
                    hoverable
                    // style={{
                    //     width: 240,
                    // }}
                    cover={<img alt="example" src={movies.hinhAnh} style={{ minHeight: 300, maxHeight: 300 }} />}
                >
                    <Meta title={movies.tenPhim} description={movies.moTa} />
                </Card>
            }

        })
    }
    let renderMoviesFlase = () => {
        return listMovies.map((movies, index) => {
            if (movies.sapChieu === false) {
                return <Card
                    key={index}
                    className='col-12 col-md-4 col-lg-3 p-3'
                    hoverable
                    // style={{
                    //     width: 240,
                    // }}
                    cover={<img alt="example" src={movies.hinhAnh} style={{ minHeight: 300, maxHeight: 300 }} />}
                >
                    <Meta title={movies.tenPhim} description={movies.moTa} />
                </Card>
            }

        })
    }
    return (
        <div className='container'>
            <div className='menu-movie'>

                <button className='btn-movie activeBTn' >
                    Phim Đang Chiếu
                </button>
                <button className='btn-movie' >
                    Phim Sắp Chiếu
                </button>
            </div>
            <div className="container-movie">
                <div className="row">
                    {renderMoviesTrue()}
                    {renderMoviesFlase()}
                </div>
            
            </div>
        </div>
    )
}
