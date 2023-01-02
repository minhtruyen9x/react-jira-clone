import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const index = () => {
    return (
        <Box sx={{ flexGrow: 1, fontSize: "20px" }} >
            <Grid container spacing={1} flexWrap={'nowrap'}>
                <Grid xs={3} minWidth={240}>
                    <Box sx={{ flexGrow: 1, background: "#f2f2f2", padding: '8px', minHeight: '220px' }}>
                        <Skeleton variant='text' sx={{ marginBottom: '16px' }} width='30%' />
                        <Skeleton variant='rectangular' height='40px' sx={{ marginBottom: '8px' }} />
                        <Skeleton variant='rectangular' height='60px' />
                    </Box>
                </Grid>
                <Grid xs={3} minWidth={240}>
                    <Box sx={{ flexGrow: 1, background: "#f2f2f2", padding: '8px', minHeight: '220px' }}>
                        <Skeleton variant='text' sx={{ marginBottom: '8px' }} width='50%' />
                        <Skeleton variant='rectangular' height='50px' sx={{ marginBottom: '8px' }} />
                        <Skeleton variant='rectangular' height='30px' />
                    </Box>
                </Grid>
                <Grid xs={3} minWidth={240}>
                    <Box sx={{ flexGrow: 1, background: "#f2f2f2", padding: '8px', minHeight: '220px' }}>
                        <Skeleton variant='text' sx={{ marginBottom: '8px' }} width='40%' />
                        <Skeleton variant='rectangular' height='40px' sx={{ marginBottom: '8px' }} />
                        <Skeleton variant='rectangular' height='70px' />
                    </Box>
                </Grid>
                <Grid xs={3} minWidth={240}>
                    <Box sx={{ flexGrow: 1, background: "#f2f2f2", padding: '8px', minHeight: '220px' }}>
                        <Skeleton variant='text' sx={{ marginBottom: '8px' }} width='60%' />
                        <Skeleton variant='rectangular' height='60px' sx={{ marginBottom: '8px' }} />
                        <Skeleton variant='rectangular' height='30px' />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default index