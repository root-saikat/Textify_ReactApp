import React from 'react'
import propTypes from 'prop-types'

export default function Contactus(props) {
    let myCStyle = {
        color: props.mode ==='light'?'black':'white'
    }
    return (
        <div className='container my-5'>
            <p style={myCStyle}>Lorem ipsum dolor sit amet. Cum illum nesciunt et eveniet dolores vel unde galisum aut possimus neque At ratione debitis sed illo sapiente est enim nemo. A harum eius non praesentium quae vel beatae ducimus ut minima incidunt sit nulla debitis non ipsam rerum et dolorem voluptatem. Nam dolores voluptas aut saepe voluptate sed error sint non suscipit magni ea perferendis eligendi est galisum incidunt et fugiat dolor!</p>
            <div className="row mt-5">
                    <div className="col-lg-6 col-12">
                        <h5 style={myCStyle}>WRITE TO US:</h5>
                        <form>
                            <div className="row">
                                <div className="mb-3 col-6">
                                    <input type="text" className="form-control" required="" placeholder="Your Name*" id="exampleInputName"/>
                                </div>
                                <div className="mb-3 col-6">
                                    <input type="email" className="form-control" placeholder="Your Email*" required="" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <input type="number" className="form-control" placeholder="Your Phone No*" required=""/>
                                </div>
                                <div className="col-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Reason to Contact*" required=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea placeholder="Type Your Message*" className="form-control" required="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}
