import React from 'react';

import {tableOrderColumnStructure, tableOrderSubRowStructure} from './AppRT/store/apiStructure/dataCampaigns';
import {tableTotalData} from './AppRT/store/apiStructure/dataTotalApiHardcode';
import TableRT from './LibRT/table/Table';


const TablePage = (
    <div className='campaignTableDeck'>
      <div className='campaignDataTable'>
          <TableRT
            className=''
            subRowStructure={tableOrderSubRowStructure}
            tableColumnStructure={tableOrderColumnStructure}
            tableData={tableTotalData}
          />
      </div>
    </div>
);

export default TablePage;