import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicyLinks = () =>
    <>
        <Link to="/privacy" className="mr-4 text-xs text-white">
            <span>Privacy Policy</span>
        </Link>
        <Link to="/terms_of_service" className="mr-4 text-xs text-white">
            <span>Terms Of Service</span>
        </Link>
        <Link to="/about_us" className="mr-4 text-xs text-white">
            <span>About Us</span>
        </Link>
    </>

export default PrivacyPolicyLinks