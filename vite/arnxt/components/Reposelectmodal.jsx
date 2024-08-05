import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';
import { FaTimes } from 'react-icons/fa';
import { useMyContext } from '../Context/store';
import { TextField } from '@mui/material';
import axios from 'axios';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const Reposelectmodal = ({}) => {

    const getitemurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getquleeprepoitem'

    const {repomodal, setRepoModal, repoitems, setRepoItems, selectedfilerepo, setSelectedFileRepo, uploadfromrepo, setUploadFromRepo} = useMyContext()

    const handleClose = ()=>{
        setRepoModal(false)
        setRepoItems()
        setUploadFromRepo(false)
    }

    const handlesearchmodalrepo = async  (value)=>{
      
       if(value.length > 10){

        const body = {
            Id: value
        }
        

        try{
        const res = await axios.post(getitemurl, body)
         setRepoItems(res.data)

        }catch(error){
            console.log(error)
        }

       }

    }

    const handleclosemodal = ()=>{
     
        setRepoModal(false)
        setRepoItems()
    }

    const handlefileselect = (item)=>{

        setSelectedFileRepo(item)
        setUploadFromRepo(true)
        handleclosemodal()
     }
  return (
    <div>

<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={repomodal}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Please search modal
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <FaTimes />
        </IconButton>
        <DialogContent dividers>

        <TextField id="outlined-basic" label="Search modal" onChange={(e)=>handlesearchmodalrepo(e.target.value)} variant="outlined" />

        <div className='flex flex-wrap mt-4 pb-5'>

            {
                repoitems && repoitems.map(item=>(
                    <div className='flex w-80 h-80 cursor-pointer flex-col'  >
                    <img className='justify-items w-100 h-100'  src={item.renderedimage}>
                    </img>

                    <Button autoFocus variant='outlined' className='mt-2'  onClick={()=>handlefileselect(item)} >
         Select modal
        </Button>
    
                </div>

                ))
            }

          

        </div>
     
        </DialogContent>
        {repoitems && repoitems.length > 0  ? 
        
        <DialogActions>
     
      </DialogActions> : ''
    }  
    
      </BootstrapDialog>
      
    </div>
  )
}

export default Reposelectmodal
