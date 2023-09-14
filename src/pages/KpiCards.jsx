import { Card, Metric, Text, Icon, Flex, Grid } from "@tremor/react";

import { TicketIcon, CurrencyEuroIcon } from "@heroicons/react/solid";
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

