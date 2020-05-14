import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicyLinks = () =>
    <>
        <Link to="/privacy" className="info">
            <span>Privacy Policy</span>
        </Link>
        <Link to="/terms_of_service" className="info">
            <span>Terms Of Service</span>
        </Link>
        <Link to="/about_us" className="info">
            <span>About Us</span>
        </Link>
    </>

export default PrivacyPolicyLinks