import React, {useState} from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Tile from '../components/Tile';
import tileImage from '../images/logo.svg';
import exampleImg from '../images/microsite-screenshot.png';
import insights from '../images/insights.png'

import '../App.css'

function HomePage() {
  const [getStartedClicked, setGetStartedClicked] = useState(false)
  return (
    <Layout>
      <div className='darlingHarbour'>
        <Banner style={{display: 'flex', 'flex-direction':'column', 'z-index': 0, position:'relative'}}>
          <h1 className='heading'>Verify applicants’ expenses. Quickly and accurately.</h1>
          <h2 className='subHeading'>Relie Check is the only true responsible lending tool in the market. 
          <a href='/about-us' style={{color:'white'}}>Find out more</a></h2>
          <h3 style={{'margin-left': '40px'}}>Disclaimer: This website is a duplicate.</h3>
          <div className='shrinkHide exampleLogin'>
            <div className='exampleImageWrapper'>
              <img className='exampleImage' src={exampleImg}/>
            </div>
            <div className='loginContainer'>
              <h3>Get started with Relie Check</h3>
              <button onClick={() => window.open('#', "_blank")} className="signupButton">Sign up</button>
            </div>
          </div>
          <div className='expandHide loginSignupContainer'>
            <button onClick={() => window.open('#', "_blank")} className="loginButton">Login</button>
            <button onClick={() => window.open('#', "_blank")} className="signupButton">Sign up</button>
          </div>
        </Banner>
      </div>
      <Banner color='white'>
        <Tile>
          <img src={tileImage}/>
          <h3>Responsible Lending</h3>
          <p>Know what your client spent in the last year</p>
          <p>Automated analysis to do in seconds what would take hours</p>
          <p>Document it all to protect yourself</p>
        </Tile>
        <Tile>
          <img src={tileImage}/>
          <h3>INSIGHTS</h3>
          <p>There is a lot of information in your client’s transaction data</p>
          <p>Learn it all in seconds</p>
          <p>Find new opportunities to help</p>
          <p>Increase your value to your clients</p>
        </Tile>
        <Tile>
          <img src={tileImage}/>
          <h3>ENGAGEMENT</h3>
          <p>Suggest goals based on the client’s personal situation</p>
          <p>Help clients learn about and set goals</p>
          <p>Make the process about goals/needs rather than products</p>
        </Tile>
        <Tile>
          <img src={tileImage}/>
          <h3>CROSS-SELL</h3>
          <p>Suggested goals will frequently require a product</p>
          <p>But sell the goal first, and the product sale is easy.</p>
          <p>Identifies if a client has any other products with other groups</p>
          <p>Then you can offer them a better deal</p>
        </Tile>
      </Banner>
      <Banner color='#f2f4f8'>
        <div className='insightsWrapper'>
          <img className='insightsImg shrinkHide' src={insights}/>
          <div className='insightsContent'>
            <h3>The Power of Insights</h3>
            <h4>Unlock the power of automated insights, where we tell you key information that we can see in the data:</h4>
            <ul>
              <li>Undeclared Credit Facilities</li>
              <li>Spikes in high risk areas such as Gambling</li>
              <li>Large unknown expenses or incomes</li>
            </ul>
          </div>
        </div>
      </Banner>
      <Banner>
        <div className='banner4'>
          <h3>What else can Relie provide?</h3>
          <table >
            <tr>
              <td className='column1'><div className='circle'>1</div></td>
              <td className='column2'>
                <h4 className='expandHide'>Categorisation and Classification</h4>
                <p>We categorise all income and expenses into over 100 categories.</p>
                <p>We also show you the client’s mandatory vs discretionary expenditure.</p>
              </td>
              <td className='column3 shrinkHide'>Categorisation and Classification</td>
            </tr>
            <tr style={{'background-color': '#f7f7f7'}}>
              <td className='column1'><div className='circle'>2</div></td>
              <td className='column2'>
                <h4 className='expandHide'>Insights</h4>
                <p>Detect important information like life event changes, high risk behaviour or other products held with another organisation.</p></td>
              <td className='column3 shrinkHide'>Insights</td>
            </tr>
            <tr>
              <td className='column1'><div className='circle'>3</div></td>
              <td className='column2'>
                <h4 className='expandHide'>Cross-Sell Opportunities</h4>
                <p>We can identify opportunities to cross sell products across the banking, lending and wealth segments, including Insurance and Savings Products.</p>
              </td>
              <td className='column3 shrinkHide'>Cross-Sell Opportunities</td>
            </tr>
            <tr style={{'background-color': '#f7f7f7'}}>
              <td className='column1'><div className='circle'>4</div></td>
              <td className='column2'>
                <h4 className='expandHide'>Cross-Sell Opportunities</h4>
                <p>We can set budgets, savings goals and provide expense hotspots to help identify likely areas where savings can be achieved.</p>
              </td>
              <td className='column3 shrinkHide'>Budget Setting</td>
            </tr>
            </table>
          </div>
      </Banner>
      <div className='parallax'>
        <Banner>
          <div className='banner5'>
            <table >
              <tr>
                <td className='column1'>&#10003;</td>
                <td className='column2'>
                  Understand your client’s real expenses
                </td>
              </tr>
              <tr>
                <td className='column1'>&#10003;</td>
                <td className='column2'>
                  Automated insights into areas of concern</td>
              </tr>
              <tr>
                <td className='column1'>&#10003;</td>
                <td className='column2'>
                  Personalise, comment and document each assessment
                </td>
              </tr>
            </table>
          </div>
        </Banner>
      </div>
      <Banner color='#f2f4f8'>
        <div className= 'banner6'>
          <h3>Australia’s first Responsible Lending Engine</h3>
          <p>To find out more, please express your interest in the below form and our Industry Leaders will give you early access to the future</p>
          {!getStartedClicked && <button className="getStartedButton" onClick={() => setGetStartedClicked(true)}>Get started here</button>}
          {getStartedClicked && (
            <form className='getStartedForm'>
              <p>Full Name</p>
              <input/>
              <p>Contact Number</p>
              <input/>
              <p>Email Address</p>
              <input/>
              <p>Company Name</p>
              <input/>
              <button className="getStartedButton" onClick={() => setGetStartedClicked(false)}>Submit</button>
            </form>
          )}
        </div>
      </Banner >
    </Layout>
  );
}

export default HomePage;
