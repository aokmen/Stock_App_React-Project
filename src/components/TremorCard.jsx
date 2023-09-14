import { Card, Text, Metric, Flex, ProgressBar, Icon, Title, Bold } from "@tremor/react";
import { CashIcon,ShoppingCartIcon } from "@heroicons/react/outline";
import { Box } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const SalesTremorCard = ({sales}) => (
  
<Card  decoration="top" decorationColor="indigo">
    <Flex className="space-x-6">
      <Icon icon={ShoppingCartIcon} color="indigo" variant="solid" tooltip="Sum of Sales" size="sm" />
      <div>
        <Text>Sales</Text>
        <Bold>$ {sales?.reduce( (result, item) => result + Number(item.price_total)
, 0)}</Bold>
      </div>
    </Flex>
  </Card>
);
export const ProfitTremorCard = ({sales,purchases}) => (
    <Card  decoration="top" decorationColor="fuchsia">
       <Flex className="space-x-6">
      <Icon icon={CashIcon} color="fuchsia" variant="solid" tooltip="Sum of Sales" size="sm" />
      <div >
        <Text >Profit</Text>
       <Bold>$ {  (sales?.reduce( (result, item) => result + Number(item.price_total)
, 0)) - (purchases?.reduce( (result, item) => result + Number(item.price_total)
, 0))}</Bold>
      </div>
    </Flex>
    </Card>
  );
export const PurchasesTremorCard = ({purchases}) => (
    <Card  decoration="top" decorationColor="amber">
       <Flex className="space-x-6">
      <Icon icon={MonetizationOnIcon} color="amber" variant="solid" tooltip="Sum of Sales" size="sm" />
      <div>
        <Text>Purchases</Text>
        <Bold>$ {purchases?.reduce( (result, item) => result + Number(item.price_total)
, 0)}</Bold>
      </div>
    </Flex>
    </Card>
  );