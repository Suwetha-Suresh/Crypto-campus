import React from 'react'
import Classcard from './classcard'

function Classroom() {
  const styles = {
    marginLeft: '30px',
    marginRight: '30px'
  }
  return (
    <div style={styles}>      
      <div className="ui secondary  menu">
        <h2 class="ui header" style={{margin: '5px'}}>
          <img class="ui image" src="https://semantic-ui.com/images/icons/school.png" />
          <div class="content">
            Classrooms
          </div>
        </h2>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <button class="circular ui icon button">
              <i className="add icon"></i>
              </button>           
            </div>
          </div>
        </div>
      </div>
      <div className="ui three column grid"  style={{marginTop: '10px'}}>
        <Classcard
            name='CSE'
            incharge='Reena'
            year='2019'
            headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />
        <Classcard
          name='CSE'
          incharge='Reena'
          year='2019'
          headcount='56'
        />

      </div>
    </div>
  )
}

export default Classroom