'use client';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Alert, AlertTitle, Box, Collapse, Container, IconButton, Typography } from '@mui/material';
import FormData from 'form-data';
import Axios from 'axios';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeepMountedModal from '../components/Modal';
import { red } from '@mui/material/colors';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function HomePage() {
    const [file, setFile] = useState(null);
    let [openSuccess, setOpenSuccess] = useState(false);
    let [openFailure, setOpenFailure] = useState(false);
    const upload = (e) => {
        //prevent reloading while something is happening
        e.preventDefault();
        let formData = new FormData();
        formData.append('MyFile', file);
        Axios.post('http://localhost:4000/', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((res) => {
            console.log("Success ", res);
        });
    }

    const fetchData1 = async () =>{
          
        try {
          const {data: response} = await Axios.get('http://localhost:4000/firstProcess');
          console.log(response);
          //setExternalArray( current => [...current,treeData] ); 
        } catch (error) {
          console.error(error.message);
        }
        
      }
    /*const firstProcess = (e) => {
        //prevent reloading while something is happening
        e.preventDefault();
        //let formData = new FormData();
        //formData.append('MyFile', file);
        Axios.get('localhost:4000/firstProcess').then((res) => {
            console.log("Success ", res);
        });
    }*/
    const fetchData2 = async () =>{
          
        try {
          const {data: response} = await Axios.get('http://localhost:4000/secondProcess');
          console.log(response);
          //setExternalArray( current => [...current,treeData] ); 
        } catch (error) {
          console.error(error.message);
        }
        
      }
      const fetchData3 = async () =>{
          
        try {
          const {data: response} = await Axios.get('http://localhost:4000/createTree');
          console.log(response);
          //setExternalArray( current => [...current,treeData] ); 
        } catch (error) {
          console.error(error.message);
        }
        
      }
    /*const secondProcess = (e) => {
        //prevent reloading while something is happening
        e.preventDefault();
        //let formData = new FormData();
        //formData.append('MyFile', file);
        Axios.get('localhost:4000/secondProcess').then((res) => {
            console.log("Success ", res);
        });
    }*/
    return(<>
            <Container maxWidth="md">
                <Collapse in={openSuccess}>
                    <Alert onClose={() => {}} action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpenSuccess(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                        <AlertTitle>Success</AlertTitle>
                            Carga de archivo exitoso
                    </Alert>
                </Collapse>

                <Collapse in={openFailure}>
                    <Alert severity="error" onClose={() => {}} action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpenFailure(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                        <AlertTitle>Error</AlertTitle>
                            No se ha cargado un archivo, es necesario adjuntar un archivo primero y después presionar el botón de enviar 
                    </Alert>
                </Collapse>
                
                <Typography sx={{
                    mt:5
                }} textAlign='center'>Carga el archivo en formato .csv y al seleccionar el archivo podrás visualizar el arbol de decisión</Typography>
                <Box sx={{
                    textAlign:'center',
                    mt: 4
                }}>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Cargar conjunto de datos
                        <VisuallyHiddenInput type="file" name='MyFile' onChange={(e)=>{setFile(e.target.files[0])}}/>
                    </Button>
                    <Button sx={{marginLeft:10}} component='label' variant='contained' onClick={(e)=> {
                        upload(e)
                        if( file == null )
                            setOpenFailure(true);
                        else
                            setOpenSuccess(true); 
                    }}>Enviar</Button>
                    <Button sx={{marginLeft:10}} component='label' variant='contained' onClick={(e) => {
                        fetchData1(e);
                        
                    }}>Primer proceso</Button>
                    <Button sx={{marginLeft:10, marginTop:12}} component='label' variant='contained' onClick={(e)=> {
                        fetchData2(e);
                        
                    }}>Segundo proceso</Button>
                    <Button sx={{marginLeft:10, marginTop:12}} component='label' variant='contained' onClick={(e)=> {
                        fetchData3(e);
                        
                    }}>Crear arbol</Button>
                    <Typography sx={{paddingRight:25, paddingTop:5,paddingBottom:10, color:'red'}}>{(file != null) ? file.name : "No se ha cargado un archivo"}</Typography>
                    
                    
                </Box>
                
            </Container>
            
    </>);
            
            

}