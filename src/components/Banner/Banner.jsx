import React, { useEffect, useState } from 'react'
import '../Banner/banner.css'
import MovieBooking from '../Movie-Booking/Movie-Booking'
import { movieService } from '../../services/MovieServices'


export default function Banner() {

    const [listBanner, setListBanner] = useState([])
    useEffect(() => {
        movieService
            .imgBanner()
            .then((result) => {
                setListBanner(result.data.content)
            })
            .catch((error) => { console.log(error) })
    }, [])


    let renderBanner = () => {
        return listBanner.map((imgBanner) => {
            return <div key={imgBanner.maPhim} className="carousel-item active img-banner banner " data-bs-interval={3000}>
                <img src={imgBanner.hinhAnh} className="w-100" alt={imgBanner.maPhim} />
            </div>
        })
    }
    return (
        <div className='container-banner'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
                <div className="carousel-inner">
                    {renderBanner()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
          <MovieBooking/>
        </div>


    )
}