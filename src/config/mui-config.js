import { createTheme } from "@mui/material/styles";



export const thema = createTheme({
 
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1380,
      }
    },
    typography:{
      h3: {
        marginTop:"8px",
        fontWeight: 800,
        fontSize: "24px",
        lineHeight: "25px",
      },
      h4: {
        marginTop:"8px",
        fontFamily:"cursive",
        fontWeight: 800,
        fontSize: "24px",
        lineHeight: "25px",
      },
      h5: {
        marginTop:"8px",
        fontFamily:"Lucida Console",
        fontWeight: 800,
        fontSize: "24px",
        lineHeight: "25px",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: "orange",
            
          }
        },
       
        variants: [
          {
            props: { variant: "primary" },
            style: {
              padding: "10px 25px",
              fontWeight: 700,
              fontSize: "13px",
              lineHeight: "16px",
              backgroundColor:"#00ffff",

            }
          }
    
        ]
      },
      MuiTextField:{
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              backgroundColor:"#21262D",
              border:"2px solid #21262D",
              borderRadius:"8px",
              maxWidth:"300px"
       
            }
          }
    
        ],
      
      }
    }

})