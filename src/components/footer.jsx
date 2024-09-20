

const currentDate = new Date().getFullYear();
function Footer(){
    return(
        <div className="footer">
                <p>Copyright ⓒ  {currentDate}</p>
        </div>
    );
}

export default Footer;