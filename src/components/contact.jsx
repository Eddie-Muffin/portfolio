

function Contact() {
    return (
        <div className="contact_main">
            <h5 className="contact_h5">Want to get in touch?</h5>
            <h1 className="contact_h1">Contact me</h1>

            <div className="contact">
                <div className="mail">
                    <button><a href="#">Get In Touch<i class="fa fa-envelope-o" aria-hidden="true"></i></a></button>
                </div>
                <div className="btns">
                    <button className="btn1" ><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></button>
                    <button className="btn"><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>0541029205</a></button>
                </div>
            </div>
        </div>
    );
}

export default Contact;