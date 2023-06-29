import React, { useState } from "react";
import { Divider, Typography, IconButton, useTheme, Button } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Form, { IForm, IFormData } from "../../components/form";
import Table from "../../components/table";

const Home = () => {

  const theme = useTheme();
  const [formData, setFormData] = useState<IForm[]>([structuredClone(IFormData)])
  const [isTable, setIsTable] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '3rem'
      }}
    >
      <div
        style={{
          maxWidth: '60%',
        }}
      >
        <header>
          <Typography variant="h6" color="rgb(48, 108, 160)"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Pain & Functional Description
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                maxWidth: "50%",
              }}
            >
              The description of the current situation gives your Optimum
              Trainer a picture of and clues to the underlying causes of your
              problems
            </Typography>

          </div>

          <Typography
            sx={{ mt: '0.5rem' }}
            variant="body2"
          >
            If you have problems with pain/aches, stiffness, weakness or functional problems, describe
            <br />
            this/these below. (List the symptoms in descending order with the most troublesome first)
          </Typography>
          <div style={{
            height: '4rem',
            border: 'gray solid 1px',
            borderRadius: '0.5rem',
          }}>

          </div>
        </header>
        {
          isTable ?
            (

              <Table formData={formData} />
            ) :
            (

              <article style={{
                marginBottom: '1rem'
              }}>
                {
                  formData.map((form, index) => (
                    <React.Fragment key={index}>
                      <Form
                        formData={formData}
                        setFormData={setFormData}
                        data={form}
                        index={index}
                      />
                      <Divider>
                        {
                          formData.length === index + 1 ? (
                            <>
                              <IconButton
                                onClick={() => setFormData((prevState) => {
                                  const newFormData = structuredClone(formData);
                                  const newForm = structuredClone(IFormData);
                                  newForm.id = prevState.length + 1;
                                  return [...newFormData, newForm];
                                })}
                                sx={{ bgcolor: theme.palette.primary.main, color: 'white' }} size="small" aria-label="delete">
                                <AddRoundedIcon />
                              </IconButton>
                            </>
                          ) :
                            (
                              <Typography key={index}>
                                Form No {index + 2}
                              </Typography>
                            )
                        }
                      </Divider>
                    </React.Fragment>
                  ))
                }
              </article>
            )
        }

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }} >
            <Button onClick={() => setIsTable(false)} disabled={!isTable} variant="contained">Back</Button>
            <Button
              onClick={() => setIsTable(true)}
              disabled={isTable}
              variant="contained" >Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
