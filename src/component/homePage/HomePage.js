import React, { useState } from "react";
import styles from "./HomePage.module.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const HomePage = () => {
  const useStyles = makeStyles({
    tableContainer: {
      borderRadius: "15px",
      maxWidth: "700px",
      width: "100%",
      margin: "0px",
      border: "1px solid #3faad7",
    },
    tableRow: {
      backgroundColor: "#3faad7",
    },
    tableCell: {
      color: "#fff",
      textAlign: "center",
    },
  });
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(ime, prezime, email, telefon) {
    return { ime, prezime, email, telefon };
  }

  const rows = [
    createData("marko", "Markovic", "markomarkovi@gmail.com", "065/292-620"),
    createData("marko", "Markovic", "markomarkovi@gmail.com", "065/292-620"),
    createData("marko", "Markovic", "markomarkovi@gmail.com", "065/292-620"),
    createData("marko", "Markovic", "markomarkovi@gmail.com", "065/292-620"),
    createData("marko", "Markovic", "markomarkovi@gmail.com", "065/292-620"),
  ];
  return (
    <div className={styles.home}>
      {/* //div koji sadrzi button za otvaranje modula */}
      <div className={styles.Add}>
        <div className={styles.AddLeft}>
          <div className={styles.ListMenu}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <h3>Kontakti</h3>
        </div>
        <Button
          onClick={handleOpen}
          variant="contained"
          size="medium"
          style={{
            borderRadius: "15px",
            padding: "10px 25px",
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "600",
          }}
        >
          Dodaj Novi
        </Button>
      </div>

      <div className={styles.Home2}>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Ime</TableCell>
                <TableCell className={classes.tableCell}>Prezime</TableCell>
                <TableCell className={classes.tableCell}>Email</TableCell>
                <TableCell className={classes.tableCell}>
                  Br. Telefona
                </TableCell>
                <TableCell className={classes.tableCell}>Akcija</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.ime}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.ime}
                  </TableCell>
                  <TableCell align="right">{row.prezime}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.telefon}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <div className={styles.Action}>
                      <EditIcon color="primary" fontSize="small" />{" "}
                      <DeleteForeverIcon fontSize="small" />
                    </div>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={styles.box}>
            <h3>Dodajte Novi</h3>
            <input type="text" className={styles.Input} placeholder="Ime" />
            <input type="text" className={styles.Input} placeholder="Prezime" />
            <input type="text" className={styles.Input} placeholder="Email" />
            <input
              type="text"
              className={styles.Input}
              placeholder="Broj Telefona"
            />
            <Button
              variant="contained"
              size="medium"
              style={{
                width: "50%",
                borderRadius: "15px",
                padding: "10px 25px",
                fontSize: "15px",
                textTransform: "none",
                fontWeight: "600",
              }}
            >
              Dodaj
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default HomePage;
