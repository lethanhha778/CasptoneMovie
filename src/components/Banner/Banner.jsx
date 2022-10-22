import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Banner/banner.css'
import { TOKEN, URL_API } from '../../util/setting'
import MovieBooking from '../Movie-Booking/Movie-Booking'

export default function Banner() {

    const [listBanner, setListBanner] = useState([])
    useEffect(() => {
        getAPIBanner()
    }, [])

    let getAPIBanner = () => {
        let promise = axios({
            method: 'get',
            url: `${URL_API}/QuanLyPhim/LayDanhSachBanner`,
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
        promise.then((result) => {
            setListBanner(result.data.content)
        })
        promise.catch((error) => { console.log(error) })
    }


    let renderBanner = () => {
        return listBanner.map((imgBanner) => {
            return <div key={imgBanner.maPhim} className="carousel-item active img-banner banner " data-bs-interval={3000}>
                <img src={imgBanner.hinhAnh} className="w-100" alt={imgBanner.maPhim} />
            </div>
        })
    }
    return (
        <div className='container-banner'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5" data-bs-ride="carousel">
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
