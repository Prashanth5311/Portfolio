import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
export const Contact = ()=>{
    
        const fromIntialDetails ={
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            message:''
        }

        const[formDetails,setFormDetails]=useState(fromIntialDetails);
        const[buttonText,setButtonText]=useState('send');
        const [status,setStatus]=useState({});

        const onFormUpdate =(category,value)=>{
            setFormDetails({
                ...formDetails,
                [category]:value
            })
        }

        const handleSubmit= async(e)=>{
            e.preventDefult();
            setButtonText('sending.....')
            let response = await fetch("http://localhost:5000/contact",{
                method: "POST",
                header:{
                    "Contect-Type":"Application/json;charset=utf-8",
                },
                body:JSON.stringify(formDetails),
            });
            setButtonText("send");
            let result = response.json();
            if(result.code === 200){
                setStatus({ success:true,message:'Message Sent Successfully'});
            }else{
                setStatus({ sucess:false, message:'something Went Wrong Please Try Again '})
            }

        }
        return(
                <section className="contact" id="connect">
                    <Container>
                        <Row className="align-item-center">
                            <Col md={6}>
                                <img src={contactImg} alt="contact"/>
                            </Col>
                            <Col md={6}>
                                <h2>Get In Touch</h2>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm={6} className="px-1">
                                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)}/>
                                        </Col>

                                        <Col sm={6} className="px-1">
                                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)}/>
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email',e.target.value)}/>
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone',e.target.value)}/>
                                        </Col>
                                        <Col>
                                            <textarea row="6" value={formDetails.message} placeholder="message" onChange={(e) => onFormUpdate('message',e.target.value)}/>
                                            <button type="submit"> <span>{buttonText}</span></button>
                                        </Col>
                                        {
                                            status.message &&
                                            <Col>
                                                <p className={status.success ===false ? "danger" : "success"} >{status.message}</p>
                                            </Col>
                                        }
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section>
        )
    
}