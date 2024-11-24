import React from 'react'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const Search = ({ top}) => {
    const {dark}=useContext(DarkModeContext)
    const users = [
    { title: 'Amadeus' },
    { title: 'To Kill a Mockingbird' },
    { title: 'Toy Story 3'},
    { title: 'Logan' },
    { title: 'Full Metal Jacket' },
    { title: 'Dangal' },
    { title: 'The Sting'},
    { title: '2001: A Space Odyssey'},
    ];
    const background = dark ? `${top?"#343355":"#262846"}` : `${top?"#ffffff":"#f7f5fa"}`;
    
return (
    <Autocomplete
                    style={{
                        width: 180,
                        height: 35,
                        background: background,
                        borderRadius: 50,
                    }}
                    freeSolo
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "50px", // Rounded border
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center', // Center vertically
                            justifyContent: 'center', // Center horizontally
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "0px solid transparent", // Remove border
                        },
                    }}
                    id="free-solo-2-demo"
                    disableClearable
                    options={users.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Search for user" // Use placeholder instead of label
                            InputProps={{
                                ...params.InputProps,
                                sx: {
                                    textAlign: "center", // Center placeholder text horizontally
                                },
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "50px", // Match the Autocomplete border radius
                                    display: "flex",
                                    alignItems: "center", // Center placeholder vertically
                                    justifyContent: "center", // Center placeholder horizontally
                                    padding: 0,
                                },
                                "& .MuiInputBase-input": {
                                    textAlign: "center", // Center the input text
                                    color: "#b9b9b9",
                                    
                                     "&::placeholder": {
                                            color: "#b9b9b9", // Placeholder text color set to white
                                            opacity: 1, // Ensure full opacity
                                        },
                                },
                            }}
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    type: 'search',
                                },
                            }}
                        />
                    )}
                />
  )
}

export default Search