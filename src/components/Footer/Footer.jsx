import React from 'react'
import '../Footer/Footer.css'
export default function Footer() {
    return (
        <div className='container footer-movie '>
            <div className="row contact ">
                <div className="col-12 col-md-7 col-lg-3 contact-item">
                    <h1 className='contact-title'>Giới Thiệu</h1>
                    <ul>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>VỀ CHÚNG TÔI</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>THOẢ THUẬN SỬ DỤNG</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>QUY CHẾ HOẠT ĐỘNG</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>CHÍNH SÁCH BẢO MẬT</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-5 col-lg-3 contact-item">
                    <h1 className='contact-title'>Góc Điện Ảnh</h1>
                    <ul>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>THỂ LOẠI PHIM</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>BÌNH LUẬN PHIM</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>BLOG ĐIỆN ẢNH</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>PHIM HAY THÁNG</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-7 col-lg-3 contact-item">
                    <h1 className='contact-title'>Hỗ Trợ</h1>
                    <ul>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>GÓP Ý</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>SALE & SERVICES</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>RẠP /GIÁ VÉ</a></li>
                        <li ><a href="/" className='contact-link'><i className="fa-solid fa-chevron-right"></i>TUYỂN DỤNG</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-5 col-lg-2 contact-item ">
                    <h1 className='contact-title'>KẾT NỐI</h1>
                    <div className='item-icon'>
                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="/"><i className="fa-brands fa-youtube"></i></a>
                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                    </div>

                    <h1 className='contact-title mt-3'>DOWNLOAND APP</h1>
                    <div className='item-icon'>
                        <a href="/"><i className="fa-brands fa-apple"></i></a>
                        <a href="/"><i className="fa-brands fa-android"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pb-3">
                    <h1 className='text-center'>Copyright @1999-2022 by Refsnes Data. All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    )
}
