import React, { Component } from 'react';
export default class Porfolio extends Component {
  handleLiveButtonClick = (link) => {
    window.open(link, '_blank');
  };

  handleSourceButtonClick = (link) => {
    window.open(link, '_blank');
  };
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div style = {{display: 'grid',  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" style = {{padding: '10px', border: '1px solid orange',borderRadius: '10px', margin: '5px 5px'}}>
                  <div className="item-wrap" >
                    {/* <a href="#modal-01"> */}
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          
                        </div>
                      </div>
                    {/* </a> */}
                  </div>
                  <div className="new_port_design">
                          <h5>{item.name}</h5>
                          <p>{item.description1}</p>
                          
                        </div>
                  <div className='btn'>
                          <button onClick={() => this.handleLiveButtonClick(item.seelive)} className="small-button">
        See Live
      </button>
      <button onClick={() => this.handleSourceButtonClick(item.seesource)} className="small-button">
        See Source
      </button>
      </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}