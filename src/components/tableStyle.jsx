const tableCustomStyles = {

    head: {
      style: {
       
        fontSize: '15px',
        fontWeight: 'bold',
        width:'fitcontent',
         height: '100%',
        maxWidth: '100%',
       
      },
    },

    headRow: {
      style: {
       
      
        fontFamily: 'Lato, sans-serif',
        backgroundColor: 'rgb(240, 203, 203)',
        minHeight: '60px',
        borderBottomWidth: '2px',
        fontSize: '20px',
        borderBottomStyle: 'solid',
        margin:'20px',
        borderRadius:'10px',
        marginTop:'-2px',
        maxWidth: '100%'
       
      },
      denseStyle: {
        minHeight: '32px',
      },
    },
    rows: {
      style: {
        fontFamily: 'Lato, sans-serif',
        fontSize: '15px',
        fontWeight: 'bold',
       
        width:'auto',
        borderRadius: '10px',
       height: 'auto',
       margin: '20px',
      
        backgroundColor:'rgb(226, 224, 224)',
      
       },
    },
 
    headCells: {
      style: {
    width: '100%',

    
      },
      draggingStyle: {
        cursor: 'move',
      },
    },
    header:{
    style:{
       fontFamily: 'Lato, sans-serif',
       color: 'gray',
       fontSize:'25px'
    }
    },
    pagination: {
      style: {
        color: 'green',
        fontSize: '13px',
        minHeight: '56px',
        backgroundColor: 'transparent',
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: 'green',
        fontSize:'15px'
      },
      pageButtonsStyle: {
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        padding: '8px',
        margin: 'px',
        cursor: 'pointer',
        transition: '0.4s',
        color: 'red',
        
        backgroundColor: 'rgb(240, 192, 192)',
        '&:disabled': {
          cursor: 'unset',
          color: 'red',
          fill: 'green',
        },
        '&:hover:not(:disabled)': {
          backgroundColor: 'rgb(233, 213, 213)',
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: 'pink',
        },
      },
    },
      
  }
  export { tableCustomStyles };