import React from 'react';
import Title from '../Title';

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="mt-5" action="https://formspree.io/rtussey.me@gmail.com"
  method="POST">
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control" placeholder="rich quant"/>
                        </div>

                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="email@quant.com"/>
                        </div>

                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="important!!!!"/>
                        </div>
                        {/* message */}
                        <textarea name="message" row="10" className="form-control" placeholder="hello there, buddy"></textarea>
                        <div className="form-group mt-3">
                        <input className="form-control bg-primary text-white" type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
