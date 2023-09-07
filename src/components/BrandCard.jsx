import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { CardHeader } from "@mui/material";
import useStockCall from "../hooks/useStockCall";

export default function BrandCard({brand}) {
    const {deleteStockData} = useStockCall()
  return (
    <Card
      sx={{
        minHeight: 350,
        maxHeight: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}>
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brand.address}
        </Typography>
      </CardContent> */}
      <CardHeader title={brand.name} subheader={brand.address} />
      <CardMedia
        component="img"
        sx={{ height: 130, objectFit: "contain" }}
        image={brand.image}
        title={brand.name}
      />
      <CardContent>
     
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
            onClick={()=> deleteStockData('brands', brand.id)}
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
        />
      </CardActions>
    </Card>
  );
}
