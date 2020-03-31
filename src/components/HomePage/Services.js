import React, { Component } from 'react';
import styled from 'styled-components';
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                id:2,
                icon:<FaDolly/>,
                title:"free shipping",
                text:"We are the best in building mobile and desktop apps on both iOS and Android gadgets. Building supper-fast Web applications is just a breeze for us. We are also specialize in training all kinds of people to do these for themselves and companies."
            },
            {
                id:2,
                icon:<FaRedo/>,
                title:"30 days return policy",
                text:"We are the best in building mobile and desktop apps on both iOS and Android gadgets. Building supper-fast Web applications is just a breeze for us. We are also specialize in training all kinds of people to do these for themselves and companies."
            },
            {
                id:3,
                icon:<FaDollarSign/>,
                title:"secured payment",
                text:"We are the best in building mobile and desktop apps on both iOS and Android gadgets. Building supper-fast Web applications is just a breeze for us. We are also specialize in training all kinds of people to do these for themselves and companies."
            },
        ]
    };
    render() {
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map(item =>
                            {
                                return(
                                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                    <div className="service-icon">
                                        {item.icon}
                                    </div>
                                    <div className="mt-3 text-capitalize">{item.title}</div>
                                    
                                    <div className="mt-3">{item.text}</div>
                                </div>
                                
                                )
                            })}
                    </div>
                </div>
            </ServicesWrapper>
        );
    }
}


const ServicesWrapper =styled.section`
background:rgba(95,183,234,0.5);
.service-icon{
font-size:2.5rem;
color:var(--primaryColor);
}
p{
    color:var(--darkGrey);
}
`;