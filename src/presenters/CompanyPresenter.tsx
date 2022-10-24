import { FC } from 'react'

import CompanyView from '../views/CompanyView/CompanyView';
import { DummyModel, TicketsModel } from '../models/DummyModel';

interface Props {
    model: DummyModel;
    ticketsModel: TicketsModel;
}

const CompanyPresenter: FC<Props>= ({ model, ticketsModel }) =>{
  return (
    <CompanyView 
      companies={model.companies} 
      company={model.companies[model.currentCompany]} 
      setStar={() => model.setStar()} 
      availableTickets={ticketsModel.availableTickets}></CompanyView>
  )
}

export default CompanyPresenter