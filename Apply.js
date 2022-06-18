import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function TVshows() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <!-- row-1 --> */}
            <div className="container mt-4">
                <h4>TV shows we think you'll like</h4>
                <div className="card-group">
                    {/* <!-- card-1 --> */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-75, img-fluid, border border-dark shadow-lg" alt="" />
                        </div>
                    </div>
                    {/* <!-- card-2 --> */}
                    <div className="card y m-2 shadow-lg">
                        <div className="card-body text-center ">
                            <img src="" class="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* <!-- card-3 --> */}
                    <div className="card y m-2 shadow-lg">
                        <div className="card-body text-center">
                            <img src=""
                                className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* card-5 */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Row-2 */}
            <div className="container mt-4">
                <h4>Top rated TV shows on IMDB</h4>
                <div className="card-group">
                    {/* <!-- card-1 --> */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-75, img-fluid, border border-dark shadow-lg" alt="" />
                        </div>
                    </div>
                    {/* <!-- card-2 --> */}
                    <div className="card y m-2 shadow-lg">
                        <div className="card-body text-center ">
                            <img src="" class="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* <!-- card-3 --> */}
                    <div className="card y m-2 shadow-lg">
                        <div className="card-body text-center">
                            <img src=""
                                className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* card-5 */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Row-3 */}
            <div className="container mt-4">
                <h4>Popular hits</h4>
                <div className="card-group">
                    {/* <!-- card-1 --> */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-75, img-fluid, border border-dark shadow-lg" alt="" />
                        </div>
                    </div>
                    {/* <!-- card-2 --> */}
                    <div className="card y m-2 shadow-lg">
                        <div className="card-body text-center ">
                            <img src="" class="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* <!-- card-3 --> */}
                    <div className="card y m-2 shadow-lg">
                        <div className="card-body text-center">
                            <img src=""
                                className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                    {/* card-5 */}
                    <div className="card y m-2  shadow-lg">
                        <div className="card-body text-center m-3">

                            <img src="" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TVshows