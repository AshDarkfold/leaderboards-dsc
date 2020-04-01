import React from 'react'
import Nav from './nav';

class Faq extends React.Component{
    render(){
        return(
    
        <div className="form-holder">  
          <Nav active="faq"/>
            <div className="formparent ques">   
            <div> 
            <h3>Basic Rules</h3>
            <p>
                1) Each day, a question would be shared on our social media handles. Answering it correctly will give you 10 points. <br/>
                2) Each Saturday, a task will be shared, which can fetch you a maximum of 50 points, subject to your implementation. The deadline to submit the weekly task will be the following week’s Friday. <br/>
                3) The leaderboard will be updated daily here: codewith.dscvit.com. <br/>
            </p>
            
            <h3 style={{marginTop:'30px'}}>Perks</h3>
            <p>
                1) Top 5 participants at the end of this campaign will get exclusive schwags.
                <br/>
                2) You will build a habit to code regularly!
                <br/>
                3)You will have a lot of mini-projects by the end of the vacation to show off! 
                <br/>
            </p>
            <p>If you have any queries, contact us on <a href="https://www.instagram.com/dscvitvellore/" rel="noopener noreferrer" target="_blank">Instagram</a> or <a href="https://twitter.com/dscvit" rel="noopener noreferrer" target="_blank">Twitter</a> and we would be glad to help you!</p>
            </div>
            </div>
          </div>
        )
    }
}

export default Faq;