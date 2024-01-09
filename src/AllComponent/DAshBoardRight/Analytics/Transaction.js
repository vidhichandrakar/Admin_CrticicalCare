import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CourseHeader from '../../Courses/CoursesHeader';
import SearchBar from '../../../Util/SearchBar';

function Transaction() {
  return (
    <div className='main-container'>
    <div className=' m20'>
        <CourseHeader/>

        <div className='searchnfilter'>
           <SearchBar />
        </div>

       <div className='transactionCards'> 
        <div className='boxNoOne'>
            <span className='boxValue'>Transactions</span>
            <span className='boxNumber'>2</span>
        </div>
        <div className='boxNoTwo'>
            <span className='boxValue'>Transactions Amount</span>
            <span className='boxNumber'>₹2</span>
        </div>
        <div className='boxNoThree'>
            <span className='boxValue'>Avg Order Value</span>
            <span className='boxNumber'>₹1</span>
        </div>
        </div>

        <table className='transactionCompleteTable'>
            <tr className='transactionTableHeading'>
                <th>
                    Student Name
                </th>
                <th className='courseName'>
                    Course Name
                </th>
                <th>
                    Transaction Date
                </th>
                <th>
                    Transaction Amount
                </th>
            </tr>
            <hr className='hrLine'/>

    
            <tr>
                <td><h4>Pranab Raj</h4> <h4 className='greyboldnumbers'>+918889844180</h4></td>
                <td><p className='firstCourseName'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p></td>
                <td><p className='transactionDate'>19/Dec/2023</p></td>
                <td className='transactionAmount'> ₹1.00</td> 
            </tr>
            <tr>
                <td><h4>Sania Khan</h4> <h4 className='greyboldnumbers'>+918889844180</h4></td>
                <td><p className='firstCourseName'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p></td>
                <td><p className='transactionDate'>19/Dec/2023</p></td>
                <td className='transactionAmount'> ₹1.00</td> 
            </tr>
        </table>
      
    </div>
    </div>

  )
}

export default Transaction
