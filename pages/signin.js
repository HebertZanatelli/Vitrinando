import React from "react"
import { 
    Avatar, 
    Button, 
    CssBaseline, 
    TextField, 
    Link,  
    Paper, 
    Grid, 
    Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles( theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ccc',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    },
    paper:{
        margin: theme.spacing(8,4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

export default function SignInSide() {
    const classes = useStyles()
    return(
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Acesse a sua conta
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id='email'
                        label='E-mail'
                        name="email"
                        autoComplete="email"
                        autoFocus
                        />
                          <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id='password'
                        label='Senha'
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Não tem uma conta?
                                    Cadastra-se
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Crie sua conta
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}