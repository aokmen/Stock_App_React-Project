import {
    Card,
    Title,
    LineChart,
    TabList,
    Tab,
    TabGroup,
    TabPanel,
    TabPanels,
  } from "@tremor/react";
  import { useSelector } from "react-redux";
  
  
  const valueFormatterAbsolute = (number) =>
    Intl.NumberFormat("us").format(number).toString();
  
  export default function Charts() {
    const {sales,purchases} = useSelector(state=> state.stock)
  
    const salesData = sales.map(item=> {return {
        Date: item.createds,
        sale: Number(item.price_total),
      }
    })
    const purchasesData = purchases.map(item => ({
      Date: item.createds,
      purchase: Number(item.price_total),
    }));  
  
    return (
      <Card className="mt-4 sm:w-[78%] mx-auto">
        <TabGroup>
          <div className="block sm:flex sm:justify-between">
            <div>
              <Title>Sales and Purchases</Title>
              {/* <Text>Lost customers per day</Text> */}
            </div>
            <div className="mt-4 sm:mt-0">
              <TabList variant="solid">
                <Tab>Sales</Tab>
                <Tab>Purchases</Tab>
              </TabList>
            </div>
          </div>
          <TabPanels>
            <TabPanel>
              <LineChart
                className="mt-8 h-80"
                data={salesData}
                index="Date"
                categories={["sale"]}
                colors={["blue"]}
                showLegend={false}
                valueFormatter={valueFormatterAbsolute}
                yAxisWidth={40}
              />
            </TabPanel>
            <TabPanel>
              <LineChart
                className="mt-8 h-80"
                data={purchasesData}
                index="Date"
                categories={["purchase"]}
                colors={["red"]}
                showLegend={false}
                valueFormatter={valueFormatterAbsolute}
                yAxisWidth={40}
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    );
  }