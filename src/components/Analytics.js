import React, { useEffect, useState } from "react";
import Navbaranalytics from "./Navbaranalytics";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Axios from "axios";

const Analytics = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [countdata, setCountData] = useState();
  const [showAll, setShowAll] = useState(false);
  const [csvcount, setCsvCount] = useState()

  const handleClick = () => {
    setShowAll(!showAll);
  };
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const handleSubOptionChange = (subOption) => {
    setSelectedSubOption(subOption);
  };

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const handleDateChange = (newDate) => {
    setDateRange(newDate);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

      const handleDateChangeSingle = (date) => {
        setSelectedDate(date);
         console.log(date)
        
      };
      let today = new Date();

      today.setHours(0, 0, 0, 0);
      let previousDay = new Date();
      previousDay.setDate(today.getDate() - 1);
      
          
     
      const fetchanalyticsdata = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getanalyticsdatavisualiser'

  const handlelastsevendays = async (val) => {
    let currentDate = new Date();

    let timevalue;

    if(val === 'lastday'){

      setNewCount(null)
    document.querySelector('.analyticsdivviews').style.display = 'none'

     document.querySelector('.analyticscalanderdivinside').style.display = 'none'
    document.querySelector('.analyticscalanderdivinsidesingle').style.display = 'none'
    document.querySelector('.downloadcsvbutton').style.display = 'none'

       handleDateChangeSingle(previousDay)
       console.log(previousDay)
      //  const rowsToRemove = document.querySelectorAll('tbody tr');
  
      
      //  rowsToRemove.forEach(row => {
      //    row.remove();
      //  });
   

          const formattedDate = currentDate.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZone: 'UTC',
      });

      let sevenDaysAgo = new Date(currentDate);
      sevenDaysAgo.setDate(currentDate.getDate() - 1);

      const newlastdate = sevenDaysAgo.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "UTC",
      });

      const body = {
        brand: "excel",
        startDate: newlastdate,
        lastDate: formattedDate,
      };

      await Axios.post(fetchanalyticsdata, body)
        .then((res) => {
       
          setCountData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (val === "lastsevenday") {
    
      document.querySelector(".analyticsdivviews").style.display = "none";

      document.querySelector(".analyticscalanderdivinside").style.display =
        "none";
      document.querySelector(
        ".analyticscalanderdivinsidesingle"
      ).style.display = "none";
      document.querySelector(".downloadcsvbutton").style.display = "none";
  
  
  

      const formattedDate = currentDate.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "UTC",
      });

      let sevenDaysAgo = new Date(currentDate);
      sevenDaysAgo.setDate(currentDate.getDate() - 7);

      const newlastdate = sevenDaysAgo.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "UTC",
      });

      const body = {
        brand: "excel",
        startDate: newlastdate,
        lastDate: formattedDate,
      };

      await Axios.post(fetchanalyticsdata, body)
        .then((res) => {
       

          console.log(res.data)
          setCountData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (val === "lastmonth") {
      document.querySelector(".analyticsdivviews").style.display = "none";

      document.querySelector(".analyticscalanderdivinside").style.display =
        "none";
      document.querySelector(
        ".analyticscalanderdivinsidesingle"
      ).style.display = "none";
      document.querySelector(".downloadcsvbutton").style.display = "none";

      const formattedDate = currentDate.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "UTC",
      });

      let sevenDaysAgo = new Date(currentDate);
      sevenDaysAgo.setDate(currentDate.getDate() - 30);

      const newlastdate = sevenDaysAgo.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "UTC",
      });

      const body = {
        brand: "excel",
        startDate: newlastdate,
        lastDate: formattedDate,
      };

      await Axios.post(fetchanalyticsdata, body)
        .then((res) => {
          setCountData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (val === "alldata") {
      document.querySelector(".analyticsdivviews").style.display = "none";

      document.querySelector(".analyticscalanderdivinside").style.display =
        "none";
      document.querySelector(
        ".analyticscalanderdivinsidesingle"
      ).style.display = "none";
      document.querySelector(".downloadcsvbutton").style.display = "none";

      const formattedDate = currentDate.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "UTC",
      });

      let sevenDaysAgo = new Date(currentDate);
      sevenDaysAgo.setDate(currentDate.getDate() - 1);

      const newlastdate = sevenDaysAgo.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "UTC",
      });

      const body = {
        brand: "excel",
        startDate: "Wed, Dec 20, 2023, 09:15:35 AM UTC",
        lastDate: formattedDate,
      };

   

     await Axios.post(fetchanalyticsdata, body).then(res=>{
      setCountData(res.data)

     }).catch(error=>{
        console.log(error)
     })

    }
    



   }


   function calculatePatternCounts(data) {
    const patternCounts = {};
    
    
    data.forEach(item => {
        const patternNo = item.patternno;
        patternCounts[patternNo] = (patternCounts[patternNo] || 0) + 1;
    });

    const resultArray = Object.entries(patternCounts).map(([patternno, views]) => ({
      patternno: patternno,
      views
    }));
    resultArray.sort((a, b) => b.views - a.views);
  
    return resultArray;
    
  
}


   useEffect(()=>{

  
    document.querySelector('.analyticsdivviews').style.display = 'none'

      const getDateRangeData = async ()=>{
        const formattedDate = dateRange[1].toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
          timeZone: 'UTC',
        });
  
   
  let sevenDaysAgo ;
 
  
  const newlastdate = dateRange[0].toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: 'UTC',
    });
  
       const body= {
          brand: 'excel',
          startDate: newlastdate ,
          lastDate: formattedDate
       }
  
     
  
       await Axios.post(fetchanalyticsdata, body).then(res=>{
        setCountData(res.data)

       }).catch(error=>{
          console.log(error)
       })
      }

      getDateRangeData()

   },[dateRange])


   
   useEffect(()=>{

  
    document.querySelector('.analyticsdivviews').style.display = 'none'

      const getDateRangeData = async ()=>{


        const formattedDate = selectedDate.toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
          timeZone: 'UTC',
        });
  
   
 
 
        let sevenDaysAgo = new Date(selectedDate);
        sevenDaysAgo.setDate(selectedDate.getDate() + 1);
  const newlastdate = sevenDaysAgo.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: 'UTC',
    });
  
       const body= {
          brand: 'excel',
          startDate:  formattedDate ,
          lastDate: newlastdate
       }

     
  
     
  
       await Axios.post(fetchanalyticsdata, body).then(res=>{
        setCountData(res.data)

       }).catch(error=>{
          console.log(error)
       })
      }

      getDateRangeData()

   },[selectedDate])

   const handledaterangeclick = ()=>{
     document.querySelector('.analyticscalanderdivinside').style.display = 'flex'
    document.querySelector('.analyticscalanderdivinsidesingle').style.display = 'none'
    document.querySelector('.downloadcsvbutton').style.display = 'none'


   }

   const handleSingleDateClick = ()=>{
    document.querySelector('.analyticscalanderdivinsidesingle').style.display = 'flex'
    document.querySelector('.analyticscalanderdivinside').style.display = 'none'
    document.querySelector('.downloadcsvbutton').style.display = 'none'



   }
  
    const sidebarData = [
        { 
            title: 'Profile', 
            content: (
              <div className='analyticsdataoptions'>
                <ul>
                    <li><a>My profile</a></li>
                    <li><a>Change Email</a></li>
                    <li><a>Change Password</a></li>
                

                </ul>
               
              </div>
            ),
          },
          { 
            title: 'Data', 
            content: (
              <div className='analyticsdataoptions'>
                <ul>
                    <li><a onClick={()=>handlelastsevendays('lastday')}  >Last day at this time</a></li>
                    <li><a onClick={()=>handlelastsevendays('lastsevenday')}>Last seven days</a></li>
                    <li><a onClick={()=>handlelastsevendays('lastmonth')}>Last month</a></li>
                    <li><a onClick={handleSingleDateClick}>Single day</a></li>

            <li>
              <a onClick={handledaterangeclick}>Select date range</a>
            </li>

            <li>
              <a onClick={() => handlelastsevendays("alldata")}>All data</a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Settings",
      content: (
        <div className="analyticsdataoptions">
          <ul>
            <li>
              <a>My profile</a>
            </li>
            <li>
              <a>Change Email</a>
            </li>
            <li>
              <a>Change Password</a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

      function countPatternNos(array) {
        const groupedData = {};
array.forEach(entry => {
  if (!groupedData[entry.date]) {
    groupedData[entry.date] = {};
  }
  if (!groupedData[entry.date][entry.patternno]) {
    groupedData[entry.date][entry.patternno] = 0;
  }
  groupedData[entry.date][entry.patternno]++;
});


const formattedData = [];
for (const date in groupedData) {
  const views = Object.entries(groupedData[date]).map(([patternno, count]) => ({
    patternno,
    views: count
  }));
  formattedData.push({ date, views });
}

  return formattedData
         
          // const patternCount = {};
        
        
          // array && array.forEach(obj => {
          //   const patternno = obj.patternno;
        
          
          //   patternCount[patternno] = (patternCount[patternno] || 0) + 1;
          // });
         
          // const resultArray = Object.entries(patternCount).map(([patternno, views]) => ({
          //   patternno: patternno,
          //   views
          // }));
          // resultArray.sort((a, b) => b.views - a.views);
        
          // return resultArray;
        }

  const testpattern = {};

  const [newcount, setNewCount] = useState();
  const handleviewedpatterns = async () => {
    if (countdata.length > 0) {
      document.querySelector(".downloadcsvbutton").style.display = "flex";
      document.querySelector(".analyticsdivviews").style.display = "flex";

      const result = await countPatternNos(countdata && countdata);
      setNewCount(result);
      
    }
  };
  const handlemostviewedpatterns = () => {
    if (countdata.length > 0) {
      document.querySelector(".analyticsdivviews").style.display = "flex";
    }
  };

  const handledisplaycount = () => {
    document.querySelector(".analyticsdivviews").style.display = "none";
  };

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(array[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  function downloadCSV(array) {

      const newcsvdata = calculatePatternCounts(countdata)
      


   
     
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(newcsvdata);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }


  const rowsToRemove = document.querySelectorAll('tbody tr');
  
      
  rowsToRemove.forEach(row => {
    row.remove();
    setNewCount(null)
  });

  
const tbody = document.querySelector('tbody');



newcount && newcount.forEach(item => {
  const row = document.createElement('tr');
    row.style.backgroundColor = 'white'
   
  row.innerHTML = `
    <td className = 'rowanalyticsdata'>${item.date}</td>
    <td  className = 'rowanalyticsdata'>${item.views.map(view => view.patternno + ' -> ' + `<span style="color: red" >  ${view.views}</span> &nbsp;` ).join(',') }</td>
    <td  className = 'rowanalyticsdata'>${item.views.reduce((acc, obj) => acc + obj.views, 0)}</td>
  `;
  tbody.appendChild(row);
});
   

  
  return (
    <div className="analyticsdivmain">
      <div className="blur-overlay">
        <Navbaranalytics />
        <div className="analyticsdivinside">
          <div className="sidebar-accordion">
            {sidebarData.map((section, index) => (
              <div
                key={index}
                className={`accordion-section ${
                  activeSection === index ? "active" : ""
                }`}>
                <div
                  className="accordion-header"
                  onClick={() => toggleSection(index)}>
                  {section.title}
                </div>
                {activeSection === index && (
                  <div className="accordion-content">{section.content}</div>
                )}
              </div>
            ))}
          </div>
          <div className="analyticsdashboarddiv">
            <div className="analyticscalanderdiv">
              <div className="analyticscalanderdivinside">
                <h2>Select the date range</h2>
                <Calendar
                  className="calandermain"
                  selectRange={true}
                  onChange={handleDateChange}
                  value={dateRange}
                />

                <p>Start Date: {dateRange[0].toLocaleDateString()}</p>
                <p>End Date: {dateRange[1].toLocaleDateString()}</p>
              </div>

              <div className="analyticscalanderdivinsidesingle">
                <h2>Select the date</h2>
                <Calendar
                  className="calandermain"
                  onChange={handleDateChangeSingle}
                  value={selectedDate}
                />
              </div>
            </div>

            <div className="analyticsdatadiv">
              <div className="analyticsdivunder">
                <label>
                  Total views :<p>{countdata?.length}</p>
                </label>
              </div>
              <div className="analyticsdivpatterndata">
                <button
                  onClick={handleviewedpatterns}
                  onBlur={handledisplaycount}>
                  See viewed patterns
                </button>
                <button
                  className="downloadcsvbutton"
                  onClick={() => downloadCSV(csvcount)}>
                  download csv
                </button>

                <div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Pattern no</th>
        <th>views</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

                <div className="analyticsdivviews">
                  {/* {newcount &&
                    newcount.map((item) => (
                        

                      <div className="countpatterndiv">
                        <p>{item.date} </p>
                          {
                            item.views.map(itemnew=>(
                              <div>
                                 <p>{itemnew}</p>
                              <p>{itemnew}</p>
                                </div>
                             

                              
                            ))
                          }
                      
                      </div>
                    ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
