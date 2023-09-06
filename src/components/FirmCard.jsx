import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { CardHeader } from "@mui/material";

export default function FirmCard({firm}) {
  return (
    <Card
      sx={{
        minHeight: 380,
        maxHeight: 380,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}>
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
      </CardContent> */}
      <CardHeader title={firm.name} subheader={firm.address} />
      <CardMedia
        component="img"
        sx={{ height: 130, objectFit: "contain" }}
        image={firm.image}
        title={firm.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone : {firm.phone}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        <EditIcon sx={{ cursor: "pointer", "&:hover": { color: "red" } }} />
        <DeleteOutlineIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
        />
      </CardActions>
    </Card>
  );
}
