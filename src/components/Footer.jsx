import React from 'react'

const Footer = ({darkmode, setDarkmode}) => {
  return (
    <footer className={`footer ${darkmode?"dark":"light"}`}>
    <div className="footer-content">
        <p>&copy; 2025 Your Company</p>
        <p>Privacy Policy | Terms of Service | Contact Us</p>
    </div>
</footer>
  )
}

export default Footer