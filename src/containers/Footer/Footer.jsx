import React from 'react'
import '../Footer/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer_bg">
                <div className="footer_container container grid">
                    <div>
                        <h1 className="footer_title">Loy</h1>
                        <span className="footer_subtitle">That's the end of my portfolio.</span>
                    </div>

                    <div className="footer_socials">
                        <a href="https://www.facebook.com/zenchai.tan.98/" className="footer_social" target="_blank" rel="noreferrer">
                            <i className="uil uil-facebook"></i>
                        </a>
                        
                        <a href="https://www.instagram.com/zeng_chai/" className="footer_social" target="_blank" rel="noreferrer">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
                <p className="footer_copy">&#169; Loy. All right reserved</p>
            </div>
        </footer>
  )
}

export default Footer
