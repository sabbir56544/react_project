import React from 'react'
import { useParams } from 'react-router-dom';
import Country from './Country';

const CountryDetail = () => {
    const { name } = useParams();
    console.log(name);
    const data = Country.find((val) => val.name == name);
    console.log("AAA" + data);
    return (
        <>
            <section className="why-choose mt-5">
                <div className="container mt-5">
                    <div className="row mt-5">

                        <div className="col-lg-4 col-sm-6">
                            <div className="why-box">
                                <div className="why-content">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6">
                            <div className="choose-box">
                                <div className="choose-content">
                                    <div className="choose-icon">
                                        <img src="" alt="" />
                                    </div>
                                    <h3 className="title">IH</h3>
                                    <div className="text">
                                        ji
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CountryDetail
