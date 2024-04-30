import React from "react";
import ResponsiveAppBar from "../Components/AppBar";
import Typography from '@mui/material/Typography';


function Home(props) {
    return (
        <div className="home_container">
            <header>
                <ResponsiveAppBar></ResponsiveAppBar>
            </header>
            <div>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero consequuntur quaerat,
                    doloremque molestias quam fuga animi? Quae illo non distinctio doloribus quam eum ut ullam magni quis, dolores ad minima.
                </Typography>
            </div>
        </div>
    )
}

export default Home;