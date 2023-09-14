import { Card, Metric, Text, Icon, Flex, Color, Grid } from "@tremor/react";

import { CashIcon, TicketIcon, CurrencyEuroIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function KpiCards() {
  const { sales, purchases } = useSelector(state => state.stock);

  const totalSales = sales?.reduce(
    (acc, item) => acc + Number(item.price_total),
    0
  );
  // console.log(totalSales)
  const totalPurchases = purchases?.reduce(
    (acc, item) => acc + Number(item.price_total),
    0
  );
  const totalCash = totalSales - totalPurchases;

  const categories = [
    {
      title: "Sales",
      metric: `€ ${totalSales}`,
      icon: TicketIcon,
      color: "indigo",
    },
    {
      title: "Cash",
      metric: `€ ${totalCash}`,
      icon: CurrencyEuroIcon,
      color: "fuchsia",
    },
    {
      title: "Purchases",
      metric: `€ ${totalPurchases}`,
      icon: ShoppingCartIcon, // mui icons dan da kullanılabilir
      color: "amber",
    },
  ];

  return (
    <Grid
      // numItemsSm={2}
      // numItemsLg={3}
      className="flex justify-center items-center flex-wrap gap-6 w-full md:w-[78%] xl:w-full mx-auto">
      {categories.map(item => (
        <Card key={item.title} decoration="top" decorationColor={item.color}className="w-full lg:w-5/12 xl:w-3/12">
          <Flex justifyContent="start" className="space-x-4">
            <Icon
              icon={item.icon}
              variant="light"
              size="xl"
              color={item.color}
            />
            <div className="w-8/12">
              <Text>{item.title}</Text>
              <Metric className="text-sm xl:text-2xl">{item.metric}</Metric>
            </div>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}

//! versiyon mui
// import { Avatar, Box, Grid, Paper, Typography } from "@mui/material"
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
// import PaymentsIcon from "@mui/icons-material/Payments"
// import { amber, deepPurple, pink } from "@mui/material/colors"
// import { useSelector } from "react-redux"

// const KpiCards = () => {
//   const { sales, purchases } = useSelector((state) => state.stock)

// const totalSales = sales.reduce((acc, val) => acc + Number(val.price_total), 0);

// const totalPurchases = purchases.reduce(
//   (acc, val) => acc + Number(val.price_total),
//   0
// );

//   const totalProfit = totalSales - totalPurchases
//   const data = [
//     {
//       id: 1,
//       title: "sales",
//       value: `$${totalSales}`,
//       icon: <MonetizationOnIcon sx={{ fontSize: "2.3rem" }} />,
//       color: deepPurple[600],
//       bgColor: deepPurple[100],
//     },
//     {
//       id: 2,
//       title: "profit",
//       value: `$${totalProfit}`,
//       icon: <ShoppingCartIcon sx={{ fontSize: "2.3rem" }} />,
//       color: pink[600],
//       bgColor: pink[100],
//     },
//     {
//       id: 3,
//       title: "purchases",
//       value: `$${totalPurchases}`,
//       icon: <PaymentsIcon sx={{ fontSize: "2.3rem" }} />,
//       color: amber[600],
//       bgColor: amber[100],
//     },
//   ]

//   return (
//     <Grid container justifyContent={"center"} spacing={3}>
//       {data.map((item) => (
//         <Grid
//           item
//           key={item.id}
//           xs={12}
//           sm={10}
//           md={6}
//           lg={4}
//           sx={{ minWidth: "250px" }}
//         >
//           <Paper sx={{ p: 2 }} elevation={10}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
//               <Avatar
//                 sx={{
//                   backgroundColor: item.bgColor,
//                   color: item.color,
//                   width: 70,
//                   height: 70,
//                   ml: 4,
//                 }}
//               >
//                 {item.icon}
//               </Avatar>

//               <Box>
//                 <Typography variant="button">{item.title}</Typography>
//                 <Typography variant="h4">{item.value}</Typography>
//               </Box>
//             </Box>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   )
// }