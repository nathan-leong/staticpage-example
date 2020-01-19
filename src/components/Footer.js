import React from 'react'

const Footer = () => {
  return(
    <div className='footerWrapper'>
      <div className='footer'>
        <div className='footerContent'>
          <h3>Quicklinks</h3>
          <ul>
            <li><a href="/about-us" className='footerItems'>About Us</a></li>
            <li><a href="/relie-check/what-is-relie" className='footerItems'>Relie Check</a></li>
            <li><a href="/relie-check/what-is-relie" className='footerItems'>Using Relie Check</a></li>
            <li><a href="/legals" className='footerItems'>Legals</a></li>
            <li><a href="/relie-check/jobs" className='footerItems'>Jobs</a></li>
          </ul>
        </div>
        <div className='footerContent'>
        <h3>Help</h3>
        <ul>
            <li>1300 095 139</li>
            <li>Lvl 17, 456 Kent Street, Sydney, NSW 2000</li>
            <li>PO Box 128, Canterbury, VIC 3126</li>
            <li><a className="footerHelpLink" href="mailto:support@opicagroup.com.au?subject=Contact request from relie.com.au" target="_blank">support@opicagroup.com.au</a></li>
            <li><a className="footerHelpLink" href="https://www.linkedin.com/company/opicagroup/people/" target="_blank">linkedin.com/company/opicagroup</a></li>
          </ul>
        </div>
        <div className='footerContent' style={{'margin-top': '24px'}}>
          © 2019 Opica Group Pty Ltd
        </div>
      </div>
    </div>
  )
}

export default Footer