import React, { useEffect, useState } from 'react'
import { movieService } from '../../services/MovieServices'

export default function MovieBooking() {
    var moment = require("moment");
    const [listMovies, setListMovies] = useState([])
    useEffect(() => {
        movieService
            .listMovie()
            .then((result) => {
                setListMovies(result.data.content);
                // console.log(result.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    let [codeMovie, setCodeMovie] = useState('');
    let handleInput = (e) => {
        let codeMovie = parseInt(e.target.value);
        console.log(codeMovie)
        setCodeMovie(codeMovie);
    };
    let [detailMovie, setDetailMovie] = useState([]);
    useEffect(() => {
        movieService
            .detailMovie(codeMovie)
            .then((result) => {
                console.log(result.data);
                console.log(result.data.content.maPhim)
                setDetailMovie(result.data.content.heThongRapChieu);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [codeMovie]);

    let [cinema, setCinema] = useState([]);
    let handleCinema = (e) => {
        let cinema = e.target.value
        console.log(cinema);
        setCinema(cinema)
    }
    let [dayMovie, setDayMovie] = useState([]);
    let handleDay = (e) => {
        let dayMovie = e.target.value
        setDayMovie(dayMovie)
    }
    let [hoursMovie, setHoursMovie] = useState([]);
    let handleHours = (e) => {
        let hoursMovie = e.target.value
        setHoursMovie(hoursMovie)
    }

    let renderMovies = () => {
        return listMovies.map((movies, index) => {
            return <option key={index} value={movies.maPhim}>{movies.tenPhim}</option>
        })
    }
    let renderCinema = () => {
 
        return detailMovie.map((rap) => {
            return rap.cumRapChieu?.map((theaterCluster, index) => {
                return (
                    <option value={theaterCluster.maCumRap} key={index}>
                        {theaterCluster.tenCumRap}
                    </option>
                );
            });
        });
    }
    let renderMovieDay = () => {
        return detailMovie.map((rap) => {
            // console.log(cinema.cumRapChieu[0].lichChieuPhim[0].ngayChieuGioChieu);
            return rap.cumRapChieu.map((cumRap) => {
                // console.log(cumRap);
                if (cinema === cumRap.maCumRap) {
                    return cumRap.lichChieuPhim.map((lich, index) => {
                        return <option value={lich.ngayChieuGioChieu} key={index}>
                            {moment(lich.ngayChieuGioChieu).format("DD-MM-yyyy")}
                        </option>
                    })
                }
            })
        })
    }
    let renderMovieHouse = () => {
        return detailMovie.map((rap) => {
            return rap.cumRapChieu.map((cumRap) => {
                // console.log(cumRap);
                if (cinema === cumRap.maCumRap) {
                    return cumRap.lichChieuPhim.map((lich, index) => {
                        return <option value={lich.ngayChieuGioChieu} key={index}>
                            {moment(lich.ngayChieuGioChieu).format("hh:mm A")}
                        </option>
                    })
                }
            })
        })
    }

    let renderBookTicket = () => {
        if (codeMovie) {
            return <button className='btn btn-danger' >Đặt Vé</button>
        }
        else {
            <button className='btn btn-danger' disabled={true}>Đặt Vé</button>
        }
    }

    return (
        <div className="container-oder">{console.log(1)}
            <div className='row'>
                <div className="form-group mt-2 col-md-2 col-xs-6 oder-select">
                    <select defaultValue={"DEFAULT"} className="form-control slect" id="" onChange={handleInput}>
                        <option value={"DEFAULT"}>Chọn Phim</option>
                        {renderMovies()}
                    </select>
                </div>
                <div className="form-group mt-2 col-md-2 col-xs-6 oder-select">
                    <select defaultValue={"DEFAULT"} className="form-control slect" id="" onChange={handleCinema}>
                        <option value={"DEFAULT"}>Chọn Rạp</option>
                        {renderCinema()}
                    </select>
                </div>
                <div className="form-group mt-2 col-md-2 col-xs-6 oder-select">
                    <select  defaultValue={"DEFAULT"} className="form-control slect" id="" onChange={handleDay}>
                        <option value={"DEFAULT"}>Chọn Ngày</option>
                        {renderMovieDay()}
                    </select>
                </div>
                <div className="form-group mt-2 col-md-2 col-xs-6 oder-select">
                    <select defaultValue={"DEFAULT"} className="form-control slect" id="" onChange={handleHours}>
                        <option value={"DEFAULT"}>Chọn Giờ</option>
                        {renderMovieHouse()}
                    </select>
                </div>
                <div className="form-group mt-2 col-md-4 col-sm-12 ">
                    {renderBookTicket()}
                </div>
            </div>
        </div>
    )
}
