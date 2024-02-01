import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage'
import {Typography, Stack, Button, Dialog, Box, DialogContent} from '@mui/material';

export default () => {

    const [prevClassicPrompt, setPrevClassicPrompt] = useLocalStorage('prev_classic_prompt', '')

    function goToOriginal(){
        setPrevClassicPrompt('classic')

        window.location.href = 'https://classic.star.vote';
    }

    function goToNewVersion(){
        if(prevClassicPrompt != 'new_version'){
            setPrevClassicPrompt('new_version')
        }

        //window.location.href = 'https://dev.star.vote';
    }

    if(prevClassicPrompt == 'new_version'){
        goToNewVersion();
        return <p>redirecting...</p>
    }

    return (
        <>
            <Box className="classicPageWrapper">
                <iframe src='/classic_star_vote.html' style={{width: '100%', height: '100%'}} scrolling="no"></iframe>
            </Box>
            <Dialog open={true} className="classicPopupBkg" keepMounted>
                <DialogContent sx={{margin: 4}}>
                    <Stack className="classicPopupInner">
                        <Typography align='center' variant='h4'>
                            New star.vote is here!
                        </Typography>
                        <br/>
                        <Typography align='center'>
                            The original star.vote has been moved to classic.star.vote, but the new and improved version is live!
                        </Typography>
                        <br/>
                        <Typography align='center'>
                            Want to try it?
                        </Typography>
                        <br/>
                        <Button
                            variant="contained"
                            sx={{
                                width: '80%',
                                m: 'auto',
                                p: 1,
                                boxShadow: 2,
                                backgroundColor: '#2aa2b3',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}
                            onClick={goToNewVersion}
                        >
                            Try the New Version!
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                width: '70%',
                                m: 'auto',
                                mt: 2,
                                p: 1,
                                boxShadow: 2,
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#2aa2b3',
                            }}
                            onClick={goToOriginal}
                        >
                            Return to Classic
                        </Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )
}