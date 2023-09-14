import { InformationCircleIcon } from "@heroicons/react/solid"
import { Card} from "@tremor/react";
import {
  Flex,
  Title,
  Icon,
  TabGroup,
  TabList,
  Tab,
  AreaChart,
  Text
} from "@tremor/react"
import { useState } from "react"



const usNumberformatter = (number, decimals = 0) =>

  Intl.NumberFormat("us", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
    .format(Number(number))
    .toString()

const formatters = {

  Sales: number => `$ ${usNumberformatter(number)}`,
  Profit: number => `$ ${usNumberformatter(number)}`,
  Customers: number => `${usNumberformatter(number)}`,
  Delta: number => `${usNumberformatter(number, 2)}%`
}

const Kpis = {
  Sales: "Sales",
  Profit: "Profit",
  Customers: "Customers"
}

const kpiList = [Kpis.Sales, Kpis.Profit, Kpis.Customers]

export const performance = [
    
  {
    date: "2023-05-01",
    Sales: 900.73,
    Profit: 173,
    Customers: 73
  },
  {
    date: "2023-05-02",
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74
  },
  {
    date: "2023-05-03",
    Sales: 1100.93,
    Profit: 293.1,
    Customers: 293
  },
  {
    date: "2023-05-04",
    Sales: 1200.9,
    Profit: 290.2,
    Customers: 29
  }
]

export default function TremorChart({sales,purchases}) {



    // const performance = [
    
     
    //         {
    //             date: sales.map(item => item.createds)
    //         },
    //         {
    //             Sales: sales.map(item => item.price_total)
    //         },
    //         {
    //             Profit: 173
    //         },
    //         {
    //             Customers: 73
    //         }
    //     ];
       

    
        
        // {
        //   date: "2023-05-02",
        //   Sales: 1000.74,
        //   Profit: 174.6,
        //   Customers: 74
        // },
        // {
        //   date: "2023-05-03",
        //   Sales: 1100.93,
        //   Profit: 293.1,
        //   Customers: 293
        // },
        // {
        //   date: "2023-05-04",
        //   Sales: 1200.9,
        //   Profit: 290.2,
        //   Customers: 29
        // }
      

  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedKpi = kpiList[selectedIndex]

  const areaChartArgs = {
    className: "mt-5 h-72",
    data: performance,
    index: "date",
    categories: [selectedKpi],
    colors: ["blue"],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 56
  }

  return (
    <>
    <Card className="w-[100%]" decoration="top">
      <div className="md:flex justify-between">
        <div>
          <Flex
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
           
          </Flex>
          <Text> Sales and Purchases</Text>
        </div>
        <div>
          <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
            <TabList color="gray" variant="solid">
              <Tab>Sales</Tab>
              <Tab>Profit</Tab>
              <Tab>Customers</Tab>
            </TabList>
          </TabGroup>
        </div>
      </div>
      {/* web */}
      <div className="mt-8 hidden sm:block">
        <AreaChart {...areaChartArgs} />
      </div>
      {/* mobile */}
      <div className="mt-8 sm:hidden">
        <AreaChart
          {...areaChartArgs}
          startEndOnly={true}
          showGradient={false}
          showYAxis={false}
        />
      </div>
      </Card>
    </>
  )
}
