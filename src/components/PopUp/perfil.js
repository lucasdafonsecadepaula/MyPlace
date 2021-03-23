import React from "react";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";

function Perfil(dados) {
  console.log(dados.fields.Attachments[0].url);
  return (
    <>
      <Paper>
        <img src={dados.fields.Attachments[0].url} />
        <div>AAAAAAAAAAAAA</div>
      </Paper>
    </>
  );
}

export default Perfil;
