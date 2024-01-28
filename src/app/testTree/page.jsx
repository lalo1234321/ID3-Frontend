'use client';
import { Autocomplete, Box, Button, Container, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { useState, useEffect } from "react";
import Image from 'next/image';

const aprovechamientoFilms = [
    { label: 'Excelente'},
    { label: 'Bueno'},
    { label: 'Regular'},
    { label: 'deficiente'}
    
  ];

const puntualidadYAsistemncia = [
    {label: 'Asiste'},
    {label: 'No asiste'}
];

export default function HomePage() {
    let [dataSet, setDataSet] = useState(false);
    let [attributes, setAttributes] = useState();
    Axios.get('http://localhost:4000/validateFile',  {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((res) => {
            setDataSet(res.data.response);
            console.log("validateFile Endpoint: ", res.data.response );
        });
    useEffect(() => {
        const fetchData = async () =>{
            
            try {
            const {data: response} = await Axios.get('http://localhost:4000/sendOptions');
            setAttributes(response);
            } catch (error) {
            console.error(error.message);
            }
            
        }
    
        fetchData();
    }, []);
    console.log(attributes);
    return(
        <>
            
            <Container maxWidth="md">
                
                {
                    attributes !== undefined ? (
                        attributes.options[0].map((item, index)=>
                            <Box key={item} sx={{display:'flex', flexWrap:'wrap', flexDirection: 'column'}}>
                            <Autocomplete key={item} sx={{
                                mt: 6
                            }} id="filled-basic" label={item} variant="filled" options={attributes.options[index+1]} renderInput={(params) => <TextField {...params} label={item}></TextField>}/>
                            
                            
                            
                            </Box>
                                
                            
                            
                        
                                
                            )
                            
                        
                    ) : (<p>Cargando</p>)
                }
                
                
                <Button sx={{
                                    mt:5
                                }} variant="contained">Predecir valor</Button>
            </Container>
            
        </>
    );


    
}