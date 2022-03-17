import "../style/footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>

        <div className="box-container">

            <div className="box">
                <h3>fruit <i className="fas fa-shopping-basket"></i></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, vel?</p>
                <div className="share">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>

            <div className="box">
                <h3>contact info</h3>
                <a href="#" className="links"><i className="fas fa-phone"></i> +123-456-7890</a>
                <a href="#" className="links"><i className="fas fa-phone"></i> +111-222-3333</a>
                <a href="#" className="links"><i className="fas fa-envelope"></i> amirbagjani@gmail.com</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i> +123-456-7890</a>
                <a href="#" className="links"><i className="fas fa-map-marker-alt"></i> tehran, iran - 6587985474</a>
            </div>

            <div className="box">
                <h3>quick links</h3>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>home</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>features</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>products</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>categories</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>review</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>blogs</a>
            </div>

            <div className="box">
                <h3>newsletter</h3>
                <p>subscribe for latest updates</p>
                <input type="email" placeholder='your email' className='email' />
                <input type="submit" value="subscribe" className='btn' />
                <img src="image/payment.png" alt="payment" className='payment' />
            </div>

        </div>

        <div className="credit"> created bt <span>amir bagjani</span> | all right reserved</div>

    </footer>
  )
}

export default Footer